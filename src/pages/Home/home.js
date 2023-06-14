import React, { useState, useEffect, useContext } from "react";

import Header from "../../header/header";
import api from "../../services/api";
import './home.css';
import { AuthContext } from "../../contexts/auth";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

    const [nome, setNome] = useState('');
    const [cep, setCep] = useState('');
    const [uf, setUf] = useState('');
    const [localidade, setLocalidade] = useState('');
    const [tarefa, setTarefa] = useState('');

    const {registraTarefa} = useContext(AuthContext);

    useEffect(() => {

        async function carregaApi(){
            await api.get(`${cep}/json/`)
            .then((valor) => {
                setUf(valor.data.uf);
                setLocalidade(valor.data.localidade)
            })
            .catch(() => {
                
            })
        }
        carregaApi();
        setUf('');
        setLocalidade('');

    },[cep]);

    function registra(){

        try{
            registraTarefa(nome, cep, uf, localidade, tarefa);
            toast.success('Tarefa cadastrada com sucesso');
            setNome('');
            setCep('');
            setUf('');
            setLocalidade('');
            setTarefa('');
        }catch(error){
            toast.error('Não foi possível cadastrar tarefa');
        }
    }

    return (
        <div className="containerHome">
            <Header nomePagina='Home' redireciona='/registros' nomeRedireciona='Registros' />
            <div className="fieldHome">
                <h1 className="tituloLogin">Registrar Tarefas</h1>
                <div className="principalHome">
                    <input className="inputHome" type="text" value={nome} placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
                    <div className="metadeHome">
                        <input className="inputHome2" type="number" value={cep} placeholder="CEP" onChange={(e) => setCep(e.target.value)} />
                        <input disabled={true} className="inputHome2" type="text" value={uf} placeholder="UF" onChange={(e) => setUf(e.target.value)} />
                    </div>
                    <input disabled={true} className="inputHome" type="text" value={localidade} placeholder="Localidade" onChange={(e) => setLocalidade(e.target.value)} />

                    <textarea className="areaHome" type="text" placeholder="Digite sua tarefa aqui..." value={tarefa} onChange={(e) => setTarefa(e.target.value)} />

                    <p onClick={registra} className="registrarHome">REGISTRAR</p>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}