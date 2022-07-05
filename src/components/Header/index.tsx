import './index.css';
import { FormalizationContext } from '../../common/context/Formalization';
import { useContext } from 'react';

function Header() {
    /* utiliza os dados do header, apartir do contexto */
    const { fundingHeader } = useContext(FormalizationContext);

    return (
        <div className="flex-container">
            <div className="flex-items"><button className='btn'></button> </div>
            <div className="flex-items"><h2>Formalizações</h2>Aprovadas - {fundingHeader.criadoEm}</div>
            <div className="flex-items"><button>Gerar CNAB</button></div>
        </div>
    );
}

export default Header;