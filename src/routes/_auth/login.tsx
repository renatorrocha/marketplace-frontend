import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/_auth/login")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="">
			<form className="">
				<div>
					<h1>Acesse sua conta</h1>
					<p>Informe seu e-mail e senha para entrar</p>
				</div>

				<div>
					<input type="email" placeholder="E-mail" />
					<input type="password" placeholder="Senha" />
				</div>

				<button type="submit">
					Acessar
					<ArrowRight />
				</button>
			</form>

			<div>
				<p>Ainda não tem uma conta?</p>

				<Link to="/register">
					Cadastrar
					<ArrowRight />
				</Link>
			</div>
		</div>
	);
}
