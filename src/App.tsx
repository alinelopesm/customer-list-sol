import React, { useEffect, useState } from 'react';
import api from './services/api';

function App() {
    const [ user, setUser ] = useState({ name: '', login: '' });
    
    useEffect(() => {
        api
            .get('/users/romulo27')
            .then((response) => {
                console.log('Quem sou', response.data);
                setUser(response.data);
            })
            .catch((err) => {
                console.error('ops! ocorreu um erro' + err);
            });
    }, [user]);
      
    return (
        <div>
            Energia limpa
            User: {user ? user.name : ''}
        </div>
    );
}

export default App;
