<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json; charset=utf-8');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . '/PHPMailer/src/Exception.php';
require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/src/SMTP.php';

$envFile = dirname(__DIR__, 2) . '/.env';
if (file_exists($envFile)) {
  $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

  foreach ($lines as $line) {
    if (strpos(trim($line), '#') === 0 || !strpos($line, '=')) continue;
    list($key, $value) = explode('=', $line, 2);
    $cleanValue = trim(trim($value), '"\'');
    putenv(trim($key) . '=' . $cleanValue);
  }
} else {
  // Retorna erro amigável se o .env não for localizado no caminho esperado
  http_response_code(500);
  echo json_encode(['success' => false, 'error' => 'Arquivo .env não foi localizado na raiz do servidor.']);
  exit;
}

// Recebe os dados em formato JSON (fetch API / Axios)
$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true) ?? [];

$nameRaw = trim($data['name'] ?? '');
$email = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$whatsapp = filter_var(trim($data['whatsapp'] ?? ''), FILTER_SANITIZE_SPECIAL_CHARS);
$messageText = trim($data['message'] ?? '');

$name = filter_var($nameRaw, FILTER_SANITIZE_SPECIAL_CHARS);
$senderName = !empty($name) ? $name : 'Formulário do Site';

if (!$email) {
  http_response_code(400);
  echo json_encode(['success' => false, 'error' => 'E-mail inválido ou não informado.']);
  exit;
}

$mail = new PHPMailer(true);

try {
  $smtpHost = getenv('SMTP_HOST') ?: 'smtp.titan.email';
  $smtpPort = (int) (getenv('SMTP_PORT') ?: 465);
  $smtpUser = getenv('SMTP_USER');
  $smtpPass = getenv('SMTP_PASS');
  $smtpTo   = getenv('SMTP_TO') ?: $smtpUser;

  $mail->isSMTP();
  $mail->Host       = $smtpHost;
  $mail->Port       = $smtpPort;
  $mail->SMTPAuth   = true;
  $mail->Username   = $smtpUser;
  $mail->Password   = $smtpPass;
  $mail->CharSet    = 'UTF-8';

  // Define criptografia baseada na porta configurada
  if ($smtpPort === 465) {$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;} // SSL
  else {$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;} // TLS (Porta 587)

  // Remetente (O e-mail DEVE ser o usuário autenticado do Titan)
  $mail->setFrom($smtpUser, $senderName);
  $mail->addAddress($smtpTo);
  $mail->addReplyTo($email, $senderName);

  // Tratamento do corpo da mensagem
  $safeMessageHTML = nl2br(htmlspecialchars($messageText, ENT_QUOTES, 'UTF-8'));
  $safeMessageText = strip_tags($messageText);

  $mail->isHTML(true);
  $mail->Subject = '[Site] Nova mensagem de ' . $senderName;
  $mail->Body = "
    <h2>Nova mensagem recebida pelo site</h2>
    <p><strong>Nome:</strong> {$name}</p>
    <p><strong>E-mail:</strong> {$email}</p>
    <p><strong>WhatsApp:</strong> {$whatsapp}</p>
    <p><strong>Mensagem:</strong><br>{$safeMessageHTML}</p>
  ";

  // Texto puro para clientes de e-mail sem suporte a HTML
  $mail->AltBody = "Nome: {$name}\nE-mail: {$email}\nWhatsApp: {$whatsapp}\nMensagem:\n{$safeMessageText}";

  $mail->send();
  echo json_encode(['success' => true]);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode([
    'success' => false, 
    'error'   => $mail->ErrorInfo
  ]);
}
?>