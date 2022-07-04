import React from 'react';
import { detalhes } from '../../__mocks__/mock-list-funding';

function List() {
    return (
        <div>
            <h2> Lista de Financiamentos </h2>
            {detalhes.map((item, index) => (
                <div key={index}>
                    <h3>{item.nomeCompleto}</h3>
                    <span>{item.id}</span>
                </div>
            ))}
        </div>
    );
}

export default List;