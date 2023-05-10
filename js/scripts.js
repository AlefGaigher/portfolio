
// Seleciona o formulário
const form = document.querySelector("#contact-form");

// Adiciona um evento de envio
form.addEventListener("submit", function(event) {
    // Cancela o envio do formulário
    event.preventDefault();

    // Seleciona os campos
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    const contact = document.querySelector("#contact").value;
    const subject = document.querySelector("#subject").value;

    // Valida os campos
    // if (name.trim() === "") {
    //     alert("Por favor, preencha o campo nome.");
    //     return;
    // }

    // if (email.trim() === "") {
    //     alert("Por favor, preencha o campo e-mail.");
    //     return;
    // }

    // if (message.trim() === "") {
    //     alert("Por favor, preencha o campo mensagem.");
    //     return;
    // }

    // Cria uma requisição AJAX
    const xhr = new XMLHttpRequest();

    // Define a URL e o método
    xhr.open("POST", "send-email.php", true);

    // Define o cabeçalho da requisição
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // Define a função de resposta
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Exibe uma mensagem de sucesso
            alert("Mensagem enviada com sucesso!");

            // Limpa os campos do formulário
            form.reset();
        }
    };

    // Define os dados da requisição
    const data = `name=${name}&email=${email}&message=${message}&subject=${subject}&contact=${contact}`;

    // Envia a requisição
    xhr.send(data);
});

