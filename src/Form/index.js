import React, { useEffect, useState } from "react";
import './styles.css'
import axios from 'axios'
import RecodeLogo from '../assets/recode-jr-logo.png'

function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
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
   
    const infoUser = {
        
        name: name, email: email, city: city, state: state, country: country
    }

    function handleChangeName(event){
        setName(event.target.value)
    }

    function handleChangeEmail(event){
        setEmail(event.target.value)
    }

    function handleChangeCity(event){
        setCity(event.target.value)
    }

    function handleChangeState(event){
        setState(event.target.value)
    }
    
    function handleChangeCountry(event){
        setCountry(event.target.value)
    }

    function onSubmit(){
        localStorage.setItem('infoUser', JSON.stringify(infoUser))
    }
    

    return (
        <div className="container">
            <div className="elements">
                <div className="logo-container">
                    <img src={RecodeLogo} alt="logo-recode-jr" />
                </div>
                <form onSubmit={onSubmit}>
                    <div className="title">
                        <h1>Crie a sua conta</h1>
                        <h5>Preencha o formulário</h5>
                    </div>
                    <div className="form-fields">
                        <p>Nome</p>
                        <input className="input" type="text" value={name} onChange={handleChangeName}></input>

                        <p>E-mail</p>
                        <input className="input" type="text" value={email} onChange={handleChangeEmail}></input>

                        <div className="state-country">
                            <div>
                                <p>País</p>
                                <select className="input" value={country} onChange={handleChangeCountry} >
                                    {countries.map((item) => {
                                        return <option value={item.nome} key={item.id}>{item.nome}</option>
                                    })}
                                </select>
                            </div>

                            <div>
                                <p>Estado</p>
                                <select className="input" value={state} onChange={handleChangeState}>
                                    {states.map((item) => {
                                        return <option value={item.nome} key={item.id}>{item.nome}</option>
                                    })}

                                </select>
                            </div>


                        </div>

                        <p>Município</p>
                        <select className="input" value={city} onChange={handleChangeCity}>
                            {cities.map((item) => {
                                return <option value={item.nome} key={item.id}>{item.nome}</option>
                                
                            })}
                        </select>
                    </div>

                    <button type="submit">Enviar</button>

                </form>
            </div>
        </div>
    )
}

export default Form