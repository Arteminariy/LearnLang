import { FC } from 'react';
import './LanguagePage.scss';
import Module from './components/Module';
import { getLanguages } from 'src/http/getLanguage';
import { useQuery } from '@tanstack/react-query';

interface ILanguagePageProps {}

const LanguagePage: FC<ILanguagePageProps> = () => {
	const { data, isLoading, isSuccess, isError } = useQuery({
		queryFn: () => getLanguages(),
		queryKey: ['languages', 'all'],
	});

	if (isLoading) {
		return (
			<h3>Loading...</h3>
		)
	}

	if (isError) {
		return (
			<h3>Ошибка</h3>
		)
	}

	return (
		<div className="lang-page__wrapper">
			{isSuccess &&
				data[0].modules.map((module, index) => {
					return <Module key={index} module={module} />;
				})}
		</div>
	);
};

export default LanguagePage;
