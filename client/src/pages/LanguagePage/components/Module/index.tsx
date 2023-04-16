import { FC } from 'react'
import './ModuleCard.scss'
import Lesson from './LessonCard'
import IModule from 'types/IModule'
import { getModule } from 'src/http/getModule'
import { useQuery } from '@tanstack/react-query'
 
interface IModuleCardProps {
    module: IModule
}
 
const ModuleCard: FC<IModuleCardProps> = () => {
    const { data, isLoading, isSuccess, isError } = useQuery({
		queryFn: () => getModule(),
		queryKey: ['modules', 'all'],
	});
    return (
        <div className='module'>
            <h2 className="module__title">{isSuccess && data[0].title}</h2>
            <ul className='module__lessons-list'>
            {isSuccess && data[0].lessons.map((lesson, index) => {
                return (
                    <Lesson key={index} lesson={lesson}/>
                )
            })}
            </ul>
        </div>
    )
}
 
export default ModuleCard