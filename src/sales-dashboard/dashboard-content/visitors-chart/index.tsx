import React from "react";

import { useMeasure } from "react-use";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { visitorsData } from "../charts-data";
import useWindowWidth from "../../../utils/useWindowWidth";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const getIntroOfPage = (label) => {
  if (label === "Page A") {
    return "Page A is about men's clothing";
  }
  if (label === "Page B") {
    return "Page B is about women's dress";
  }
  if (label === "Page C") {
    return "Page C is about women's bag";
  }
  if (label === "Page D") {
    return "Page D is about household goods";
  }
  if (label === "Page E") {
    return "Page E is about food";
  }
  if (label === "Page F") {
    return "Page F is about baby food";
  }
  return "";
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }

  return null;
};
const VisitorsChart = () => {
  const [ref, { width }] = useMeasure();
  const { innerWidth } = useWindowWidth();
  return (
    <div ref={ref} className="mt-6">
      <LineChart
        width={width}
        height={innerWidth < 500 ? 300 : 200}
        data={visitorsData}
      >
        <CartesianGrid
          vertical={false}
          fillOpacity={0.3}
          strokeDasharray="12 12"
        />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <YAxis />
        <Tooltip
          itemStyle={{
            fontSize: 14,
            paddingTop: 0,
            paddingBottom: 0,
          }}
          cursor={{ stroke: "red", strokeWidth: 4 }}
          contentStyle={{
            borderRadius: 8,
          }}
          // allowEscapeViewBox={{ x: false, y: false }}
          // formatter={(value, name, props) => {
          //   return [value, name];
          // }}

          // labelFormatter={(props, a, b, c) => {
          //   console.log("props :>> ", { props, a, b, c });
          //   return "ts";
          // }}
        />
        <Legend iconSize={16} iconType="circle" />
        <Line
          dot={false}
          type="monotone"
          strokeWidth={4}
          dataKey="loyal"
          stroke="#6366f1"
        />
        <Line
          dot={false}
          type="monotone"
          strokeWidth={4}
          dataKey="new"
          stroke="#f43f5e"
        />
        <Line
          dot={false}
          type="monotone"
          strokeWidth={4}
          dataKey="unique"
          stroke="#22c55e"
        />
      </LineChart>
    </div>
  );
};

export default VisitorsChart;
