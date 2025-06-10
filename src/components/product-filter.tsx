import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function ProductsFilter() {
	return (
		<div className="p-6 bg-white rounded-2xl w-full max-w-[327px] flex flex-col gap-6">
			<p className="title-sm text-gray-300">Filtrar</p>

			<div className="space-y-10">
				<div className="space-y-5">
					<Input placeholder="Pesquisar produto" />
					<Input placeholder="Pesquisar produto" />
				</div>

				<Button className="w-full">Aplicar Filtro</Button>
			</div>
		</div>
	);
}
