import React from "react";

import './styles.css'
import RecodeLogo from '../../assets/recode-jr-logo.png'
import Button from '../../components/Button'
import { useNavigate} from 'react-router-dom';

function Profile() {
    const navigate = useNavigate()
    var data = localStorage.getItem('infoUser')
    data = JSON.parse(data)


    function backToHome(){
        localStorage.removeItem('infoUser')
         navigate('/')
    }

    return (
        <div className="container">
            <div className="elements">
                <div className="logo-container">
                    <img src={RecodeLogo} alt="logo-recode-jr" />
                </div>
                <form>
                    <div className="title">
                        <h1>Perfil</h1>
                        <h5>Confira suas informações</h5>
                    </div>
                    <div className="form-fields">
                        <p>Nome</p>
                        <input className="input" type="text" value={data.name || ''} disabled/>

                        <p>E-mail</p>
                        <input className="input" type="text" value={data.email || ''} disabled/>

                        <p>Municipio</p>
                        <input className="input" type="text" value={data.city || ''} disabled/>
                        <div className="state-country">
                            <div className="state">
                                <p>Estado</p>
                                <input className="input" type="text" value={data.state || ''} disabled/>
                            </div>

                            <div className="country">
                                <p>País</p>
                                <input className="input" type="text" value={data.country || ''} disabled />
                            </div>
                        </div>
                        
                    </div>
                    
                    <Button label="Sair" onClick={()=>(backToHome())} style={{backgroundColor: 'red'}}/>
                </form>
            </div>
        </div>
    )
}

export default Profile