<?php 
require 'vendor/autoload.php';

$app = new \Slim\Slim(array(
    'view' => new \Slim\Views\Smarty()
));

require 'smarty/configs/smartyConfig.php';

$templateDirectory = 'smarty/templates/';

$app->get('/:match_key', function($match_key) use ($app) {   
    
    $api = "http://litz.sportskeeda.com/rest/v2/match/";
	
	if (strpos($match_key,'test') !== false) 
	{
		$format = 'test';
	}
	else
	if (strpos($match_key,'one') !== false) 
	{
		$format = 'oneday';
	}
	
	if($format == 'test')
	{
		$app->render('smarty/templates/test_ui.tpl', array(
			'url' => $api.$match_key,
			'format' => $format
		));
	}
	else
	if($format == 'oneday')
	{
		$app->render('smarty/templates/oneday_ui.tpl', array(
			'url' => $api.$match_key,
			'format' => $format
		));
	}
});


$app->run();
//zimafg_2015_one-day_02
?>