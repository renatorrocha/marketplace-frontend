import backgroundImage from "@/assets/background.png";
import logoWithName from "@/assets/logo-with-name.svg";
import { Navigate, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
	loader: async () => {
		const isAuthenticated = localStorage.getItem("token");

		if (!isAuthenticated) {
			return {
				isAuthenticated: false,
			};
		}

		return {
			isAuthenticated: true,
		};
	},

	component: RouteComponent,
});

function RouteComponent() {
	const { isAuthenticated } = Route.useLoaderData();

	if (isAuthenticated) {
		return <Navigate to="/" />;
	}

	return (
		<div className="bg-background min-h-screen flex">
			<aside className="w-[60%] ml-10 hidden md:block">
				<figure className="mt-10">
					<img src={logoWithName} alt="logo" />
				</figure>

				<figure className="mt-12">
					<img src={backgroundImage} alt="logo" />
				</figure>
			</aside>

			<aside className="w-full md:w-[40%] m-6 px-[80px] py-[72px] bg-white rounded-[32px]">
				<Outlet />
			</aside>
		</div>
	);
}
