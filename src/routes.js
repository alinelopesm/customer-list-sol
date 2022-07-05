import Financing from './pages/Financing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';

export default function AppRouter() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/financing' element={<Financing />}/>
            </Routes>
        </Router>
    );
}