import React, { useEffect } from "react";
import './styles.css'

function Form() {

    useEffect(() => {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios/',{
            method: 'GET'
        }).then((response) => {
            console.log(response.data)
        })
    })
    return (
        <form>
            <h1>Formulário de Cadastro</h1>
            <h5>Seja bem vindo ao nosso site!</h5>

            <p>Nome</p>
            <input type="text"></input>

            <p>E-mail</p>
            <input type="text"></input>

            <p>Município</p>
            <select>
                <option value="valor1">Valor 1</option>
                <option value="valor2" selected>Valor 2</option>
                <option value="valor3">Valor 3</option>
            </select>

            <p>Estado</p>
            <select>
                <option value="valor1">Valor 1</option>
                <option value="valor2" selected>Valor 2</option>
                <option value="valor3">Valor 3</option>
            </select>

            <p>País</p>
            <select>
                <option value="valor1">Valor 1</option>
                <option value="valor2" selected>Valor 2</option>
                <option value="valor3">Valor 3</option>
            </select>

            <button>Enviar</button>

        </form>
    )
}

export default Form