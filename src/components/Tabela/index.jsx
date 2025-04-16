import styled from "styled-components"

const TableEstilizada = styled.table`
  border-collapse: collapse;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.6);
  margin: 24px 0;
  width: 100%;
  text-align: center;
  thead tr td {
    padding: 8px 16px;
    border-bottom: 1px solid #000;
  }
  tbody tr td {
    padding: 8px 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  }
`

const Tabela = ({ dados }) => {
  return (
    dados.length > 0 &&
    <TableEstilizada>
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
            <tr key={dadoAtual.id}>
              <td>{dadoAtual.data}</td>
              <td>{dadoAtual.periodo}</td>
              <td>{dadoAtual.sistole}</td>
            </tr>
          )
        )}
      </tbody>
    </TableEstilizada>
  )
}

export default Tabela