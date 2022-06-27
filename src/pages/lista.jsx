import React, { useEffect,useState } from 'react'
import api from './api'
import funcionarios from '../pages/funcionarios';

const Lista = () => {
    const [alunos, setAlunos] = useState([]);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    useEffect(() =>{
        api.get('/funcionarios')
        .then((response) => setAlunos(response.data))
         .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  async  function deletarFuncionario(id){
    await api.delete(`/funcionarios/${id}`) 
   } 
   async function editarFuncionarios(id){
    await api.put(`/funcionarios/${id}`, {
      "nome_completo":nome,
      "email":email,
      "bairro":bairro,
      "celular": telefone,
      "habilitação": habilitação,
      "periodo": periodo,

     })
   }
   console.log(alunos)
  return (
    <div>
        <h1>Conheça nossos funcionários!!!</h1>
        {alunos.map((F,index)=>{
          return(
          <div key={index}>
          <p>{F.nome_completo}</p>
          <p>{F.email}</p> 
          <p>{F.cargo}</p>
          <button  onClick={()=> editarFuncionarios(F.id_funcionario)} >Editar</button>
          <input type="text" name ="nome_completo" placeholder={F.nome_completo} />
          <button onClick={()=>deletarFuncionario(F.id_funcionario)} >Deletar</button>{
            console.log(F)
          }
          </div>
          )
        })}
        <form>
          <input type="name" id='name' placeholder='escreva seu nome completo'onChange={(e) => setNome(e.target.value)}>
        </input>
        <input type="email" id='email' placeholder='escreva seu melhor email'onChange={(e) => setEmail(e.target.value)}>
        </input>
        <input type="text" id='text' placeholder='escreva seu bairro' onChange={(e) => setBairro(e.target.value)}>
        </input>
        <input type="number" id='number' placeholder='escreva seu numero'onChange={(e) => setTelefone(e.target.value)}>
        </input>
        <input type="number" id='number' placeholder='habilitação'onChange={(e) => setHabilitação(e.target.value)}>
        </input>
        <input type="datetime" id='datetime' placeholder='digite o periodo'onChange={(e) => setPeriodo(e.target.value)}>
        </input>
        </form>
    </div>
  )
}

export default Lista