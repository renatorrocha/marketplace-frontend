import type { ProductModel } from "@/lib/models/product";
import { Badge } from "./ui/badge";

export default function ProductCard({ product }: { product: ProductModel }) {
	console.log(product);
	return (
		<div className="p-1 rounded-3xl bg-white space-y-4 w-[320px] relative">
			<div className="absolute top-2 right-2">
				<Badge variant="outline" className="text-gray-500">
					{product.categoryId}
				</Badge>
			</div>

			<figure className="h-[140px]">
				<img
					src={product?.attachments[0].url}
					alt={product.title}
					className="w-full h-full object-cover rounded-2xl"
				/>
			</figure>
			<div className="space-y-2 p-3">
				<div className="flex justify-between items-center">
					<p className="subtitle text-gray-500">{product.title}</p>
					<p className="text-gray-500 subtitle">
						{new Intl.NumberFormat("pt-BR", {
							style: "currency",
							currency: "BRL",
						}).format(product.priceInCents / 100)}
					</p>
				</div>

				<p className="body-sm text-gray-300">{product.description}</p>
			</div>
		</div>
	);
}
