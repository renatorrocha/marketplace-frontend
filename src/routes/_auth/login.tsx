import { InputField } from "@/components/input-field";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/_auth/login")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col justify-between h-full">
			<form className="flex flex-col gap-12">
				<div className="flex flex-col gap-4">
					<h1 className="title-md text-gray-500">Acesse sua conta</h1>
					<p className="body-sm text-gray-300">
						Informe seu e-mail e senha para entrar
					</p>
				</div>

				<div className="space-y-5">
					<InputField label="E-mail" type="email" placeholder="E-mail" />
					<InputField label="Senha" type="password" placeholder="Senha" />
				</div>

				<Button type="submit" className="w-full justify-between p-5">
					Acessar
					<ArrowRight />
				</Button>
			</form>

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
