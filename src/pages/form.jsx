import React from 'react'
import { useState, useEffect } from 'react';
import { ReactDOM } from 'react';
import header from '../header/header';
import footer from '../footer/footer';

const form = () => {
  const [funcionarios, setFuncionarios] = useState();
useEffect(() => {
   api
     .post("/funcionarios"),{
  "nome_completo": "Amaury",
	"email": "amaury@gmail.com",
	"celular": 123,
	"cargo": "professor",
	"bairro": "jardins",
	"periodo": "1234567",
	"admissao": "1000/02/20"
} 
.then((response) => setFuncionarios(response.data))
.catch((err) => {
  console.error("ops! ocorreu um erro" + err);
});
}, []);
  
    render() 
        return (
          <form>
            <label>
              Nome
              <input
                name="nome"
                type="nome" placeholder='digite seu nome'>Nome:</input></label>
            <br />
            <label>
              Email
              <input
                name="email" type="email" placeholder='digite seu melhor email' />
            </label>
            <label>
              Bairro
              <input
                name="bairro" type="text" placeholder='digite seu bairro' />
            </label>
            <label>
              Telefone
              <input
                name="telefone" type="number" placeholder='digite seu telefone' />
            </label>
            <label>
              Habilitação
              <input
                name="habilitação" type="number" placeholder='digite sua habilitação aqui' />
            </label>
            <label>
              Período
              <input
                name="data" type="datetime" placeholder='digite o perido da admissão' />
            </label>
          </form>
        );
      }

export default form