import { useState } from 'react'

const Formulario = () => {

  const [data, setData] = useState('yyyy-MM-dd')
  const [periodo, setPeriodo] = useState('')
  const [pSistole, setPSistole] = useState(0)
  const [pDiastole, setPDiastole] = useState(0)

  return (
    <form>
      <label htmlFor="data">
        Data:
      </label>
      <input type="date" name="data" id="data" 
        value={data} onChange={(evento) => setData(evento.target.value)} 
      />
      
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

      <label htmlFor="p-sistole">
        Pressão sistólica:
      </label>
      <input type="number" name="p-sistole" id="p-sistole" min={0} max={200} step={5}
        value={pSistole} onChange={(evento) => setPSistole(evento.target.value)} 
      />
      
      <label htmlFor="p-diastole">
        Pressão diastólica:
      </label>
      <input type="number" name="p-diastole" id="p-diastole" min={0} max={200} step={5} 
        value={pDiastole} onChange={(evento) => setPDiastole(evento.target.value)}
      />
      
      <button>Registrar</button>
    </form>
  )
}

export default Formulario