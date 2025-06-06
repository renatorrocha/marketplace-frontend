import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/_auth/register")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<form>
				<div>
					<h1>Crie sua conta</h1>
					<p>Informe os seus dados pessoais e de acesso</p>
				</div>

				<div>
					<p>Perfil</p>
					<input type="image" alt="Foto do perfil" />

					<input type="text" placeholder="Nome" />

					<input type="text" placeholder="telefone" />
				</div>

				<div>
					<p>Acesso</p>
					<input type="text" placeholder="E-mail" />
					<input type="text" placeholder="Senha" />
					<input type="text" placeholder="Confirmar senha" />
				</div>

				<button type="submit">
					Cadastrar
					<ArrowRight />
				</button>
			</form>

			<div>
				<p>Já tem uma conta?</p>
				<Link to="/login">
					Acessar
					<ArrowRight />
				</Link>
			</div>
		</div>
	);
}
