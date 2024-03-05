import React from "react";
import { useMeasure } from "react-use";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Mon",
    online: 4000,
    offline: 2400,
  },
  {
    name: "Tues",
    online: 3000,
    offline: 1398,
  },
  {
    name: "Wed",
    online: 2000,
    offline: 9800,
  },
  {
    name: "Thur",
    online: 2780,
    offline: 3908,
  },
  {
    name: "Fri",
    online: 1890,
    offline: 4800,
  },
  {
    name: "Sat",
    online: 1890,
    offline: 4800,
  },
  {
    name: "Sun",
    online: 2390,
    offline: 3800,
  },
];

const RevenueChart = () => {
  const [ref, { width }] = useMeasure();
  return (
    <div ref={ref} className="mt-6 overflow-auto">
      <BarChart width={width} height={300} data={data}>
        <CartesianGrid
          vertical={false}
          fillOpacity={0.3}
          strokeDasharray="12 12"
        />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend iconSize={16} iconType="square" />
        <Bar barSize={13} dataKey="offline" fill="#10b981" />
        <Bar barSize={13} dataKey="online" fill="#3b82f6" />
      </BarChart>
    </div>
  );
};

export default RevenueChart;
