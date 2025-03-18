<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$envFile = __DIR__ . '/.env';
if (file_exists($envFile)) {
  $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
  foreach ($lines as $line) {
    if (strpos(trim($line), '#') === 0 || !strpos($line, '=')) continue;
    list($key, $value) = explode('=', $line, 2);
    putenv(trim($key) . '=' . trim($value));
  }
}

$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$whatsapp = $data['whatsapp'] ?? '';
$message = $data['message'] ?? '';

$mail = new PHPMailer(true);

try {
  $mail->isSMTP();
  $mail->Host = getenv('SMTP_HOST');
  $mail->Port = getenv('SMTP_PORT');
  $mail->SMTPAuth = true;
  $mail->Username = getenv('SMTP_USER');
  $mail->Password = getenv('SMTP_PASS');
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;

  $mail->setFrom(getenv('SMTP_USER'), $name);
  $mail->addAddress(getenv('SMTP_TO'));
  $mail->addReplyTo($email, $name);

  $mail->isHTML(true);
  $mail->Subject = '[Site] Nova mensagem';
  $mail->Body = "
    <h2>Nova mensagem recebida</h2>
    <p><strong>Nome:</strong> {$name}</p>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>WhatsApp:</strong> {$whatsapp}</p>
    <p><strong>Mensagem:</strong><br>{$message}</p>
  ";

  $mail->send();
  echo json_encode(['success' => true]);
} 

  catch (Exception $e) {
  http_response_code(500);
  echo json_encode(['success' => false, 'error' => $mail->ErrorInfo]);}
?>