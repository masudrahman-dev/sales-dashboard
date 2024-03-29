import { ChartBar } from "@medusajs/icons";
import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import clx from "../../utils/clx";

interface CardProps {
  children?: ReactNode;
  icon?: ReactNode;
  pageLink: string;
  title: string;
  total: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  icon,
  pageLink,
  title,
  total,
  className,
}) => {
  return (
    <div className={clx("bg-rose-200 p-5 rounded-lg space-y-2", className)}>
      <span className=" text-white w-8 h-8 rounded-full bg-rose-400 flex justify-center items-center">
        {icon ? icon : ""}
      </span>
      <p className="font-bold text-xl">{total}</p>
      <p className="text-slate-500 text-sm">{title}</p>
      <NavLink
        className={"text-blue-500 block"}
        to={`${pageLink ? pageLink : "#"}`}
      >
        +8% from yesterday
      </NavLink>
      <div>{children}</div>
    </div>
  );
};

export default Card;
