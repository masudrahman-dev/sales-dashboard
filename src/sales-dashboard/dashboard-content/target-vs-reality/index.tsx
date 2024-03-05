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
  LabelList,
} from "recharts";

const data = [
  {
    name: "Jan",
    Target: 4000,
    Reality: 2400,
    unique: 300,
  },
  {
    name: "Fab",
    Target: 3000,
    Reality: 1398,
    unique: 2210,
  },
  {
    name: "Mar",
    Target: 2000,
    Reality: 3000,
    unique: 2290,
  },
  {
    name: "Apr",
    Target: 2780,
    Reality: 3908,
    unique: 2000,
  },
  {
    name: "May",
    Target: 1890,
    Reality: 4800,
    unique: 2181,
  },
  {
    name: "Jun",
    Target: 2390,
    Reality: 3800,
    unique: 2500,
  },
  {
    name: "Jul",
    Target: 3490,
    Reality: 4300,
    unique: 2100,
  },
  {
    name: "Aust",
    Target: 3490,
    Reality: 4300,
    unique: 2100,
  },
  {
    name: "Sep",
    Target: 3490,
    Reality: 4300,
    unique: 2100,
  },
  {
    name: "Oct",
    Target: 3490,
    Reality: 4300,
    unique: 2100,
  },
  {
    name: "Nov",
    Target: 3490,
    Reality: 4300,
    unique: 2100,
  },
  {
    name: "Dec",
    Target: 3490,
    Reality: 4300,
    unique: 2100,
  },
];

const TargetVsReality = () => {
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
        <Bar
          radius={[3, 3, 0, 0]}
          barSize={13}
          dataKey="Target"
          fill="#22c55e"
        />
        <Bar
          radius={[3, 3, 0, 0]}
          barSize={13}
          dataKey="Reality"
          fill="#eab308"
        ></Bar>
      </BarChart>
    </div>
  );
};

export default TargetVsReality;
