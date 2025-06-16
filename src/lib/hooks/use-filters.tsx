import type { RegisteredRouter, RouteIds } from "@tanstack/react-router";
import { getRouteApi, useNavigate } from "@tanstack/react-router";

export function useFilters<T extends RouteIds<RegisteredRouter["routeTree"]>>(
	routeId: T,
) {
	const routeApi = getRouteApi(routeId);
	const navigate = useNavigate();
	const filters = routeApi.useSearch();

	const setFilters = (partialFilters: Partial<typeof filters>) =>
		navigate({
			to: ".",
			search: (prev) => {
				const newSearchParams = { ...prev, ...partialFilters };
				return newSearchParams;
			},
		});
	const resetFilters = () => navigate({ to: ".", search: {} });

	return { filters, setFilters, resetFilters };
}
