import React from 'react'

export default function Tabela({nome, sobrenome, email, telefone, cep, endereco1, endereco2, dataNasc, cpf, renda}) {
    return (
        <table>
            <thead>
                <tr>
                    <td>Nome:</td>
                    <td>Sobrenome:</td>
                    <td>E-mail:</td>
                    <td>Telefone:</td>
                    <td>CEP:</td>
                    <td>Endereço 1:</td>
                    <td>Endereço 2:</td>
                    <td>Data Nascimento:</td>
                    <td>CPF:</td>
                    <td>Renda mensal:</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{nome}</td>
                    <td>{sobrenome}</td>
                    <td>{email}</td>
                    <td>{telefone}</td>
                    <td>{cep}</td>
                    <td>{endereco1}</td>
                    <td>{endereco2}</td>
                    <td>{dataNasc}</td>
                    <td>{cpf}</td>
                    <td>{renda}</td>
                </tr>
            </tbody>
        </table>
    )
}
