import { cn } from "@/lib/utils/cn";
import { ImagePlus, X } from "lucide-react";
import { type ChangeEvent, useRef, useState } from "react";

interface ImageUploadProps {
	onImageSelect: (file: File) => void;
	className?: string;
	previewUrl?: string;
}

export function ImageUpload({
	onImageSelect,
	className,
	previewUrl,
}: ImageUploadProps) {
	const [preview, setPreview] = useState<string | null>(previewUrl || null);
	const inputRef = useRef<HTMLInputElement>(null);

	function handleImageSelect(event: ChangeEvent<HTMLInputElement>) {
		const file = event.target.files?.[0];

		if (file) {
			const previewUrl = URL.createObjectURL(file);
			setPreview(previewUrl);
			onImageSelect(file);
		}
	}

	function handleRemoveImage() {
		setPreview(null);
		if (inputRef.current) {
			inputRef.current.value = "";
		}
	}

	return (
		<div className={cn("flex flex-col gap-4", className)}>
			<div className="relative w-32 h-32 rounded-2xl overflow-hidden  bg-shape hover:bg-orange-base/10 transition-all">
				{preview ? (
					<>
						<img
							src={preview}
							alt="Preview"
							className="w-full h-full object-cover"
						/>
						<button
							type="button"
							onClick={handleRemoveImage}
							className="absolute top-2 right-2 p-1 bg-orange-base rounded-full cursor-pointer text-white hover:bg-orange-base/80 transition-colors"
						>
							<X className="w-4 h-4" />
						</button>
					</>
				) : (
					<label
						htmlFor="image-upload"
						className="w-full h-full flex flex-col items-center justify-center cursor-pointer"
					>
						<ImagePlus className="w-8 h-8 text-orange-base" />
					</label>
				)}
				<input
					ref={inputRef}
					id="image-upload"
					type="file"
					accept="image/*"
					className="hidden"
					onChange={handleImageSelect}
				/>
			</div>
		</div>
	);
}
