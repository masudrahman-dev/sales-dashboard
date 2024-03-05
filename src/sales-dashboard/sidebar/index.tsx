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
    <div className=" border  pb-20">
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

        <div className="px-12 ">
          <div className="w-full   rounded-lg self-end shadow-lg  mt-20 bg-primary h-60 text-white">
            <div className="">
              <div>
                <TvIcon className="w-6 h-6" />
                <h1>Dabang Pro</h1>
                <p>
                  Get Access <br /> to All Features{" "}
                </p>
                <button className="bg-white rounded-lg p-3 text-primary font-bold">
                  Get Pro
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
