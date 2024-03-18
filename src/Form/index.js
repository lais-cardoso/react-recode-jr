import React, { useEffect, useState } from "react";
import './styles.css'
import axios from 'axios'
import RecodeLogo from '../assets/recode-jr-logo.png'

function Form() {

    const [cidades, setCidades] = useState([])
    const [estados, setEstados] = useState([])
    const [paises, setPaises] = useState([])

    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios').then((response) => {
            setCidades(response.data)
        }).catch(error => {
            if (error.response !== undefined) {
                console.log('A api está com problemas!')
            } else {
                console.log('Error!')
            }
        })
    }, [])

    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then((response) => {
            setEstados(response.data)
        }).catch(error => {
            if (error.response !== undefined) {
                console.log('A api está com problemas!')
            } else {
                console.log('Error!')
            }
        })
    }, [])

    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/paises').then((response) => {
            setPaises(response.data)
        }).catch(error => {
            if (error.response !== undefined) {
                console.log('A api está com problemas!')
            } else {
                console.log('Error!')
            }
        })
    }, [])
    return (
        <div className="container">
            <div className="elements">
                <div className="logo-container">
                    <img src={RecodeLogo} alt="logo-recode-jr" />
                </div>
                <form>
                    <div className="title">
                        <h1>Crie a sua conta</h1>
                        <h5>Preencha o formulário</h5>
                    </div>
                    <div className="form-fields">
                        <p>Nome</p>
                        <input className="input" type="text"></input>

                        <p>E-mail</p>
                        <input className="input" type="text"></input>

                        <div className="state-country">
                            <div>
                                <p>País</p>
                                <select className="input">
                                    {paises.map((item, index) => {
                                        return <option value={index} key={index}>{item.nome}</option>
                                    })}
                                </select>
                            </div>

                            <div>
                                <p>Estado</p>
                                <select className="input">
                                    {estados.map((item, index) => {
                                        return <option value={index} key={index}>{item.nome}</option>
                                    })}

                                </select>
                            </div>


                        </div>

                        <p>Município</p>
                        <select className="input">
                            {cidades.map((item, index) => {
                                return <option value={index} key={index}>{item.nome}</option>
                            })}
                        </select>
                    </div>

                    <button>Enviar</button>

                </form>
            </div>
        </div>
    )
}

export default Form