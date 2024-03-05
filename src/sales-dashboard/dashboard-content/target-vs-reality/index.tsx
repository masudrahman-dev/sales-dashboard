import React, { useEffect, useState } from "react";
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
import useWindowWidth from "../../../utils/useWindowWidth";
import { v4 } from "uuid";
import { KeyIcon } from "@heroicons/react/24/outline";
import getTotal from "../../../utils/getTotal";
import clx from "../../../utils/clx";

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

const renderLegend = (props) => {
  const { payload } = props;

  return (
    <ul className="space-y-3">
      {payload.map((entry) => {
        return (
          <li key={v4()} className="text-center ">
            <div className="flex items-center gap-32">
              <div className="flex items-center gap-3 ">
                <span className="w-8 flex justify-center items-center rounded-lg h-8 border ">
                  <KeyIcon
                    className={clx(" w-6 h-6", {
                      "text-[#22c55e]": entry.color === "#22c55e",
                      "text-[#eab308]": entry.color === "#eab308",
                    })}
                  />
                </span>
                <p className="text-start">
                  <p className="text-slate-500">{entry.value} Sales</p>
                  <p>Test</p>
                </p>
              </div>
              <p
                className={clx(`font-bold `, {
                  "text-[#22c55e]": entry.color === "#22c55e",
                  "text-[#eab308]": entry.color === "#eab308",
                })}
              >
                $
                {getTotal({
                  data,
                  key: entry?.value,
                  compareKey1: "Reality",
                  compareKey2: "Target",
                })}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
const TargetVsReality = () => {
  const [ref, { width }] = useMeasure();
  const { innerWidth } = useWindowWidth();

  return (
    <div ref={ref} className="mt-6 overflow-auto">
      <BarChart width={width} height={innerWidth < 600 ? 300 : 300} data={data}>
        <CartesianGrid
          vertical={false}
          fillOpacity={0.3}
          strokeDasharray="12 12"
        />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />

        <Tooltip />
        <Legend iconSize={16} iconType="square" content={renderLegend} />
        <Bar
          radius={[3, 3, 0, 0]}
          barSize={width < 600 ? 8 : 16}
          dataKey="Target"
          fill="#22c55e"
        />
        <Bar
          radius={[3, 3, 0, 0]}
          barSize={width < 600 ? 8 : 16}
          dataKey="Reality"
          fill="#eab308"
        />
      </BarChart>
    </div>
  );
};

export default TargetVsReality;
