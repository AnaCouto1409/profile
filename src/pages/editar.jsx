import React,{useEffect, useState} from 'react'
import header from '../header/header';
import footer from '../footer/footer';

const editar = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [bairro, setBairro] = useState('');
    const [telefone, setTelefone] = useState('');
    const [habilitação, setHabilitação] = useState('');
    const [periodo, setPeriodo] = useState('');
    
    useEffect(() =>{
        api.put('/funcionarios/3')
        .then((response) => setAlunos(response.data))
         .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  return (
    <div>

        <header></header>
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

        <footer></footer>
    </div>
  )
}

export default editar