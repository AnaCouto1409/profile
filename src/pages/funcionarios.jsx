import React from 'react'
import { useState, useEffect } from 'react'
import header from '../header/header';
import footer from '../footer/footer';
import Lista from './cadastro'

const funcionarios = () => {
    const [funcionarios, setFuncionarios] = useState();
    useEffect(() => {
        api
          .delete("/funcionarios",{
            funcionario: "Amaury",
            email:"amaury@gmail.com",
            telefone:"95555-5555",
            bairro:"estacaoLinda",
            cargo:"professor",
            habilitação:"5555555555555555",
          })
          .then((response) => setFuncionarios(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);
  return (
        <header>
        <button onClick={handleClick}>Edite aqui!</button>
        <input type="name" id='name' placeholder='escreva seu nome completo'>
        </input>
        <input type="email" id='email' placeholder='escreva seu melhor email'>
        </input>
        <input type="text" id='text' placeholder='escreva seu bairro'>
        </input>
        <input type="number" id='number' placeholder='escreva seu numero'>
        </input>
        <input type="number" id='number' placeholder='habilitação'>
        </input>
        <input type="datetime" id='datetime' placeholder='digite o periodo'>
        </input>
        <ul className={styles.containerFuncionarios}>
          <Lista funcionarios={funcionarios} />
        </ul>
        <botton onClick={handleClick}>Pode excluir aqui!!</botton>
    </header>

  )
}

export default funcionarios