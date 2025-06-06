import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
	label: string;
};

export function InputField({ label, ...props }: InputFieldProps) {
	return (
		<div className="grid w-full items-center gap-3">
			<Label htmlFor={props.id}>{label}</Label>
			<Input {...props} />
		</div>
	);
}
