import eventInIcon from '../assets/eventin-icon.svg';
import { NavLink } from './NavLink';

const Header = () => {
	return (
		<>
			<div className="flex items-center gap-5 py-2">
				<img src={eventInIcon} alt="" />
				<nav className="flex items-center gap-5">
					<NavLink href="/eventos">Eventos</NavLink>
					<NavLink href="/participantes">Participantes</NavLink>
				</nav>
			</div>
		</>
	);
};

export default Header;
