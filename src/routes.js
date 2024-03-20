import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Form from './Form'
import Profile from './Profile'

function RoutesRoute(){
    return(
        <BrowserRouter>
        <Routes>
            <Route element={<Form/>} exact path="/" />
            <Route element={<Profile/>} path="/profile" />
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesRoute
