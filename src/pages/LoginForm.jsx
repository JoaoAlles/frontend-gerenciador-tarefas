import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import Navbar from '../components/Navbar';
import { toast } from 'react-toastify';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await api.post('/login', { email, password });
            if (response.data.success) {
                navigate('/dashboard');
            }
        } catch (error) {
            toast.error('Erro ao fazer login!');

        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Navbar />
                <div className="container mt-5">
                    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
                        <div className="col-md-6 col-lg-5 col-xl-4">
                            <div className="card shadow-lg border-0 p-4 rounded-4">
                                <h2 className="text-center mb-4">Entrar no Sistema</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">E-mail</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            placeholder="Digite seu e-mail"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Senha</label>
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            placeholder="Digite sua senha"
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
                                        {isLoading ? 'Entrando...' : 'Entrar'}
                                    </button>
                                </form>
                                <p className="text-center mt-3 mb-0">
                                    Ainda não tem conta? <Link to="/register">Cadastre-se</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
}
