import React from "react";
import Button from "../../../components/button";
import Card from "../../../components/card";
import { v4 } from "uuid";
import { ChartBar } from "@medusajs/icons";
import Title from "../../../components/title";

const Sales = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Title
          title="Today's Sales"
          subtitle="Sales Summary"
          icon={<Button />}
        />
      </div>
      <div className="flex gap-3 justify-between mt-6">
        <Card
          key={v4()}
          icon={<ChartBar />}
          pageLink="/"
          title="Total Sales"
          total="$1k"
        />
        <Card
          key={v4()}
          className="bg-yellow-100"
          icon={<ChartBar />}
          pageLink="/"
          title="Total Sales"
          total="300"
        />
        <Card
          className="bg-green-100"
          key={v4()}
          icon={<ChartBar />}
          pageLink="/"
          title="Total Sales"
          total="5"
        />
        <Card
          className="bg-indigo-100"
          key={v4()}
          icon={<ChartBar />}
          pageLink="/"
          title="Total Sales"
          total="8"
        />
      </div>
    </>
  );
};

export default Sales;
