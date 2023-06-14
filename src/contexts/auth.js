import React, { createContext } from "react";
import firebase from '../firebaseConnection/firebaseConnection';

export const AuthContext = createContext({});

async function registraTarefa(nome, cep, uf, localidade, tarefa){

    try{

        let registro = firebase.database().ref('registros');
        let key = registro.push().key;

        registro.child(key).set({
            nome: nome,
            cep: cep,
            uf: uf,
            localidade: localidade,
            tarefa: tarefa
        })

    }catch(error){
        console.log('Erro ao cadastrar tarefa');
    }
}

function AuthProvider({children}){

    return(
        <AuthContext.Provider value={{registraTarefa}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
