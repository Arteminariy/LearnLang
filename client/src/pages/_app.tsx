import Layout from '@/components/Layout/Layout';
import { store } from '@/store';
import '@/styles/globals.css';
import { createWrapper } from 'next-redux-wrapper';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(App);