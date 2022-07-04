import { detalhes } from '../../__mocks__/mock-list-funding';

function List() {
    return (
        <div>
            <h2> Lista de Financiamentos </h2>
            <table >
                <thead>
                    <tr>
                        <th>Nome cliente</th>
                        <th>Valor financiado</th>
                        <th>Valor bruto</th>
                        <th>Valor de aquisicao</th>
                        <th>Prazo</th>
                        <th>N.˚CCB</th>
                    </tr>
                </thead>
                {detalhes.map((item, index) => (
                    <tbody key={index}>
                        <tr>
                            <td>{item.nomeCompleto}{item.cpf}</td>
                            <td>{item.valorFinanciado}</td>
                            <td>{item.valorBruto}</td>
                            <td>{item.valorAquisicao}</td>
                            <td>{item.parcelas}{item.cet}</td>
                            <td>{item.numCcb}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    );
}

export default List;