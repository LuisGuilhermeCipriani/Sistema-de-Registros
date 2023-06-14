import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from 'react-icons/fa';
import firebase from '../firebaseConnection/firebaseConnection';

import './header.css'; 

export default function Header({nomePagina, redireciona, nomeRedireciona}){

    const navigation = useNavigate();

    async function logout(){
        await firebase.auth().signOut()
        .then(() => {
            navigation('/');
        })
        .catch(() => {
            alert('Não foi possível sair');
        })
    }

    return(
        <header className="containerHeader">
            <h1 className="nomeHeader">{nomePagina}</h1>
            <div className="atalhosHeader">
                <Link className="linkHeader" to={redireciona}>{nomeRedireciona}</Link>
                <div className="sairHeader" onClick={logout}>
                <p className="textoHeader">Sair <FaSignOutAlt size={20}/></p>
            </div>
            </div>
        </header>
    )
}