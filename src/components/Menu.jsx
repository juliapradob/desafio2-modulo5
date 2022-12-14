import { Link } from 'react-router-dom'
import reset from './reset.css'
import S from './Menu.module.css'

export const Menu = () => {
    return (
        <div className={S.menu}>
            <Link to='/' className={S.itemMenu}>Home</Link>
            <Link to='/cadastro' className={S.itemMenu}>Cadastrar</Link>
            <Link to='/clientes' className={S.itemMenu}>Cliente</Link> 
        </div>
    )
}