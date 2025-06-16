export function getStatusText(status: string) {
	switch (status) {
		case "available":
			return {
				label: "Disponível",
				color: "bg-blue-dark",
			};
		case "sold":
			return {
				label: "Vendido",
				color: "bg-success",
			};
		case "cancelled":
			return {
				label: "Desativado",
				color: "bg-gray-300",
			};
		default:
			return {
				label: "Desconhecido",
				color: "bg-gray-300",
			};
	}
}
