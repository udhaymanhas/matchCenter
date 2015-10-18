<?php 
require 'vendor/autoload.php';

$app = new \Slim\Slim(array(
    'view' => new \Slim\Views\Smarty()
));

require 'smarty/configs/smartyConfig.php';

$templateDirectory = 'smarty/templates/';

$app->get('/:match_key', function($match_key) use ($app) {   
    
    $api = "http://litz.sportskeeda.com/rest/v2/match/";
	
	$app->render('smarty/templates/ui.tpl', array(
        'url' => $api.$match_key    
    ));
});


$app->run();
//zimafg_2015_one-day_02
?>