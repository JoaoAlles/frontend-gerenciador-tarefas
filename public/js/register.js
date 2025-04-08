document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const userData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            password: document.getElementById('password').value
        };
        const confirmPassword = document.getElementById('confirm-password').value;

        if (!userData.name || !userData.email || !userData.password) {
            alert('Preencha todos os campos!');
            return;
        }

        if (userData.password !== confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }

        const submitButton = registerForm.querySelector('button');
        submitButton.disabled = true;
        submitButton.innerHTML = 'Cadastrando...';

        try {
            console.log('Enviando dados para:', 'http://localhost:8000/api/register');

            const response = await fetch('http://localhost:8000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });

            console.log('Status da resposta:', response.status);

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Erro detalhado:', errorData);
                throw new Error(errorData.message || 'Erro no servidor');
            }

            const result = await response.json();
            alert('Cadastro realizado com sucesso!');
            window.location.href = '../index.html';

        } catch (error) {
            console.error('Erro completo:', error);
            alert(`Falha na comunicação: ${error.message}`);
        } finally {
            submitButton.disabled = false;
            submitButton.innerHTML = 'Cadastrar';
        }
    });
});