import styled from 'styled-components'
import EstilosGlobais from './components/EstilosGlobais'
import Formulario from './components/Fromulario'
import Tabela from './components/Tabela'
import { useState } from 'react'

const AppContainer = styled.div`
  width: 480px;
  margin: 0 auto;
`

const App = () => {

  const [dados, setDados] = useState([])

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