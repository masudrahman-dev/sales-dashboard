import React from "react";

import Sales from "./sales";
import Title from "../../components/title";
import clx from "../../utils/clx";

import VisitorsChart from "./visitors-chart";
import RevenueChart from "./revenue-chart";
import CustomerChart from "./customer-chart";
import TargetVsReality from "./target-vs-reality";

const DashboardContent = () => {
  const containerStyle = " rounded-lg shadow  bg-white  p-6";
  return (
    <div className="">
      <div className=" mt-14">
        <div className="grid grid-cols-1 md:grid-cols-12   gap-4">
          <div className={clx("md:col-span-7", containerStyle)}>
            <Sales />
          </div>
          <div className={clx("md:col-span-5", containerStyle)}>
            <Title title="Visitors Insights" />

            <VisitorsChart />
          </div>

          <div className={clx("md:col-span-6", containerStyle)}>
            <Title title="Total Revenue" />
            <RevenueChart />
          </div>

          <div className={clx("md:col-span-3", containerStyle)}>
            <Title title="Customer Satisfaction" />
            <CustomerChart />
          </div>

          <div className={clx("md:col-span-3", containerStyle)}>
            <Title title="Target vs Reality" />
            <TargetVsReality />
          </div>
          {/* <div className="border md:col-span-3">05</div> */}
          <div className="border md:col-span-6">06</div>
          <div className="border md:col-span-3">07</div>
          <div className="border md:col-span-3">07</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
