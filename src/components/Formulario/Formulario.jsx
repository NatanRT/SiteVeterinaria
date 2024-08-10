import { useState } from "react";
import React from "react";
import "./Formulario.css";


const Formulario = ({ campos }) => {
   const[dados,setDados] = useState({});

   const alteraDados = (e) => {
    const valor = e.target.value;
    const chave = e.target.id;
    setDados({ ...dados,[chave]: valor});
   }

    const salvarDados = (e) => {
        e.preventDefault(); // prevenindo o evento padrao

    }

    return (
        <form id="Form_contato" onSubmit={salvarDados}>
            {campos.map((item) => {
                return (
                    <div>
                    <label htmlFor={item.id}>{item.nome}</label>
                    <input id={item.id} type={item.tipo} value={dados[item.id]} onChange={alteraDados}/>
                    </div>
                )
            })}
            <button type="submit">Enviar</button>
        </form>

    );
};
export default Formulario;