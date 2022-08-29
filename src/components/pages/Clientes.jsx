import Tabela from '../Tabela'
import S from './Clientes.module.css'
import { useState } from 'react'

export const Clientes = () => {
    const [ tabela, setTabela ] = useState([])
    

    return(
        <div className={S.clientes}>
            <h1>Clientes</h1>
            <button onClick={() => {
                setTabela([1])
            }}>Armando Rose</button>
            <div>
                {tabela.map((item, index) => {
                    return <Tabela key={index}/>
                })}
            </div>
        </div>
    )
}