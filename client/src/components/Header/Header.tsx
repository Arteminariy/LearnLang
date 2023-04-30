import { FC } from 'react';
import NavBar, { INavBarLink } from '../NavBar/NavBar';
import styles from './Header.module.scss'

const Header: FC = () => {

	
	const navBarLinks: INavBarLink[] = [
		{href: '/', text: 'Главная'},
		{href: '/languages', text: 'Языки'}
	]

	return (
	<header className={styles.header}>
		<NavBar navBarLinks={navBarLinks}/>
	</header>
	);
};

export default Header;
