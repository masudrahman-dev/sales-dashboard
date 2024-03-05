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

const VisitorsChart = () => {
  const [ref, { width }] = useMeasure();
  return (
    <div ref={ref} className="mt-6">
      <LineChart width={width} height={300} data={visitorsData}>
        <CartesianGrid
          vertical={false}
          fillOpacity={0.3}
          strokeDasharray="12 12"
        />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip active={false} />
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
