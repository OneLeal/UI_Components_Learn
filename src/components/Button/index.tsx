import React, { useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import "./style.css";

const ButtonShapes = ["default", "circle", "round"] as const;
const ButtonTypes = [
  "default",
  "primary",
  "success",
  "info",
  "warning",
  "error",
  "dashed",
  "link",
  "text",
] as const;

type SizeType = "small" | "middle" | "large" | undefined;
type ButtonType = (typeof ButtonTypes)[number];
type ButtonShape = (typeof ButtonShapes)[number];
type LoadingConfigType = { loading: boolean; delay: number };
type MergedHTMLAttributes = Omit<
  React.HTMLAttributes<HTMLElement> &
    React.ButtonHTMLAttributes<HTMLElement> &
    React.AnchorHTMLAttributes<HTMLElement>,
  "type"
>;

interface ButtonProps extends MergedHTMLAttributes {
  type?: ButtonType;
  icon?: React.ReactNode;
  shape?: ButtonShape;
  size?: SizeType;
  disabled?: boolean;
  loading?: boolean | { delay?: number };
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  danger?: boolean;
  block?: boolean;
  underline?: boolean;
  children?: React.ReactNode;
  // [key: `data-${string}`]: string;
  styles?: { icon: React.CSSProperties };
}

// 配置 loading 数据
function getLoadingConfig(loading: ButtonProps["loading"]): LoadingConfigType {
  if (typeof loading === "object" && loading) {
    const delay = loading?.delay;
    const isDelay = !Number.isNaN(delay) && typeof delay === "number";
    return {
      loading: false,
      delay: isDelay ? delay : 0,
    };
  }

  return {
    loading: !!loading,
    delay: 0,
  };
}

const MyButton = (props: ButtonProps) => {
  const {
    size,
    icon,
    type,
    shape,
    children,
    block,
    danger,
    href,
    target,
    styles,
    className,
    disabled,
    loading,
    underline,
  } = props;

  const typeClass = classNames({
    "my-btn": true,
    [`my-btn-${type}`]: !!type,
    [`my-btn-${type}-disabled`]: disabled && !!type && type === "link",
    [`my-btn-${type}-underline`]: !!underline && !!type && type === "link",
  });

  const loadingOrDelay = useMemo<LoadingConfigType>(
    () => getLoadingConfig(loading),
    [loading]
  );
  const [innerLoading, setLoading] = useState<boolean>(loadingOrDelay.loading); // 组件内部的 loading 状态

  // 处理点击事件
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => {
    const { onClick } = props;
    if (innerLoading || disabled) {
      e.preventDefault();
      return;
    }

    // click 事件在非禁用 & 非加载时才生效
    (
      onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
    )?.(e);
  };

  // 初始化 or 设置组件内部的 loading 状态
  useEffect(() => {
    let delayTimer: ReturnType<typeof setTimeout> | null = null;
    if (loadingOrDelay.delay > 0) {
      delayTimer = setTimeout(() => {
        delayTimer = null;
        setLoading(true);
      }, loadingOrDelay.delay);
    } else {
      setLoading(loadingOrDelay.loading);
    }

    function cleanupTimer() {
      if (delayTimer) {
        clearTimeout(delayTimer);
        delayTimer = null;
      }
    }

    return cleanupTimer;
  }, [loadingOrDelay]);

  if (type === "link") {
    return (
      <a
        className={typeClass}
        href={href || "#"}
        target={target || "_self"}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={typeClass} disabled={disabled} onClick={handleClick}>
      {children}
    </button>
  );
};
export default MyButton;
