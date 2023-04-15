import { FC } from 'react';
import './LanguagePage.scss';
import Module from './components/Module';
import IModule from '../../types/IModule';
import { getLanguages } from 'src/http/getLanguage';
import { useQuery } from '@tanstack/react-query';

interface ILanguagePageProps {}

const LanguagePage: FC<ILanguagePageProps> = () => {
	const { data, isLoading, isSuccess } = useQuery({
		queryFn: () => getLanguages(),
		queryKey: ['languages', 'all'],
	});

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
