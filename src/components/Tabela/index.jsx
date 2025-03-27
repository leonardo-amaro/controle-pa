const Tabela = ({ dados }) => {
  return (
    dados.length > 0 &&
    <table>
      <thead>
        <tr>
          <td>Data</td>
          <td>Período</td>
          <td>Pressão Arterial</td>
        </tr>
      </thead>
      <tbody>
        {dados.map(
          (dadoAtual) => (
            <tr>
              <td>{dadoAtual.data}</td>
              <td>{dadoAtual.periodo}</td>
              <td>{dadoAtual.pressao}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  )
}

export default Tabela