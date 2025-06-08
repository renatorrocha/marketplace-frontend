import logo from "@/assets/logo.svg";
import { AvatarDropdown } from "@/components/avatar-dropdown";
import { buttonVariants } from "@/components/ui/button";
import { api } from "@/lib/api/axios";
import { cn } from "@/lib/utils/cn";
import {
	Link,
	Navigate,
	Outlet,
	createFileRoute,
	useNavigate,
} from "@tanstack/react-router";
import { ChartBar, Package, Plus } from "lucide-react";

export const Route = createFileRoute("/_authenticated")({
	loader: async () => {
		const token = localStorage.getItem("token");

		if (!token) {
			return {
				isAuthenticated: false,
			};
		}

		try {
			const response = await api.get("/sellers/me");

			return {
				isAuthenticated: true,
				user: response.data,
			};
		} catch (error) {
			localStorage.removeItem("token");
			return {
				isAuthenticated: false,
			};
		}
	},
	component: RouteComponent,
});

function RouteComponent() {
	const { isAuthenticated, user } = Route.useLoaderData();
	const navigate = useNavigate();

	if (!isAuthenticated) {
		return <Navigate to="/login" />;
	}

	function onSignOut() {
		localStorage.removeItem("token");
		navigate({ to: "/login" });
	}

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

					<AvatarDropdown user={user.seller} onSignOut={onSignOut} />
				</div>
			</header>

			<main className="flex-1">
				<Outlet />
			</main>
		</div>
	);
}
