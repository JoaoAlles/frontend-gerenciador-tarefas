import useTheme from '../hooks/useTheme';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="text-end mb-3">
            <button className="btn btn-outline-secondary" onClick={toggleTheme}>
                {theme === 'dark' ? '🌞 Modo Claro' : '🌙 Modo Escuro'}
            </button>
        </div>
    );
}
