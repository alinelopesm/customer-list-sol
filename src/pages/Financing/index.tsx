import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Header from '../../components/Header';
import List from '../../components/List';
import api from '../../services/api';

export default function Financing(){
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