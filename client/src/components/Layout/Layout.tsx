import Head from 'next/head';
import { FC, ReactElement } from 'react';
import Footer from '../Footer/Footer';
import styles from './Layout.module.scss'
import Header from '../Header/Header';

type ILayoutProps = {
	children: ReactElement;
};

const Layout: FC<ILayoutProps> = ({ children }) => {
	return (
		<>
			<Head>
				<title>LearnLang</title>
			</Head>
			<Header/>
			<main className={styles.container}>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
