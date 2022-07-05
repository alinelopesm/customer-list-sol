import React, { createContext, useLayoutEffect, useState } from 'react';
import api from '../../services/api';

export const FormalizationContext = createContext();

// eslint-disable-next-line react/prop-types
export const FormalizationProvider = ({ children }) => {
    const [ fundingData, setFundingData] = useState();
    const [ fundingHeader, setFundingHeader] = useState();
    const [ fundingList, setFundingList] = useState();
    
    /* Chamada api e constru!ào dos dados */
    useLayoutEffect(() => {
        api
            .get('')
            .then((response) => {        
                setFundingData(response.data);
                setFundingHeader(response.data.cessao);
                setFundingList(response.data.detalhes);
            })
            .catch((err) => {
                console.error('ops! ocorreu um erro' + err);
            });
    }, []);

    return (
        <FormalizationContext.Provider value={{ fundingData, fundingHeader, fundingList}}>
            {children}
        </FormalizationContext.Provider>
    );
};