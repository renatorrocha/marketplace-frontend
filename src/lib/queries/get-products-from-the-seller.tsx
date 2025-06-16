import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";
import type { ProductModel } from "../models/product";

interface GetProductsFromTheSellerParams {
	products: ProductModel[];
}

async function getProductsFromTheSeller({
	status,
	search,
}: { status?: string; search?: string }) {
	const response = await api.get<GetProductsFromTheSellerParams>(
		"/products/me",
		{
			params: {
				status,
				search,
			},
		},
	);
	return response.data;
}

export function useGetProductsFromTheSeller({
	status,
	search,
}: { status?: string; search?: string }) {
	return useQuery({
		queryKey: ["products-from-the-seller", status, search],
		queryFn: () => getProductsFromTheSeller({ status, search }),
	});
}
