import { Button, buttonVariants } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { type RegisterModel, registerModel } from "@/lib/models/auth";
import { cn } from "@/lib/utils/cn";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";

export const Route = createFileRoute("/_auth/register")({
	component: RouteComponent,
});

function RouteComponent() {
	const form = useForm({
		resolver: zodResolver(registerModel),
		mode: "onChange",
	});

	async function onSubmit(data: RegisterModel) {
		console.log(data);
	}

	return (
		<div className="flex flex-col justify-between h-[calc(95vh-144px)] overflow-y-auto pr-2">
			<Form {...form}>
				<form
					className="flex flex-col gap-12"
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<div className="flex flex-col gap-4">
						<h1 className="title-md text-gray-500">Crie sua conta</h1>
						<p className="body-sm text-gray-300">
							Informe os seus dados pessoais e de acesso
						</p>
					</div>

					<div className="space-y-5">
						<p className="title-sm text-gray-500">Perfil</p>

						<input type="image" alt="Foto do perfil" />

						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nome</FormLabel>
									<FormControl>
										<Input placeholder="Nome" {...field} />
									</FormControl>

									<FormMessage className="text-red-500" />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Telefone</FormLabel>
									<FormControl>
										<Input placeholder="Telefone" {...field} />
									</FormControl>

									<FormMessage className="text-red-500" />
								</FormItem>
							)}
						/>
					</div>

					<div className="space-y-5">
						<p className="title-sm text-gray-500">Acesso</p>

						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>E-mail</FormLabel>
									<FormControl>
										<Input placeholder="E-mail" {...field} />
									</FormControl>

									<FormMessage className="text-red-500" />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Senha</FormLabel>
									<FormControl>
										<Input placeholder="Senha" {...field} />
									</FormControl>

									<FormMessage className="text-red-500" />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="confirmPassword"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Confirmar senha</FormLabel>
									<FormControl>
										<Input placeholder="Confirmar senha" {...field} />
									</FormControl>

									<FormMessage className="text-red-500" />
								</FormItem>
							)}
						/>
					</div>

					<Button type="submit" className="w-full justify-between p-5">
						Cadastrar
						<ArrowRight />
					</Button>
				</form>
			</Form>

			<div className="flex flex-col gap-5 mt-10">
				<p className="body-md text-gray-300">Já tem uma conta?</p>

				<Link
					to="/login"
					className={cn(
						buttonVariants({ variant: "outline" }),
						"justify-between p-5",
					)}
				>
					Cadastrar
					<ArrowRight />
				</Link>
			</div>
		</div>
	);
}
