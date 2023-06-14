import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from '../../firebaseConnection/firebaseConnection';

import './login.css';

export default function Login(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigate();

    async function verificaUsuario(){

        await firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(() => {
            navigation('/home');
        })
        .catch(() => {
            alert('Não foi possível continuar');
            setEmail('');
            setSenha('');
        })
    }

    return(
        <div className="containerLogin"> 
            <h1 className="tituloLogin">Login</h1>
            <div className="principalLogin">
                <form className="formLogin">
                    <input className="inputLogin" type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <input className="inputLogin" type="password" value={senha} placeholder="Senha" onChange={(e) => setSenha(e.target.value)}/>
                    <p className="entrarLogin" onClick={verificaUsuario}>ENTRAR</p>
                </form>
                <p className="rodapeLogin">Não tem uma conta? <Link className="linkLogin" to='/criarLogin'>Clique aqui</Link> para criar uma</p>
            </div>
        </div>
    )
}