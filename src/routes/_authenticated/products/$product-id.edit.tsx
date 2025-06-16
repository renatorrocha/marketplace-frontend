import ProductForm from "@/components/product-form";
import { useGetProductById } from "@/lib/queries/get-product-by-id";
import { useUpdateProductStatus } from "@/lib/queries/update-product-status";
import { Link, createFileRoute, useLoaderData } from "@tanstack/react-router";
import { ArrowLeft, Ban, Check } from "lucide-react";

export const Route = createFileRoute(
	"/_authenticated/products/$product-id/edit",
)({
	component: RouteComponent,
	loader: async ({ params }) => {
		const productId = params["product-id"];
		return { productId };
	},
});

function RouteComponent() {
	const { productId } = useLoaderData({ from: Route.id });

	const { data: product } = useGetProductById({ id: productId });
	const { mutateAsync: updateProductStatus } = useUpdateProductStatus();

	return (
		<div className="my-16 mx-auto max-w-screen-lg space-y-10">
			<div className="flex justify-between items-end">
				<div className="flex gap-6 flex-col">
					<Link
						to="/products"
						className="flex items-center gap-2 text-orange-base"
					>
						<ArrowLeft className="size-6" />
						<p className="body-sm">Voltar</p>
					</Link>

					<div>
						<p className="title-md text-gray-500">Editar Produto</p>
						<p className="body-sm text-gray-300">
							Gerencie as informações do produto cadastrado
						</p>
					</div>
				</div>

				<div className="flex items-center gap-4">
					<div
						className="flex items-center gap-2 text-orange-base cursor-pointer hover:underline"
						onClick={() => updateProductStatus({ productId, status: "sold" })}
					>
						<Check className="size-5" />
						<p className="body-sm">Marcar como vendido</p>
					</div>

					<div
						className="flex items-center gap-2 text-orange-base cursor-pointer hover:underline"
						onClick={() =>
							updateProductStatus({ productId, status: "cancelled" })
						}
					>
						<Ban className="size-4" />
						<p className="body-sm">Desativar anúncio</p>
					</div>
				</div>
			</div>

			<ProductForm />
		</div>
	);
}
