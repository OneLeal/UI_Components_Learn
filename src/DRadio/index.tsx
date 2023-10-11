import classNames from "classnames";
import React, { useRef, useState } from "react";

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const DRadio = (props: IProps) => {
  const { children, checked, defaultChecked, onChange } = props;
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const inputEl = useRef(null);

  const cls = classNames({
    "dao-radio": true,
    "dao-radio-checked": false,
  });

  const wrapCls = classNames({ "dao-radio-wrap": true });

  const handleClick = (e: any) => {
    setIsChecked(!isChecked);
    if (typeof onChange === 'function') {
        e.target = inputEl.current;
        onChange(e);
    }
  }

  return (
    <span className={wrapCls} onClick={handleClick}>
      <span className={cls}>
        <input className="dao-radio-input" type="radio" ref={inputEl} />
        <span className="dao-radio-inner" />
      </span>

      <span>{children}</span>
    </span>
  );
};

export default DRadio;
