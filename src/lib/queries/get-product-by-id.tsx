import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";
import type { ProductModel } from "../models/product";

interface GetProductByIdParams {
	product: ProductModel;
}

async function getProductById({ id }: { id: string }) {
	const response = await api.get<GetProductByIdParams>(`/products/${id}`);
	return response.data;
}

export function useGetProductById({ id }: { id: string }) {
	return useQuery({
		queryKey: ["product-by-id", id],
		queryFn: () => getProductById({ id }),
	});
}
