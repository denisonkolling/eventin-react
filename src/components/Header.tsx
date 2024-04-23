import eventInIcon from '../assets/eventin-icon.svg';

const Header = () => {
	return (
		<>
			<div className="flex items-center gap-5 py-2">
				<img src={eventInIcon} alt="" />
				<nav>
					<ul className="flex items-center gap-5">
						<li>
							<a href="" className="font-medium text-sm text-zinc-300">
								Eventos
							</a>
						</li>
						<li>
							<a href="" className="font-medium text-sm">
								Participantes
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default Header;
