import { queryClient } from "@/integrations/tanstack-query/root-provider";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { api } from "../api/axios";

async function updateProductStatus({
	productId,
	status,
}: {
	productId: string;
	status: string;
}) {
	const response = await api.patch(`/products/${productId}/${status}`);
	return response.data;
}

export function useUpdateProductStatus() {
	return useMutation({
		mutationFn: ({
			productId,
			status,
		}: { productId: string; status: string }) =>
			updateProductStatus({ productId, status }),
		onSuccess: (_, { productId }) => {
			toast.success("Status do produto atualizado com sucesso");

			queryClient.invalidateQueries({
				queryKey: ["products-from-the-seller"],
			});

			queryClient.invalidateQueries({
				queryKey: ["product-by-id", productId],
			});
		},
		onError: () => {
			toast.error("Erro ao atualizar status do produto");
		},
	});
}
