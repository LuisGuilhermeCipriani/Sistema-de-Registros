import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/login";
import Home from "../pages/Home/home";
import CriarLogin from "../pages/CriarLogin/criarLogin";
import Registros from '../pages/Registros/registros';

export default function Rotas(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/criarLogin" element={<CriarLogin/>}/>
                <Route path="/registros" element={<Registros/>}/>
            </Routes>
        </BrowserRouter>
    )
}