import React, { ReactNode } from "react";
import Button from "../button";

interface TitleProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
}

const Title: React.FC<TitleProps> = ({ title, subtitle, icon }) => {
  return (
    <>
      <div>
        <p className="text-xl font-bold">{title && title}</p>
        <p className="text-sm text-slate-500">{subtitle && subtitle}</p>
      </div>

      {icon && icon}
    </>
  );
};

export default Title;
