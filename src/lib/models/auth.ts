import { z } from "zod";

export const loginModel = z.object({
	email: z
		.string({ required_error: "E-mail é obrigatório" })
		.email("E-mail inválido"),
	password: z.string({ required_error: "Senha é obrigatória" }),
});

export type LoginModel = z.infer<typeof loginModel>;

export const registerModel = z
	.object({
		// profileImage: z.instanceof(File),
		name: z.string({ required_error: "Nome é obrigatório" }),
		phone: z.string({ required_error: "Telefone é obrigatório" }),
		email: z
			.string({ required_error: "E-mail é obrigatório" })
			.email("E-mail inválido"),

		password: z
			.string({ required_error: "Senha é obrigatória" })
			.transform((data) => data),
		confirmPassword: z
			.string({
				required_error: "Confirmação de senha é obrigatória",
			})
			.transform((data) => data),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "As senhas não coincidem",
		path: ["confirmPassword"],
	});

export type RegisterModel = z.infer<typeof registerModel>;
