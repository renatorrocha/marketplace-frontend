import { getStatusText } from "@/lib/utils/get-status-text";
import { Badge } from "./ui/badge";

export default function StatusBadge({ status }: { status: string }) {
	const { label, color } = getStatusText(status);
	return <Badge className={`text-white ${color}`}>{label}</Badge>;
}
