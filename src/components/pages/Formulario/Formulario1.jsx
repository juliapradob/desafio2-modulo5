import { useState } from 'react'
import S from './Formulario.module.css'

export const Formulario1 = () => {
    const [ info, setInfo ] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        telefone: ''
    })

    return(
        <form className={S.formulario}>
            <h2>Cadastre-se!</h2>
            <label htmlFor='nome'>Nome:</label>
            <input type='text' name='nome'/>
            
            <label htmlFor='sobrenome'>Sobrenome:</label>
            <input type='text' name='sobrename'/>
            
            <label htmlFor='email'>E-mail:</label>
            <input type='text' name='email'/>
    
            <label htmlFor='telefone'>Telefone:</label>
            <input type='tel' name='telefone'/>

            <button type='submit' id='etapa1'>Próximo</button>
        </form>
    )
}