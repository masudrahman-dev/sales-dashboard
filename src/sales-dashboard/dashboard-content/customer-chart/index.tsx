import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  {
    name: "Page A",
    Last: 4000,
    This: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    Last: 3000,
    This: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    Last: 2000,
    This: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    Last: 2780,
    This: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    Last: 1890,
    This: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    Last: 2390,
    This: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    Last: 3490,
    This: 4300,
    amt: 2100,
  },
];
import { useMeasure } from "react-use";
import { v4 } from "uuid";
import { KeyIcon } from "@heroicons/react/24/outline";

const lastMonthTotal = (key: string) => {
  if (key === "Last") {
    const t = data?.reduce((pre, acc) => {
      const total = pre + acc?.Last;
      return total;
    }, 0);

    return t;
  } else if (key === "This") {
    const t = data?.reduce((pre, acc) => {
      const total = pre + acc?.This;
      return total;
    }, 0);
    return t;
  }
};
const renderLegend = (props) => {
  const { payload } = props;

  return (
    <ul className="flex  mt-6 gap-3 justify-center">
      {payload.map((entry, index) => (
        <li key={v4()} className="text-center">
          <p className="flex items-center gap-1 justify-center">
            <KeyIcon className="w-4 h-4 text-slate-500  " />
            <span className="text-slate-500">{entry.value} Month</span>
          </p>
          <span className="font-bold">${lastMonthTotal(entry?.value)}</span>
        </li>
      ))}
    </ul>
  );
};
const CustomerChart = () => {
  const [ref, { width }] = useMeasure();
  return (
    <div ref={ref} className="mt-6">
      <AreaChart width={width} height={300} data={data}>
        <defs>
          <linearGradient id="colorLast" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorThis" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        {/* <XAxis hide={true} /> */}
        {/* <YAxis /> */}
        <CartesianGrid
          vertical={false}
          fillOpacity={0.3}
          strokeDasharray="12 12"
        />
        <Tooltip />
        <Legend iconSize={16} content={renderLegend} />

        <Area
          dot={true}
          type="monotone"
          dataKey="Last"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorLast)"
        />
        <Area
          dot={true}
          type="monotone"
          dataKey="This"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorThis)"
        />
      </AreaChart>
    </div>
  );
};

export default CustomerChart;
