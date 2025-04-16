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

const App = () => {

  const [dados, setDados] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((resposta) => resposta.json())
      .then((resultado) => setDados(resultado))
  }, [])

  return (
    <>
      <EstilosGlobais />
      <AppContainer>
        <h1>Controle de P.A.</h1>
        <Formulario salvaDados={(objeto) => setDados([...dados, objeto])} />
        <Tabela dados={dados} />
      </AppContainer>
    </>
  )
}

export default App