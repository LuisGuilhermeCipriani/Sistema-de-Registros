import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";

import Header from "../../header/header";
import firebase from '../../firebaseConnection/firebaseConnection';
import './registros.css';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Registros() {

    const [registros, setRegistros] = useState([]);

    useEffect(() => {

        async function carregaTarefas() {

            await firebase.database().ref('registros').on('value', (snapshot) => {
                setRegistros([]);

                snapshot.forEach((item) => {

                    let data = {
                        key: item.key,
                        nome: item.val().nome,
                        cep: item.val().cep,
                        uf: item.val().uf,
                        localidade: item.val().localidade,
                        tarefa: item.val().tarefa
                    };
                    setRegistros((antigo) => [...antigo, data]);
                })
            })
        }
        carregaTarefas();

    }, [registros]);

    async function concluiTarefa(key){

        await firebase.database().ref('registros').child(key).remove()
        .then(() => {
            toast.success("Tarefa exluída com sucesso!");
        })
        .catch(() => {
            toast.error("Não foi possível excluir a tarefa");
        })
    }

    return (
        <div className="containerRegistros">
            <Header nomePagina='Registros' redireciona='/home' nomeRedireciona='Home' />
            <div className="principalRegistros">
                {registros.length> 0 ? <h1 className="tituloRegistros">Tarefas</h1> : <h1 className="tituloRegistros">Não há tarefas cadastradas</h1>}
                {registros.length > 0 && registros.map((item) => {
                    return (
                        <article className="articleRegistros" key={item.key}>
                            <div className="informacoesRegistros">
                                <p className="textoRegistros">Tarefa: {item.tarefa}</p>
                                <p className="textoRegistros">Autor: {item.nome}</p>
                            </div>
                            <p onClick={() => concluiTarefa(item.key)} className="concluirRegistros"><FaCheck className="iconeRegistros" size={15} />CONCLUIR TAREFA</p>
                        </article>
                    )
                })}
            </div>
            <ToastContainer/>
        </div>
    )
}