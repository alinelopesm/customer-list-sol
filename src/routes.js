import App from './pages/App.tsx';
import Financing from './pages/Financing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/financing' element={<Financing />} />
            </Routes>
        </Router>
    );
}