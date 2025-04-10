import { Routes, Route } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/main.css';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>

            <ToastContainer />
        </>
    );
}

export default App;
