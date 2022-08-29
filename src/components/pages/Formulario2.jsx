import { useState } from 'react'

export const Formulario2 = () => {
    const [ info, setInfo ] = useState({
        cep: '',
        endereco1: '',
        endereco2: '',
    })

    return(
        <form>
            <label htmlFor='cep' name='CEP:'/>
            <input type='number' name='cep'/>
            
            <label htmlFor='endereço1' name='Endereço 1:'/>
            <input type='text' name='endereço1'/>
            
            <label htmlFor='endereço2' name='Endereço 2:'/>
            <input type='text' name='endereço2'/>

            <input type='submit' value='Próximo'/>
        </form>
    )
}