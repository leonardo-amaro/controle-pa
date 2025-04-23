import axios from 'axios'
import styled from 'styled-components'
import EstilosGlobais from './components/EstilosGlobais'
import Formulario from './components/Fromulario'
import Tabela from './components/Tabela'
import { useEffect, useState } from 'react'

const AppContainer = styled.div`
  width: 480px;
  margin: 0 auto;
  h1 {
    text-align: center;
  }
`
const fetchDados = async () => {
  try {
    const resposta = await axios.get('http://localhost:8000')
    return resposta.data
  } catch (erro) {
    console.error('Erro ao buscar dados: ' + erro)
    return null
  }
}
// const postDados = (objeto) => {
//   axios.post('http://localhost:8000', objeto)
//     .then((resposta) => console.log(resposta))
//     .catch((erro) => console.log(erro))
// }

const App = () => {

  const [dados, setDados] = useState([])
  const carregaDados = async () => {
    const resultado = await fetchDados()
    setDados(resultado)
  }
  
  useEffect(() => {
    carregaDados()
  }, [])

  return (
    <>
      <EstilosGlobais />
      <AppContainer>
        <h1>Controle de P.A.</h1>
        <Formulario />
        <Tabela dados={dados} />
      </AppContainer>
    </>
  )
}

export default App