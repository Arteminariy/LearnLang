import { FC } from 'react'
import './Header.scss'
import HeaderLink, { IHeaderLink } from './HeaderLink'
 
interface IHeaderProps {
    links: IHeaderLink[]
}

const Header: FC<IHeaderProps> = ({links}) => {
    return (
        <header>
            <nav>
                {links.map(link => {
                    return (
                        <HeaderLink key={link.to} link={link}/>
                    )
                })}
            </nav>
        </header>
    )
}
 
export default Header