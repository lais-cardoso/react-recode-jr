import React from "react";

import './styles.css'
import RecodeLogo from '../assets/recode-jr-logo.png'

function Profile() {
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
                        <input className="input" type="text" disabled></input>

                        <p>E-mail</p>
                        <input className="input" type="text" disabled></input>

                        <p>Municipio</p>
                        <input className="input" type="text" disabled></input>
                        <div className="state-country">
                            <div>
                                <p>Estado</p>
                                <input className="input" type="text" disabled></input>
                            </div>

                            <div>
                                <p>País</p>
                                <input className="input" type="text" disabled></input>
                            </div>
                        </div>
                    </ div>
                </form>
            </div>
        </div>
    )
}

export default Profile