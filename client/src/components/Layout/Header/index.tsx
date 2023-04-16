import { FC } from 'react'
import './Header.scss'
import HeaderLink from './HeaderLink'
import { getModuleType } from 'src/http/getModuleTypes'
import { useQuery } from '@tanstack/react-query'

const Header: FC = () => {
    const { data, isLoading, isSuccess, isError } = useQuery({
		queryFn: () => getModuleType(),
		queryKey: ['module-type', 'all'],
	});

    return (
        <header>
            <nav>
                {isSuccess && data.map(link => {
                    return (
                        <HeaderLink key={link.id} type={link}/>
                    )
                })}
            </nav>
        </header>
    )
}
 
export default Header