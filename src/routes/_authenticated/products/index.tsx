import ProductCard from "@/components/product-card";
import ProductsFilter from "@/components/product-filter";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/products/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="mt-16 mx-auto max-w-screen-lg space-y-10">
			<div className="space-y-2">
				<h1 className="title-md text-gray-500">Seus produtos</h1>
				<p className="body-sm text-gray-300">
					Acesse gerencie a sua lista de produtos à venda
				</p>
			</div>

			<section className="flex gap-6">
				<ProductsFilter />

				<aside>
					<ProductCard />
					<ProductCard />
				</aside>
			</section>
		</div>
	);
}
