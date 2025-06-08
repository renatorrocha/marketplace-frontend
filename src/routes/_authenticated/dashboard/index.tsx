import MetricCard from "@/components/metric-card";
import MetricChart from "@/components/metric-chart";
import { api } from "@/lib/api/axios";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Store, Tag, Users } from "lucide-react";

export const Route = createFileRoute("/_authenticated/dashboard/")({
	component: RouteComponent,
});

function RouteComponent() {
	const { data: amountProductSold } = useQuery({
		queryKey: ["dashboard", "amountProductSold"],
		queryFn: () => {
			return api.get("/sellers/metrics/products/sold");
		},
	});

	const { data: amountAvailableProducts } = useQuery({
		queryKey: ["dashboard", "amountAvailableProducts"],
		queryFn: () => {
			return api.get("/sellers/metrics/products/available");
		},
	});

	const { data: amountVisitors } = useQuery({
		queryKey: ["dashboard", "amountVisitors"],
		queryFn: () => {
			return api.get("/sellers/metrics/views");
		},
	});
	return (
		<div className="mt-16 mx-auto max-w-screen-lg">
			<div className="space-y-2">
				<h1 className="title-md text-gray-500">Últimos 30 dias</h1>
				<p className="body-sm text-gray-300">
					Confira as estatísticas da sua loja no último mês
				</p>
			</div>

			<div className="mt-10 flex gap-6">
				<div className="flex flex-col gap-4">
					<MetricCard
						title="Produtos Vendidos"
						value={amountProductSold?.data.amount}
						icon={<Tag />}
					/>
					<MetricCard
						title="Produtos Anunciados"
						value={amountAvailableProducts?.data.amount}
						icon={<Store />}
					/>
					<MetricCard
						title="Pessoas Visitantes"
						value={amountVisitors?.data.amount}
						icon={<Users />}
					/>
				</div>
				<div className="flex-1 bg-green-400">
					<MetricChart />
				</div>
			</div>
		</div>
	);
}
