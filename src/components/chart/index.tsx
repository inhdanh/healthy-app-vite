import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Data for the chart
const data = [
  { month: "1 月", line1: 10, line2: 14 },
  { month: "2 月", line1: 15, line2: 6 },
  { month: "3 月", line1: 12, line2: 4 },
  { month: "4 月", line1: 8, line2: 8 },
  { month: "5 月", line1: 11, line2: 13 },
  { month: "6 月", line1: 9, line2: 19 },
  { month: "7 月", line1: 13, line2: 7 },
  { month: "8 月", line1: 16, line2: 6 },
  { month: "9 月", line1: 14, line2: 7 },
  { month: "10 月", line1: 10, line2: 20 },
  { month: "11 月", line1: 12, line2: 9 },
  { month: "12 月", line1: 18, line2: 17 },
];

// Chart component
const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Line
          type="linear"
          dataKey="line1"
          stroke="#FFCC21"
          strokeWidth={3}
          fill="#FFCC21"
        />
        <Line
          type="linear"
          dataKey="line2"
          stroke="#8FE9D0"
          strokeWidth={3}
          fill="#8FE9D0"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
