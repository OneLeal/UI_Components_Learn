import React, { CSSProperties } from "react";
import classNames from "classnames";
import "./style.css";

interface IProps {
  type: string;
  className?: string;
  style?: CSSProperties;
}

const DIcon: React.FC<IProps> = ({ type, style, className = "" }) => {
  const classNameStr = classNames({
    "dao-icon": true,
    [type]: !!type,
    [className]: !!className,
  });
  return <i style={style} className={classNameStr} />;
};

export default DIcon;
