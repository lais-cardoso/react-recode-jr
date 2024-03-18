import React, { useEffect, useState } from "react";
import './styles.css'
import axios from 'axios'
import RecodeLogo from '../assets/recode-jr-logo.png'

function Form() {

    const [cities, setCities] = useState([])
    const [states, setStates] = useState([])
    const [countries, setCountries] = useState([])

    async function citiesList(){
        await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios').then((response) => {
            setCities(response.data)
        })
    }

    async function statesList(){
        await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then((response) => {
            setStates(response.data)
        })
    }

    async function countryList(){
        await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/paises').then((response) => {
            setCountries(response.data)
        })
    }

    useEffect(() => {
        citiesList();
        statesList();
        countryList();
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
                                    {countries.map((item, index) => {
                                        return <option value={index} key={index}>{item.nome}</option>
                                    })}
                                </select>
                            </div>

                            <div>
                                <p>Estado</p>
                                <select className="input">
                                    {states.map((item, index) => {
                                        return <option value={index} key={item.id}>{item.nome}</option>
                                    })}

                                </select>
                            </div>


                        </div>

                        <p>Município</p>
                        <select className="input">
                            {cities.map((item, index) => {
                                
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