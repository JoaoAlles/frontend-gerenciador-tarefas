import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToogle';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm px-3">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">Gerenciador de Metas</Link>
                <div className="d-flex align-items-center gap-2">
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
