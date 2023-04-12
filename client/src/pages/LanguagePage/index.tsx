import { FC } from 'react'
import './LanguagePage.scss'
import Module from './components/Module'
import IModule from '../../types/IModule'
 
interface ILanguagePageProps {}
 
const LanguagePage: FC<ILanguagePageProps> = () => {

    const modules: IModule[] = [
        {
            id: 1,
            title: 'Модуль 1 — Введение',
            lessons: [
                {
                    id: 1,
                    title: 'Урок 1 — Введение в корейский язык',
                    progress: 100,
                    content: ['SomeContent']
                },
                {
                    id: 2,
                    title: 'Урок 2 — Алфавит',
                    progress: 0,
                    content: ['SomeContent']
                }
            ]
        },
        {
            id: 2,
            title: 'Модуль 2',
            lessons: [
                {
                    id: 3,
                    title: 'Урок 1 — Глаголы',
                    progress: 0,
                    content: ['SomeContent']
                }
            ]
        }
    ]

    return (
        <div className='lang-page__wrapper'>
            {modules.map(module => {
                return(
                    <Module module={module}/>
                )
            })}
        </div>
    )
}
 
export default LanguagePage