import { FC } from 'react'
import './ModuleCard.scss'
import Lesson from './LessonCard'
import IModule from 'types/IModule'
 
interface IModuleCardProps {
    module: IModule
}
 
const ModuleCard: FC<IModuleCardProps> = ({module}) => {
    return (
        <div className='module'>
            <h2 className="module__title">{module.title}</h2>
            <ul className='module__lessons-list'>
            {module.lessons.map((lesson, index) => {
                return (
                    <Lesson key={index} lesson={lesson}/>
                )
            })}
            </ul>
        </div>
    )
}
 
export default ModuleCard