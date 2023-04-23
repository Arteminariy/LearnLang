import { FC } from 'react';
import './MainPage.scss';
import { Avatar, Card, Typography } from 'antd';
import { getLanguages } from 'src/http/getLanguage';
import { useQuery } from '@tanstack/react-query';

const { Text } = Typography;

interface IMainPageProps {}

const MainPage: FC<IMainPageProps> = () => {
	const { data, isLoading, isSuccess, isError } = useQuery({
		queryFn: () => getLanguages(),
		queryKey: ['languages', 'all'],
	});

	if (isLoading) {
		return <h3>Loading...</h3>;
	}

	if (isError) {
		return <h3>Ошибка</h3>;
	}

	return (
		<div>
			{data.map((lang) => {
				return (
					<Card title={lang.title}>
						<Avatar src={<img src={} alt="avatar" />}/>
					</Card>
				);
			})}
		</div>
	);
};

export default MainPage;
