import styled from 'styled-components'
import { useState } from 'react'

const FormEstlizado = styled.form`
  padding: 8px;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.4);
  select {
    width: 53%;
    padding: 16px 4px;
  }
  button {
    width: 100%;
    padding: 16px 0;
  }
`
const InputContainer = styled.div`
  width: 100%;
  margin: 12px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const InputEstilizado = styled.input`
  width: 50%;
  padding: 16px 4px;
`

const Formulario = ({ salvaDados }) => {

  const [data, setData] = useState('yyyy-MM-dd')
  const [periodo, setPeriodo] = useState('')
  const [pSistole, setPSistole] = useState(0)
  const [pDiastole, setPDiastole] = useState(0)

  function aoRegistrar(e) {
    e.preventDefault()
    const dadosFormulario = {
      data,
      periodo,
      pressao: `${pSistole} / ${pDiastole}`
    }
    salvaDados(dadosFormulario)
    return console.log('Dados salvos!')
  }

  return (
    <FormEstlizado>
      <InputContainer>
        <label htmlFor="data">
          Data:
        </label>
        <InputEstilizado type="date" name="data" id="data" 
          value={data} onChange={(evento) => setData(evento.target.value)} 
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="periodo-dia">
          Período:
        </label>
        <select name="periodo-dia" id="periodo-dia" 
          onChange={(evento) => setPeriodo(evento.target.value)}
        >
          <option value="">Selecione</option>
          <option value="manha">Manhã</option>
          <option value="tarde">Tarde</option>
          <option value="noite">Noite</option>
        </select>
      </InputContainer>
      <InputContainer>
        <label htmlFor="p-sistole">
          Pressão sistólica:
        </label>
        <InputEstilizado type="number" name="p-sistole" id="p-sistole" min={0} max={200} step={5}
          value={pSistole} onChange={(evento) => setPSistole(evento.target.value)} 
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="p-diastole">
          Pressão diastólica:
        </label>
        <InputEstilizado type="number" name="p-diastole" id="p-diastole" min={0} max={200} step={5} 
          value={pDiastole} onChange={(evento) => setPDiastole(evento.target.value)}
        />
      </InputContainer>
      
      <button onClick={(evento) => aoRegistrar(evento)}>
        Registrar
      </button>
    </FormEstlizado>
  )
}

export default Formulario