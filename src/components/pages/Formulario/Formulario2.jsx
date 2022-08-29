import { useState } from 'react'
import S from './Formulario.module.css'

export const Formulario2 = () => {
    const [ info, setInfo ] = useState({
        cep: '',
        endereco1: '',
        endereco2: '',
    })

    return(
        <form className={S.formulario}>
            <label htmlFor='cep' name='CEP:'/>
            <input type='number' name='cep'/>
            
            <label htmlFor='endereço1' name='Endereço 1:'/>
            <input type='text' name='endereço1'/>
            
            <label htmlFor='endereço2' name='Endereço 2:'/>
            <input type='text' name='endereço2'/>

            <button type='submit' id='etapa2'>Próximo</button>
        </form>
    )
}