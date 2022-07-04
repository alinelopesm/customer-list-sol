import './index.css';

function Header() {
    return (
        <div className="flex-container">
            <div className="flex-items"><button className='btn'></button> </div>
            <div className="flex-items"><h2>Formalizações</h2>Aprovadas - 05/01/2021 - 13:40:32</div>
            <div className="flex-items"><button>Gerar CNAB</button></div>
        </div>
    );
}

export default Header;