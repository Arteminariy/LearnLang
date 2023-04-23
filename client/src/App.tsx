import { Route, Routes } from 'react-router-dom';
import './App.scss';
import LanguagePage from './pages/LanguagePage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';
import CulturePage from './pages/CulturePage';
import MainPage from './pages/MainPage';

function App() {
	return (
	<>
		<Routes>
			<Route path="/" element={<Layout/>}>
				<Route index element={<MainPage/>}/>
				<Route path='culture' element={<CulturePage/>}/>
				<Route path="*" element={<NotFoundPage/>}/>
			</Route>
		</Routes>
	</>
	);
}

export default App;
