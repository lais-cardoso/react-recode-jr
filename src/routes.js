import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Form from '../src/containers/Form'
import Profile from '../src/containers/Profile'

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
