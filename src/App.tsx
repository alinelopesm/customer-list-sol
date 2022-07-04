import React, { useEffect, useState } from 'react';
import Header from './components/Header/index';
import List from './components/List/index';
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
        <>
            <Header />
            <List />
        </>
    );
}

export default App;
