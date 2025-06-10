import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { useState } from "react";

interface AvatarDropdownProps {
	user: {
		id: string;
		name: string;
		phone: string;
		email: string;
		avatar: string;
	};
	onSignOut?: () => void;
}

export function AvatarDropdown({ user, onSignOut }: AvatarDropdownProps) {
	const [open, setOpen] = useState(false);

	return (
		<DropdownMenu open={open} onOpenChange={setOpen}>
			<DropdownMenuTrigger asChild>
				<Avatar className="h-10 w-10 cursor-pointer border">
					<AvatarImage
						src={user.avatar || "/placeholder.svg"}
						alt={user.name}
					/>
					<AvatarFallback>{user.name}</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="end" forceMount>
				<DropdownMenuLabel className="font-normal">
					<div className="flex flex-col space-y-1">
						<p className="text-sm font-medium leading-none">{user.name}</p>
						<p className="text-xs leading-none text-muted-foreground">
							{user.email}
						</p>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />

				<DropdownMenuItem
					onClick={onSignOut}
					className="text-red-600 focus:text-red-600"
				>
					<LogOut className="mr-2 h-4 w-4" />
					<span>Sair</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
