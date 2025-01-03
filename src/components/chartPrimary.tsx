"use client";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import { Card, CardContent } from "./ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 14 },
  { month: "Jul", desktop: 94 },
  { month: "Agost", desktop: 214 },
  { month: "Sep", desktop: 24 },
  { month: "Oct", desktop: 214 },
  { month: "Nov", desktop: 101 },
  { month: "Dec", desktop: 199 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;
export function ChartPrimary() {
  return (
    <Card className="lg:w-9/12 h-[28rem]">
      <ChartContainer config={chartConfig}>
        <CardContent className="p-6">
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </ChartContainer>
    </Card>
  );
}
