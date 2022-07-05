import './index.css';
import { cessao } from '../../__mocks__/mock-list-full-formalizations';
import { FormalizationContext } from '../../common/context/Formalization';
import { useContext } from 'react';

function Card() {
    /* utiliza o array list, apartir do contexto */
    const { fundingHeader } = useContext(FormalizationContext);

    return (
        <>
            <h3>Total Formalizações</h3>
            <div className="flex-container-card">
                <div className="flex-items-card">
                    <p>valor Financiado</p>
                    <div>
                        <span>PF R$ </span>
                        <span>{fundingHeader.pf.financiado}</span>
                    </div>
                    <div>
                        <span>PJ R$ </span>
                        <span>{fundingHeader.pj.financiado}</span>
                    </div>
                    <div>
                        <h3>Total R$ {fundingHeader.total.financiado}</h3>
                    </div>
                </div>
                <div className="flex-items-card">
                    <p>valor Bruto</p>
                    <div>
                        <span>PF R$ </span>
                        <span>{fundingHeader.pf.bruto}</span>
                    </div>
                    <div>
                        <span>PJ R$ </span>
                        <span>{fundingHeader.pj.bruto}</span>
                    </div>
                    <div>
                        <h3>Total R$ {fundingHeader.total.bruto}</h3>
                    </div>
                </div>
                <div className="flex-items-card">
                    <p>valor Aquisição</p>
                    <div>
                        <span>PF R$ </span>
                        <span>{fundingHeader.pf.aquisicao}</span>
                    </div>
                    <div>
                        <span>PJ R$ </span>
                        <span>{fundingHeader.pj.aquisicao}</span>
                    </div>
                    <div>
                        <h3>Total R$ {fundingHeader.total.aquisicao}</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;