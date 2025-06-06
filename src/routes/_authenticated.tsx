import logo from "@/assets/logo.svg";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { ChartBar, Package, Plus, User } from "lucide-react";

export const Route = createFileRoute("/_authenticated")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="border-shape border-b flex justify-between items-center p-4">
				<figure className="w-[50px] h-10">
					<img src={logo} alt="logo" />
				</figure>

				<nav className="flex gap-4">
					<Link
						to="/dashboard"
						activeProps={{
							className: buttonVariants({ variant: "outline" }),
						}}
						className={cn(
							buttonVariants({ variant: "ghost" }),
							"flex items-center gap-2 text-gray-300 body-sm",
						)}
					>
						<ChartBar />
						Dashboard
					</Link>

					<Link
						to="/products"
						activeProps={{
							className: buttonVariants({ variant: "outline" }),
						}}
						className={cn(
							buttonVariants({ variant: "ghost" }),
							"flex items-center gap-2 text-gray-300 body-sm",
						)}
					>
						<Package />
						Produtos
					</Link>
				</nav>

				<div className="flex items-center gap-4">
					<Link to="/products/new" className={buttonVariants()}>
						<Plus /> Adicionar Produto
					</Link>

					<Avatar>
						<AvatarFallback>
							<User />
						</AvatarFallback>
					</Avatar>
				</div>
			</header>

			<main className="flex-1">
				<Outlet />
			</main>
		</div>
	);
}
