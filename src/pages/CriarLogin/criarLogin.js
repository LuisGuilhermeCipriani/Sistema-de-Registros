import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from '../../firebaseConnection/firebaseConnection';

import '../Login/login.css';

export default function CriarLogin(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigate();

    async function criaLogin(){

        await firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(() => {
            alert('Conta criada com sucesso!');
            navigation('/');
        })
        .catch(() => {
            alert("Não foi possível criar conta de usuário")
        })
    }

    return(
        <div className="container"> 
            <h1 className="titulo">Criar Conta</h1>
            <div className="principal">
                <form className="form">
                    <input className="input" type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <input className="input" type="password" value={senha} placeholder="Senha" onChange={(e) => setSenha(e.target.value)}/>
                    <p className="entrar" onClick={criaLogin}>CADASTRAR</p>
                </form>
                <p className="rodape">Já tem uma conta? <Link className="link" to='/'>Clique aqui</Link> para entrar</p>
            </div>
        </div>
    )
}