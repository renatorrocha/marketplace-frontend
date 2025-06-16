import { useFilters } from "@/lib/hooks/use-filters";
import type { AnyRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function ProductsFilter({ route }: { route: AnyRoute }) {
	const { filters, setFilters } = useFilters(route.id);

	const [localSearch, setLocalSearch] = useState(filters.search || "");

	const handleApplyFilter = () => {
		setFilters({ search: localSearch });
	};

	return (
		<div className="p-6 bg-white rounded-2xl w-full max-w-[327px] flex flex-col gap-6">
			<p className="title-sm text-gray-300">Filtrar</p>

			<div className="space-y-10">
				<div className="space-y-5">
					<Input
						placeholder="Pesquisar produto"
						value={localSearch}
						onChange={(e) => setLocalSearch(e.target.value)}
					/>
					<Input placeholder="Pesquisar produto" />
				</div>

				<Button className="w-full" onClick={handleApplyFilter}>
					Aplicar Filtro
				</Button>
			</div>
		</div>
	);
}
