import { Search, Table } from 'lucide-react';

const AttendeeList = () => {
	return (
		<>
			<div className="flex gap-3 items-center">
				<h1 className="text-2xl font-bold">Participantes</h1>
				<div className="px-3 w-72 py-1.5 border rounded-lg border-white/25 bg-transparent text-sm flex items-center gap-3">
					<Search className="size-4" />
					<input className="bg-transparent flex-1 outline-none" placeholder="Buscar participante..." />
				</div>
			</div>

			<div className="border border-white/10 rounded-lg">
				<table className="w-full">
					<thead>
						<tr className="border-b border-white/10">
							<th className="py-3 px-2.5 text-sm font-semibold text-left">
								<input type="checkbox" />
							</th>
							<th className="py-3 px-2.5 text-sm font-semibold text-left">Código</th>
							<th className="py-3 px-2.5 text-sm font-semibold text-left">Participante</th>
							<th className="py-3 px-2.5 text-sm font-semibold text-left">Data de inscrição</th>
							<th className="py-3 px-2.5 text-sm font-semibold text-left">Data de check-in</th>
							<th className="py-3 px-2.5 text-sm font-semibold text-left">Status</th>
						</tr>
					</thead>
					<tbody>
						<tr className="border-b border-white/10">
							<td className="py-3 px-2.5 text-sm text-zinc-300">
								<input type="checkbox" />
							</td>
							<td className="py-3 px-2.5 text-sm text-zinc-300">78546</td>
							<td className="py-3 px-2.5 text-sm text-zinc-300">
								<div className="flex flex-col">
									<span>John Doe</span>
									<span>johndoe@email.com</span>
								</div>
							</td>
							<td className="py-3 px-2.5 text-sm text-zinc-300">16/04/2024</td>
							<td className="py-3 px-2.5 text-sm text-zinc-300">22/04/2024</td>
							<td className="py-3 px-2.5 text-sm text-zinc-300">OK</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};

export default AttendeeList;
