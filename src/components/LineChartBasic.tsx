import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  
  const COLORS = ["red", "#172554", "#00bfff", "#04a5c2", "#1e3a8a"];
  
  export function LineChartBasic({
    data,
    dataKeys,
    xaxis,
    yaxis = true,
  }: {
    data: Array<unknown>;
    dataKeys: Array<unknown>;
    xaxis: string;
    yaxis?: boolean;
  }) {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey={xaxis} label={{ value: xaxis, offset: -5, position: "insideBottom" }} />
          {yaxis && <YAxis />}
          <Tooltip labelClassName="text-black dark:text-red-500 font-semibold" />
          <Legend />
          {dataKeys.map((dataKey: any, index: number) => {
            return (
              <Line
                type="monotone"
                dataKey={dataKey}
                key={index}
                stroke={COLORS[index]}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    );
  }