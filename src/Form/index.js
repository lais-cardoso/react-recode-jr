import React, { useEffect, useState } from "react";
import './styles.css'
import axios from 'axios'

function Form() {

    const [cidades, setCidades] = useState([])
    const [estados, setEstados] = useState([])
    const [paises, setPaises] = useState([])

    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios').then((response) => {
            setCidades(response.data)
        }).catch(error => {
            if(error.response !== undefined){
                console.log('A api está com problemas!')
            }else{
                console.log('Error!')
            }
        })
    },[])

    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then((response) => {
            setEstados(response.data)
        }).catch(error => {
            if(error.response !== undefined){
                console.log('A api está com problemas!')
            }else{
                console.log('Error!')
            }
        })
    },[])

    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/paises').then((response) => {
            setPaises(response.data)
        }).catch(error => {
            if(error.response !== undefined){
                console.log('A api está com problemas!')
            }else{
                console.log('Error!')
            }
        })
    },[])
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
                {cidades.map((item, index) => {
                   return  <option value={index} key={index}>{item.nome}</option>
                })}
            </select>

            <p>Estado</p>
            <select>
                {estados.map((item, index) => {
                    return <option value={index} key={index}>{item.nome}</option>
                })}
                
            </select>

            <p>País</p>
            <select>
                {paises.map((item, index) => {
                   return <option value={index} key={index}>{item.nome}</option>
                })}
            </select>

            <button>Enviar</button>

        </form>
    )
}

export default Form