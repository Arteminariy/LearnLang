import { FC } from 'react';
import styles from './NavBar.module.scss';
import Link from 'next/link';

export type INavBarLink = {
	href: string;
	text: string;
};

type INavBarProps = {
	navBarLinks: INavBarLink[];
};

const NavBar: FC<INavBarProps> = ({ navBarLinks }) => {
	return (
		<nav className={styles.navigation}>
			<div className={styles.navigation__links}>
				{navBarLinks.map((el) => {
					return (
						<Link
							key={el.text}
							href={el.href}
							className={styles.navigation__links__item}
						>
							{el.text}
						</Link>
					);
				})}
			</div>
		</nav>
	);
};

export default NavBar;
