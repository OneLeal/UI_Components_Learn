import React, { ReactNode } from "react";
import classNames from "classnames";
import DIcon from "../DIcon";
import "./style.css";

// TODO: disabled & size & icon & click event
interface IProps {
  type?: "primary";
  className?: string;
  children?: ReactNode;
  icon?: string;
}

// FIXME: 外层传入的 className 优先级问题 & 原生属性透传问题
const DButton: React.FC<IProps> = ({
  type,
  className = "",
  icon,
  children,
}) => {
  const classNameStr = classNames({
    "dao-btn": true,
    [`dao-btn-${type}`]: !!type,
    [className]: !!className,
  });
  return (
    <button className={classNameStr}>
      {icon && <DIcon type={icon} />}
      {children}
    </button>
  );
};

export default DButton;
