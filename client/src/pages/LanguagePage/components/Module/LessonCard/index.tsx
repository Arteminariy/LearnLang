import { FC } from 'react'
import './LessonCard.scss'
import ILesson from 'types/ILesson'
import { RingProgress } from '@ant-design/plots';
 
interface ILessonCardProps {
    lesson: ILesson
}
 
const LessonCard: FC<ILessonCardProps> = ({lesson}) => {
    return (
        <li className='lesson-container'>
            <RingProgress 
                height={80}
                width={80}
                autoFit={false}
                percent={lesson.progress / 100}
                color={['#5B8FF9', '#E8EDF3']}
            />
            <h3 className="lesson__title">{lesson.title}</h3>
        </li>
    )
}
 
export default LessonCard