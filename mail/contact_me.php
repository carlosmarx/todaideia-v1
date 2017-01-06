<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "Nenhum argumento fornecido!";
	return false;
   }
	
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
	
// Create the email and send the message
$to = 'contato@todaideia.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Contato - Formulário do site:  $name";
$email_body = "Você recebeu uma nova mensagem do formulário de contato do site.\n\n"."Aqui estão os detalhes: <br /> Nome: $name <br /><br /> Email: $email_address <br /><br /> Fone: $phone <br /><br /> Menssagem: <br />$message";
$headers = "De: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers = "Content-Type: text/html; charset=\"UTF-8\"\n"; // This is encode charset type to utf-8
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>
