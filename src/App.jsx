import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/main.css';

function App() {
    return (
        <BrowserRouter>
            <main className="container mt-4">
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} />
                </Routes>
            </main>
            <ToastContainer />
        </BrowserRouter>
    );
}

export default App;