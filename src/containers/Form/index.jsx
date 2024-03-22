import React, { useEffect, useState } from "react";
import './styles.css'
import axios from 'axios'
import RecodeLogo from '../../assets/recode-jr-logo.png'
import { useNavigate} from 'react-router-dom';
import Button from '../../components/Button'

function Form() {
    const navigate = useNavigate()

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
        navigate('/profile')
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
                        <input className="input" type="e-mail" value={email} onChange={handleChangeEmail}></input>

                        <div className="state-country">
                            <div className="country">
                                <p>País</p>
                                <select className="input" value={country} onChange={handleChangeCountry} >
                                <option value="" selected disabled hidden>Selecione</option>
                                    {countries.map((item) => {
                                        return (item.nome === 'Brasil') 
                                        ?<option value={item.nome} key={item.id}>{item.nome}</option>:<alert>Selecione o Brasil</alert>
                                    })}
                                </select>
                            </div>

                            <div className="state">
                                <p>Estado</p>
                                {(country === 'Brasil')
                                ?<select className="input" value={state} onChange={handleChangeState}>
                                <option value="" selected disabled hidden>Selecione</option>
                                    {states.map((item) => {
                                        return <option value={item.nome} key={item.id}>{item.nome}</option>
                                    })}

                                </select>:<select className="input" value={state} onChange={handleChangeState} disabled><option value="" selected disabled hidden>Selecione</option></select>}
                            </div>


                        </div>

                        <p>Município</p>
                        {(state !== "")
                        ? <select className="input" value={city} onChange={handleChangeCity}>
                        <option value="" selected disabled hidden>Selecione</option>
                            {cities.map((item) => {
                                   return (state === item.microrregiao.mesorregiao.UF.nome)
                                    ?<option value={item.nome} key={item.id}>{item.nome}</option>:''})}
                        </select> : <select className="input" value={city} onChange={handleChangeCity} disabled><option value="" selected disabled hidden>Selecione</option></select>
                        }
                    </div>
                    <Button label="Enviar" type="submit" />
                </form>
            </div>
        </div>
    )
}

export default Form