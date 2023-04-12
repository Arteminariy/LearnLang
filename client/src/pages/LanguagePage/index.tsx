import { FC } from 'react'
import './LanguagePage.scss'
import Module from './components/Module'
import IModule from '../../types/IModule'
 
interface ILanguagePageProps {}
 
const LanguagePage: FC<ILanguagePageProps> = () => {

    const modules: IModule[] = [
        {
            title: 'Модуль 1',
            lessons: [
                {
                    title: 'Урок 1 — Введение в корейский язык',
                    progress: 100,
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