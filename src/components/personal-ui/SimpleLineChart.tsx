import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  import { Data } from "@/types/graphingTypes";
  
  export function SimpleLineChart({ data }: { data: Data[] }) {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data} >
          <XAxis dataKey="x" />
          <Tooltip />
          <Line type="monotone" dataKey="y" stroke="#fc0303" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
  