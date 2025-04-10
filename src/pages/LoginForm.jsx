import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import Navbar from '../components/Navbar';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { login, user } = useAuth();

    useEffect(() => {
        console.log('USER:', user);
        if (user) {
            navigate('/dashboard');
        }
    }, [user, navigate]); // sempre que 'user' mudar, ele verifica

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await api.post('/login', { email, password });
            if (response.data.status === 'success') {
                login(response.data.user); // o useEffect acima vai cuidar do redirect
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Erro ao fazer login!');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-vh-100 d-flex justify-content-center align-items-center bg-body">
                <div className="card shadow-lg border-0 p-4 rounded-4">
                    <h2 className="text-center mb-4">Entrar no Sistema</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input type="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Digite seu e-mail" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Senha</label>
                            <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Digite sua senha" />
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

        </>
    );
}
