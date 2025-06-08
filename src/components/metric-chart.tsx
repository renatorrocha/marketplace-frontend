import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar } from "lucide-react";
import {
	CartesianGrid,
	Line,
	LineChart,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import { ChartContainer } from "./ui/chart";

interface MetricChartProps {
	data: {
		amount: number;
		date: string;
	}[];
}

export default function MetricChart({ data }: MetricChartProps) {
	const chartConfig = {
		amount: {
			label: "Visitantes",
			color: "hsl(var(--chart-1))",
		},
	};

	const chartData = data.map((item) => ({
		...item,
		date: format(new Date(item.date), "dd", {
			locale: ptBR,
		}),
	}));

	console.log(chartData);

	return (
		<div className="p-6 rounded-[20px] bg-white flex-1">
			<div className="flex justify-between">
				<span className="text-sm font-medium">Visitantes</span>

				<div className="flex items-center gap-2">
					<Calendar className="size-4 text-blue-dark" />

					<p className="text-gray-300 body-sm">
						{format(new Date(data[0]?.date ?? new Date()), "dd 'de' MMMM", {
							locale: ptBR,
						})}{" "}
						-{" "}
						{format(
							new Date(data[data.length - 1]?.date ?? new Date()),
							"dd 'de' MMMM",
							{
								locale: ptBR,
							},
						)}
					</p>
				</div>
			</div>

			<div className="size-full">
				<ChartContainer className="w-full h-full pt-4" config={chartConfig}>
					<LineChart data={chartData}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="date"
							tickMargin={8}
							axisLine={false}
							tickLine={false}
						/>
						<YAxis
							dataKey="amount"
							tickMargin={8}
							axisLine={false}
							tickLine={false}
							allowDecimals={false}
						/>
						<Tooltip />
						<Line
							dataKey="amount"
							type="monotone"
							stroke="#5ec5fd"
							strokeWidth={2}
							dot={false}
							activeDot={{ r: 4 }}
						/>
					</LineChart>
				</ChartContainer>
			</div>
		</div>
	);
}
