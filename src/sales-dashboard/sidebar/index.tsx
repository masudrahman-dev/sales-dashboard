import { KeyIcon } from "@heroicons/react/20/solid";
import { TvIcon } from "@heroicons/react/24/outline";
import { BeakerIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { v4 } from "uuid";

const sidebarItems = [
  {
    label: "Dashboard",
    path: "dashboard",
    icon: <KeyIcon />,
  },
  {
    label: "Leaderboard",
    path: "leaderboard",
    icon: <KeyIcon />,
  },
  {
    label: "Order",
    path: "order",
    icon: <KeyIcon />,
  },
  {
    label: "Products",
    path: "products",
    icon: <KeyIcon />,
  },
  {
    label: "Sales Report",
    path: "Sales-report",
    icon: <KeyIcon />,
  },
  {
    label: "Messages",
    path: "messages",
    icon: <KeyIcon />,
  },
  {
    label: "Settings",
    path: "settings",
    icon: <KeyIcon />,
  },
  {
    label: "Sign Out",
    path: "sign-out",
    icon: <KeyIcon />,
  },
];

const Sidebar = () => {
  const style =
    " hover:bg-primary block hover:text-white w-full flex rounded-lg w-full py-3 pl-4";
  return (
    <div className=" border h-screen overflow-hidden  pb-20">
      <div className="flex items-center  gap-3  pt-3 justify-center  ">
        <BeakerIcon className="h-6 w-6 text-blue-500" />
        <span className="text-primary font-bold text-2xl">Dabang</span>
      </div>

      <div className="mt-10">
        <ul role="list" className=" px-12   ">
          {sidebarItems.map((item, i) => {
            return (
              <li key={v4()} className="  text-center text-xl ">
                <NavLink
                  to={`/a/${item?.path}`}
                  className={({ isActive }) =>
                    [` ${style} ${isActive ? "text-rose-500 " : style}`].join(
                      " "
                    )
                  }
                >
                  <p className="inline-flex items-center   gap-3  ">
                    <span className="w-5 h-5">{item?.icon}</span>
                    <span>{item?.label}</span>
                  </p>
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div className="mx-12 mt-20 shadow-lg bg-primary text-white rounded-lg relative ">
          <div className="w-full    self-end    h-60 ">
            <div className=" ">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50   ">
                <div className="flex flex-col justify-center items-center">
                  <TvIcon className="w-6 h-6  " />

                  <h1 className=" font-bold">Dabang Pro</h1>
                  <p className=" text-sm font-medium text-center py-3">
                    Get Access <br /> to All Features{" "}
                  </p>
                </div>

                <div className="w-36 h-10  shadow-lg border rounded-lg">
                  <button className="bg-white w-full h-full  rounded-lg   block  text-primary font-bold">
                    Get Pro
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
