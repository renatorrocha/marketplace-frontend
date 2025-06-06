import backgroundImage from "@/assets/background.png";
import logoWithName from "@/assets/logo-with-name.svg";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="bg-background min-h-screen flex">
			<aside className="w-[60%] ml-10">
				<figure className="mt-10">
					<img src={logoWithName} alt="logo" />
				</figure>

				<figure className="mt-12">
					<img src={backgroundImage} alt="logo" />
				</figure>
			</aside>

			<aside className="w-[40%] m-6 px-[80px] py-[72px] bg-white rounded-[32px]">
				<Outlet />
			</aside>
		</div>
	);
}
