interface MetricCardProps {
	title: string;
	value: number;
	icon: React.ReactNode;
}

export default function MetricCard({ title, value, icon }: MetricCardProps) {
	return (
		<div className="bg-white flex p-3 pr-7 gap-4 rounded-2xl">
			<figure className="bg-blue-light text-blue-dark rounded-2xl p-6 flex items-center justify-center">
				{icon}
			</figure>

			<div className="space-y-2">
				<p className="title-lg text-gray-400">{value}</p>
				<p className="body-xs text-gray-300 whitespace-nowrap">{title}</p>
			</div>
		</div>
	);
}
