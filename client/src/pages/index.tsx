import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import MainPage from '@/screens/Main/MainPage';

const inter = Inter({ subsets: ['latin'] });

const HomePage = () => {
	return <MainPage />;
};
export default HomePage;
