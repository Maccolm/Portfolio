<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'PHPMailer/src/Exception.php';
	require 'PHPMailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'PHPMailer/language/');
	$mail->isHTML(true);

	//от кого письмо
	$mail->setFrom('martyit@ukr.net', 'My web-development');
	//кому відправити
	$mail->addAddress('vitaliiprogit@gmail.com');
	//Тема листа
	$mail->Subject = 'Привіт, це початковий програміст';


	//Тіло листа
	$body = '<h1>Зустрічайте мій лист!</h1>';

	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>Email:</strong> '.$_POST['email'].'</p>';
	}
	if(trim(!empty($_POST['message']))){
		$body.='<p><strong>Message:</strong> '.$_POST['message'].'</p>';
	}

	$mail->Body = $body;

	//Відправляєм
	if (!$mail->send()) {
		$message = 'Помилка';
	} else {
		$message = 'The message is sent!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($respopnse);
?>

