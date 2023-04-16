import { FC } from 'react'
import './HeaderLink.scss'
import { NavLink } from 'react-router-dom'
import IModuleType from 'src/types/IModuleType'
 
interface IHeaderLinkProps {
    type: IModuleType
}

const HeaderLink: FC<IHeaderLinkProps> = ({type}) => {
    return (
        <NavLink className="header__nav-link" to={String(type.id)}>{type.title}</NavLink>
    )
}
 
export default HeaderLink