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
import { type LoginModel, loginModel } from "@/lib/models/auth";
import { cn } from "@/lib/utils/cn";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";

export const Route = createFileRoute("/_auth/login")({
	component: RouteComponent,
});

function RouteComponent() {
	const form = useForm({
		resolver: zodResolver(loginModel),
		mode: "onChange",
	});

	async function onSubmit(data: LoginModel) {
		console.log(data);
	}

	return (
		<div className="flex flex-col justify-between h-full">
			<Form {...form}>
				<form
					className="flex flex-col gap-12"
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<div className="flex flex-col gap-4">
						<h1 className="title-md text-gray-500">Acesse sua conta</h1>
						<p className="body-sm text-gray-300">
							Informe seu e-mail e senha para entrar
						</p>
					</div>

					<div className="space-y-5">
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
					</div>

					<Button type="submit" className="w-full justify-between p-5">
						Acessar
						<ArrowRight />
					</Button>
				</form>
			</Form>

			<div className="flex flex-col gap-5">
				<p className="body-md text-gray-300">Ainda não tem uma conta?</p>

				<Link
					to="/register"
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
