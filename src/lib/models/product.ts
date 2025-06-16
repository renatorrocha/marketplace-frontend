import { z } from "zod";

export const productModel = z.object({
	id: z.string(),
	title: z.string({ required_error: "Título é obrigatório" }),
	categoryId: z.string({ required_error: "Categoria é obrigatória" }),
	description: z.string({ required_error: "Descrição é obrigatória" }),
	priceInCents: z.number({ required_error: "Preço é obrigatório" }),
	category: z.object({
		id: z.string(),
		title: z.string(),
		slug: z.string(),
	}),
	attachments: z.array(
		z.object({
			id: z.string(),
			url: z.string(),
		}),
	),
	status: z.enum(["available", "sold", "cancelled"]),
});

export type ProductModel = z.input<typeof productModel>;
