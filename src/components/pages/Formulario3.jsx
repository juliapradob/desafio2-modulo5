import { useState } from 'react'

export const Formulario3 = () => {
    const [ info, setInfo ] = useState({
        dataNasc: '',
        cpf: '',
        renda: ''
    })

    return(
        <form>
            <label htmlFor='dataNasc' name='Data de nascimento:'/>
            <input type='date' name='dataNasc'/>
            
            <label htmlFor='cpf' name='CPF:'/>
            <input type='number' name='cpf'/>
            
            <label htmlFor='renda' name='Renda mensal:'/>
            <input type='text' name='renda'/>

            <input type='submit' value='Salvar'/>
        </form>
    )
}