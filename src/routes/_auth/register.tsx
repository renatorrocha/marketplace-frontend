import { InputField } from "@/components/input-field";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/_auth/register")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col justify-between h-[calc(95vh-144px)] overflow-y-auto pr-2">
			<form className="flex flex-col gap-12">
				<div className="flex flex-col gap-4">
					<h1 className="title-md text-gray-500">Crie sua conta</h1>
					<p className="body-sm text-gray-300">
						Informe os seus dados pessoais e de acesso
					</p>
				</div>

				<div className="space-y-5">
					<p className="title-sm text-gray-500">Perfil</p>

					<input type="image" alt="Foto do perfil" />

					<InputField label="Nome" type="text" placeholder="Nome" />

					<InputField label="Telefone" type="text" placeholder="Telefone" />
				</div>

				<div className="space-y-5">
					<p className="title-sm text-gray-500">Acesso</p>

					<InputField label="E-mail" type="email" placeholder="E-mail" />
					<InputField label="Senha" type="password" placeholder="Senha" />
					<InputField
						label="Confirmar senha"
						type="password"
						placeholder="Confirmar senha"
					/>
				</div>

				<Button type="submit" className="w-full justify-between p-5">
					Cadastrar
					<ArrowRight />
				</Button>
			</form>

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
