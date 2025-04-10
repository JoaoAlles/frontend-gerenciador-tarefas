import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import Navbar from '../components/Navbar';
import { toast } from 'react-toastify';

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.password) {
            toast.error('Preencha todos os campos!');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            toast.error('As senhas não coincidem!');
            return;
        }

        setIsLoading(true);

        try {
            const response = await api.post('/register', {
                name: formData.name,
                email: formData.email,
                password: formData.password
            });

            toast.success('Cadastro realizado com sucesso!');
            navigate('/');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Falha na comunicação com o servidor');
            console.error('Erro detalhado:', error);
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
                            <h2 className="text-center mb-4">Criar Conta</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Nome</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="form-control"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Seu nome completo"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Seu melhor e-mail"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Senha</label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        placeholder="Crie uma senha forte"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label">Confirmar Senha</label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        className="form-control"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                        placeholder="Repita a senha"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
                                    {isLoading ? 'Cadastrando...' : 'Cadastrar'}
                                </button>
                            </form>
                            <p className="text-center mt-3 mb-0">
                                Já tem uma conta? <Link to="/">Faça login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
