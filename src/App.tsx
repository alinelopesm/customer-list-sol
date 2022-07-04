import React, { useEffect, useState } from 'react';
import api from './services/api';

function App() {
    const [ fundingData, setFundingData] = useState();
    
    useEffect(() => {
        api
            .get('')
            .then((response) => {
                setFundingData(response.data);
            })
            .catch((err) => {
                console.error('ops! ocorreu um erro' + err);
            });
    }, [fundingData]);
      
    return (
        <div>
            Energia limpa
        </div>
    );
}

export default App;
