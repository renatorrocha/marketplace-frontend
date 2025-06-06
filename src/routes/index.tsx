import { Navigate, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: () => {
		const token = localStorage.getItem("token");

		if (!token) {
			return <Navigate to="/login" />;
		}

		return <Navigate to="/dashboard" />;
	},
});
