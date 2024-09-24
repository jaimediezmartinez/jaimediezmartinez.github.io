<?php
// Recibir los datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = strip_tags(trim($_POST["nombre"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $mensaje = trim($_POST["mensaje"]);

    // Validar datos
    if (empty($nombre) || empty($email) || empty($mensaje)) {
        // Si algún campo está vacío, redirigir de vuelta al formulario
        header("Location: index.html");
        exit;
    }

    // Configurar el correo
    $destinatario = "jaimediezm@gmail.com";
    $asunto = "Nuevo mensaje de contacto desde el formulario";
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Email: $email\n\n";
    $contenido .= "Mensaje:\n$mensaje\n";

    // Enviar el correo
    $headers = "From: $nombre <$email>";

    if (mail($destinatario, $asunto, $contenido, $headers)) {
        echo "<p>¡Mensaje enviado correctamente!</p>";
    } else {
        echo "<p>Hubo un problema al enviar el mensaje. Por favor, inténtalo más tarde.</p>";
    }
}
?>
