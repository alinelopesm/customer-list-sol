import './index.css';
import { cessao } from '../../__mocks__/mock-list-full-formalizations';

function Card() {
    return (
        <>
            <h3>Total Formalizações</h3>
            <div className="flex-container-card">
                <div className="flex-items-card">
                    <p>valor Financiado</p>
                    <div>
                        <span>PF R$ </span>
                        <span>{cessao.pf.financiado}</span>
                    </div>
                    <div>
                        <span>PJ R$ </span>
                        <span>{cessao.pj.financiado}</span>
                    </div>
                    <div>
                        <h3>Total R$ {cessao.total.financiado}</h3>
                    </div>
                </div>
                <div className="flex-items-card">
                    <p>valor Bruto</p>
                    <div>
                        <span>PF R$ </span>
                        <span>{cessao.pf.bruto}</span>
                    </div>
                    <div>
                        <span>PJ R$ </span>
                        <span>{cessao.pj.bruto}</span>
                    </div>
                    <div>
                        <h3>Total R$ {cessao.total.bruto}</h3>
                    </div>
                </div>
                <div className="flex-items-card">
                    <p>valor Aquisição</p>
                    <div>
                        <span>PF R$ </span>
                        <span>{cessao.pf.aquisicao}</span>
                    </div>
                    <div>
                        <span>PJ R$ </span>
                        <span>{cessao.pj.aquisicao}</span>
                    </div>
                    <div>
                        <h3>Total R$ {cessao.total.aquisicao}</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;