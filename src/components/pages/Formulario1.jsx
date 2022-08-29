import { useState } from 'react'

export const Formulario1 = () => {
    const [ info, setInfo ] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        telefone: ''
    })

    return(
        <form>
            <label htmlFor='nome'>Nome:</label>
            <input type='text' name='nome'/>
            
            <label htmlFor='sobrenome'>Sobrenome:</label>
            <input type='text' name='sobrename'/>
            
            <label htmlFor='email'>E-mail:</label>
            <input type='text' name='email'/>
    
            <label htmlFor='telefone'>Telefone:</label>
            <input type='tel' name='telefone'/>

            <input type='submit' value='Próximo'/>
        </form>
    )
}