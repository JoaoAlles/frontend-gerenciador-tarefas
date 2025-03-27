document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        console.log("Tentativa de login:", email, password);

        // Somente para teste. Até não ter a API configurada.
        if (email === "admin@example.com" && password === "123456") {
            alert("Login bem-sucedido!");
        } else {
            alert("Credenciais inválidas. Tente novamente.");
        }
    });
});
