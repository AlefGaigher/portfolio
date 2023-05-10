<?php

// Recebe os dados do formulário
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
$subjectInfo = $_POST["subject"];
$contact = $_POST["contact"];

// Verifica se todos os campos foram preenchidos
// if (empty($name) || empty($email) || empty($message)) {
//     die("Por favor, preencha todos os campos.");
// }

// Configurações para enviar o e-mail
$to = "alefgaigher@hotmail.com";
$subject = "$subjectInfo";
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Monta o corpo da mensagem
$body = "<h2>Mensagem do formulário de contato</h2>";
$body .= "<p><strong>Nome:</strong> $name</p>";
$body .= "<p><strong>E-mail:</strong> $email</p>";
$body .= "<p><strong>Mensagem:</strong> $message</p>";

// Envia o e-mail
if (mail($to, $subject, $body, $headers)) {
    echo "Mensagem enviada com sucesso!";
} else {
    echo "Ocorreu um erro ao enviar a mensagem.";
}

?>
