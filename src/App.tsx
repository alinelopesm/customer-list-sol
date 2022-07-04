import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import List from './components/List';
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
            <Card />
            <List />
        </>
    );
}

export default App;
