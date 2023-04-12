import { FC } from 'react';
import './Layout.scss';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { IHeaderLink } from './Header/HeaderLink';

interface ILayoutProps {}

const Layout: FC<ILayoutProps> = () => {

	const headerLinks: IHeaderLink[] = [
		{to: '/', text: 'Язык'},
		{to: '/culture', text: 'Культура'},
	]

	return (
		<>
			<Header links={headerLinks}/>
            <div className="container">
			    <Outlet />
            </div>
			<Footer />
		</>
	);
};

export default Layout;
