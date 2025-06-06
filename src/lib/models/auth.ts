import { z } from "zod";

export const loginModel = z.object({
	email: z.string().email("E-mail inválido"),
	password: z.string().min(1, "Senha é obrigatória"),
});

export type LoginModel = z.infer<typeof loginModel>;

export const registerModel = z
	.object({
		profileImage: z.instanceof(File),
		name: z.string().min(1, "Nome é obrigatório"),
		phone: z.string().min(1, "Telefone é obrigatório"),
		email: z.string().email("E-mail inválido"),
		password: z.string().min(1, "Senha é obrigatória"),
		confirmPassword: z.string().min(1, "Confirmação de senha é obrigatória"),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "As senhas não coincidem",
		path: ["confirmPassword"],
	});

export type RegisterModel = z.infer<typeof registerModel>;
