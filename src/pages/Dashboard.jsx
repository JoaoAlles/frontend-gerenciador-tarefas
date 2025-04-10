import { useAuth } from '../context/AuthContext';
import Sidebar from "../components/Sidebar";
import ThemeToggle from "../components/ThemeToogle";
import {FaSignOutAlt} from "react-icons/fa";
import React from "react";
import {useNavigate} from "react-router-dom";

export default function Dashboard() {
    const { user, logout, loading } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };


    if (loading) return <div className="p-4">Carregando...</div>;
    if (!user) return <div className="p-4">Você precisa estar logado!</div>;

    return (
        <div className="d-flex" style={{ minHeight: '100vh' }}>
            <Sidebar />
            <div className="flex-grow-1">
                <header className="d-flex justify-content-between align-items-center p-3 border-bottom bg-body">
                    <div className="d-flex align-items-center">
                        <div>
                            <div className="text-muted" style={{ fontSize: '0.875rem' }}>Logado como</div>
                            <strong>Administrador</strong>
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <ThemeToggle />
                        <button
                            onClick={handleLogout}
                            className="btn btn-danger mt-3"
                        >
                            <FaSignOutAlt className="me-2" /> Sair
                        </button>
                    </div>
                </header>

                <main className="p-4">
                    <h1 className="mb-3">Bem-vindo, {user.name}! 🎯</h1>
                    <p className="text-muted">Aqui você verá um resumo dos seus objetivos e metas 👀</p>
                    <div className="border border-2 border-dashed p-4 text-center text-muted rounded">
                        [ Gráficos futuramente 📊 ]
                    </div>
                </main>
            </div>
        </div>
    );
}
