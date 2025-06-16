import ProductCard from "@/components/product-card";
import ProductsFilter from "@/components/product-filter";
import { useGetProductsFromTheSeller } from "@/lib/queries/get-products-from-the-seller";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

export const Route = createFileRoute("/_authenticated/products/")({
	component: RouteComponent,
	validateSearch: z.object({
		status: z.enum(["available", "sold", "cancelled"]).optional(),
		search: z.string().optional(),
	}),
});

function RouteComponent() {
	const { status, search } = Route.useSearch();
	const { data, isLoading } = useGetProductsFromTheSeller({
		status,
		search,
	});

	return (
		<div className="mt-16 mx-auto max-w-screen-lg space-y-10">
			<div className="space-y-2">
				<h1 className="title-md text-gray-500">Seus produtos</h1>
				<p className="body-sm text-gray-300">
					Acesse gerencie a sua lista de produtos à venda
				</p>
			</div>

			<section className="flex gap-6">
				<ProductsFilter route={Route} />

				<aside className="flex flex-wrap gap-6">
					{data?.products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</aside>
			</section>
		</div>
	);
}
