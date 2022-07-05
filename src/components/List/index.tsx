import { FormalizationContext } from '../../common/context/Formalization';
import { Key, useContext } from 'react';

function List() {
    /* utiliza o array list, apartir do contexto */
    const { fundingList } = useContext(FormalizationContext);

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
                {fundingList.map((item: { 
                    nomeCompleto: string,
                    cpf: string,
                    valorFinanciado: string,
                    valorBruto: string,
                    valorAquisicao: string,
                    parcelas: number,
                    cet: string,
                    numCcb: string,
                }, index: Key | null | undefined) => (
                    <tbody key={index}>
                        <tr>
                            <td><p>{item.nomeCompleto}</p>{item.cpf}</td>
                            <td>{item.valorFinanciado}</td>
                            <td>{item.valorBruto}</td>
                            <td>{item.valorAquisicao}</td>
                            <td><p>{item.parcelas}</p>{item.cet}</td>
                            <td>{item.numCcb}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    );
}

export default List;