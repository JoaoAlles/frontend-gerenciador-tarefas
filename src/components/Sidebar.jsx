import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {FaHome, FaBullseye, FaCog} from 'react-icons/fa';

export default function Sidebar() {
    const { user } = useAuth();

    return (
        <div className="bg-body-secondary border-end p-4 d-flex flex-column justify-content-between" style={{ width: '250px', minHeight: '100vh' }}>
            <div>
                <div className="text-center mb-4">
                    <img
                        src={user.avatar || "https://i.pravatar.cc/100"}
                        alt="Avatar"
                        className="rounded-circle mb-2"
                        width="80"
                        height="80"
                    />
                    <h5 className="mb-0 text-body">{user.name}</h5>
                    <small className="text-muted">{user.email}</small>
                </div>
                <nav className="nav flex-column">
                    <Link className="nav-link text-body" to="/dashboard">
                        <FaHome className="me-2" /> Início
                    </Link>
                    <Link className="nav-link text-body" to="/objetivos">
                        <FaBullseye className="me-2" /> Objetivos
                    </Link>
                </nav>
            </div>
            <nav className="nav flex-column">
                <Link className="nav-link text-body" to="/configuracoes">
                    <FaCog className="me-2" /> Configurações
                </Link>
            </nav>

        </div>
    );
}
