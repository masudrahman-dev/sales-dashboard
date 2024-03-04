import { BeakerIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { v4 } from "uuid";

const Sidebar = () => {
  const style =
    " hover:bg-primary hover:text-white w-full text-center rounded-lg  py-3";
  return (
    <div className=" border h-screen  overflow-y-auto pb-20">
      <div className="flex items-center  pt-3 justify-center  ">
        <BeakerIcon className="h-6 w-6 text-blue-500" />
        <span className="text-primary font-bold text-xl">Dabang</span>
      </div>
      <ul className="flex flex-col items-center mx-3  py-3 gap-3  ">
        {[...Array(10)].map((_, i) => {
          return (
            <NavLink
              to={`/a/${i}`}
              key={v4()}
              className={({ isActive }) =>
                [` ${style} ${isActive ? "text-rose-700 " : style}`].join(" ")
              }
            >
              item {i}
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
