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
import { api } from "@/lib/api/axios";
import { type LoginModel, loginModel } from "@/lib/models/auth";
import { cn } from "@/lib/utils/cn";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";

export const Route = createFileRoute("/_auth/login")({
	component: RouteComponent,
});

function RouteComponent() {
	const navigate = useNavigate();
	const form = useForm({
		resolver: zodResolver(loginModel),
		mode: "onChange",
	});

	const { mutateAsync: login, isPending } = useMutation({
		mutationFn: (data: LoginModel) => api.post("/sellers/sessions", data),
		onSuccess: (data) => {
			localStorage.setItem("token", data.data.accessToken);
			navigate({ to: "/" });
		},
		onError: (error) => {
			console.error(error);
		},
	});

	async function onSubmit(data: LoginModel) {
		await login(data);
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

					<Button
						type="submit"
						className={cn(
							"w-full justify-between p-5 disabled:opacity-50",
							isPending && "opacity-50 justify-center",
						)}
						disabled={isPending}
					>
						{isPending ? (
							<Loader2 className="w-4 h-4 animate-spin" />
						) : (
							"Acessar"
						)}

						{!isPending && <ArrowRight />}
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
