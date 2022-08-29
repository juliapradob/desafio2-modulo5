import { useState } from 'react'
import S from './Formulario.module.css'

export const Formulario3 = () => {
    const [ info, setInfo ] = useState({
        dataNasc: '',
        cpf: '',
        renda: ''
    })

    return(
        <form className={S.formulario}>
            <label htmlFor='dataNasc' name='Data de nascimento:'/>
            <input type='date' name='dataNasc'/>
            
            <label htmlFor='cpf' name='CPF:'/>
            <input type='number' name='cpf'/>
            
            <label htmlFor='renda' name='Renda mensal:'/>
            <input type='text' name='renda'/>

            <button type='submit' id='etapa3'>Cadastrar</button>
        </form>
    )
}