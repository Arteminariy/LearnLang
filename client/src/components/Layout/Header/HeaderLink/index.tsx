import { FC } from 'react'
import './HeaderLink.scss'
import { NavLink } from 'react-router-dom'
 
interface IHeaderLinkProps {
    link: IHeaderLink
}
  
export interface IHeaderLink {
    to: string,
    text: string
}

const HeaderLink: FC<IHeaderLinkProps> = ({link}) => {
    return (
        <NavLink className="header__nav-link" to={link.to}>{link.text}</NavLink>
    )
}
 
export default HeaderLink