import styled from 'styled-components'
import EstilosGlobais from './components/EstilosGlobais'
import Formulario from './components/Fromulario'
import Tabela from './components/Tabela'

const AppContainer = styled.div`
  width: 480px;
  margin: 0 auto;
`

const App = () => {
  return (
    <>
      <EstilosGlobais />
      <AppContainer>
        <h1>Controle de P.A.</h1>
        <Formulario />
        <Tabela />
      </AppContainer>
    </>
  )
}

export default App