import { CircleUserRound, AtSign } from 'lucide-react';
import { NavLink } from '../components/NavLink';

const Login = () => {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="bg-zinc-800 p-8 rounded-lg shadow-lg w-96">
				<h2 className="text-2xl font-bold text-white mb-6 text-center">Inscreva-se</h2>
				<div className="mb-4 border border-white/10 rounded-lg flex items-center gap-3">
					<CircleUserRound className="size-6 ml-2 text-emerald-300" />
					<input className="w-full py-2 bg-transparent focus:ring-0 flex-1 outline-none border-0 p-0 text-base" type="text" id="name" placeholder="Nome" />
				</div>
				<div className="mb-4 border border-white/10 rounded-lg flex items-center gap-3">
					<AtSign className="size-6 ml-2 text-emerald-300" />
					<input className="w-full py-2 bg-transparent focus:ring-0 flex-1 outline-none border-0 p-0 text-base" type="email" id="email" placeholder="Email" />
				</div>
				<div className="flex flex-col gap-2 justify-between">
					<button className="px-4 py-2 rounded hover:bg-emerald-500 bg-emerald-600 font-medium text-sm">REALIZAR INSCRIÇÃO</button>
					<div className="flex align-items-center justify-center mt-3">
						<NavLink href="/eventos">Já possui ingresso?</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
