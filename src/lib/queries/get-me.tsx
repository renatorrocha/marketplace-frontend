import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";

export const useGetMe = () => {
	return useQuery({
		queryKey: ["me"],
		queryFn: () => api.get("/sellers/me"),
		enabled: !!localStorage.getItem("token"),
	});
};
