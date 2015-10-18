<?php /* Smarty version 3.1.24, created on 2015-10-18 18:21:07
         compiled from "C:/wamp/www/matchCenter/smarty/templates/ui.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:218775623c6f3c7bb76_39086818%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '3d9b6264be045bc3e0d9167488873e9f6d52d2c5' => 
    array (
      0 => 'C:/wamp/www/matchCenter/smarty/templates/ui.tpl',
      1 => 1445185265,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '218775623c6f3c7bb76_39086818',
  'variables' => 
  array (
    'url' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.24',
  'unifunc' => 'content_5623c6f3ced003_75007466',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5623c6f3ced003_75007466')) {
function content_5623c6f3ced003_75007466 ($_smarty_tpl) {
if (!is_callable('smarty_function_html_image')) require_once 'C:/wamp/smarty/libs/plugins/function.html_image.php';

$_smarty_tpl->properties['nocache_hash'] = '218775623c6f3c7bb76_39086818';
?>
<html>
<body background="img/fanart.jpg">

<input type='hidden' id='url' value='<?php echo $_smarty_tpl->tpl_vars['url']->value;?>
'>
<head>

<link href="/css/ui.css" rel="stylesheet" type="text/css"/>
<?php echo '<script'; ?>
 type="text/javascript" src="js/server_request.js"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
>
	function toggle(r_id)
	{
		console.log(r_id);
		if(r_id=="scorecard_country_a_head")
		{
			id="scorecard_country_b";
			r_id="scorecard_country_a";
		}
		else
		{
			id="scorecard_country_a";
			r_id="scorecard_country_b";
		}
			
		document.getElementById(id).style.display='none';
		document.getElementById(id+'_head').style.backgroundColor='#efefef';
		
		document.getElementById(r_id).style.display='block';
		document.getElementById(r_id+'_head').style.backgroundColor='#ffffff';
	};
<?php echo '</script'; ?>
>


</head>


<body>
<div id='main'>

<div id='left_main_div'></div>
<div id='left_sub_div'></div>
<div id='center_main_div'>

	<div id='page_head'>
		<div id='head_title'><?php echo smarty_function_html_image(array('file'=>'img/cricket.jpg','width'=>'190','height'=>'50'),$_smarty_tpl);
echo smarty_function_html_image(array('file'=>'img/center.jpg','width'=>'110','height'=>'50'),$_smarty_tpl);?>
</div>
		<div id='head_center_empty'></div>
		<div id='head_logo'><?php echo smarty_function_html_image(array('file'=>'img/sub_logo.jpg','width'=>'59','height'=>'59'),$_smarty_tpl);?>
</div>
	</div>

	<div id='match_head'>
		<div id='country_a'>
			<div id='country_a_name'></div>
			<div id='country_a_logo'></div>
			<div id='country_a_score'></div>
			<div id='country_a_hs'></div>
			<div id='country_a_bb'></div>
		</div>
		<div class='separator'></div>
		<div id='match_overview'>
			<div id='match_status'></div>
			<div id='match_number'></div>
			<div id='match_sub_details'></div>
		</div>
		<div class='separator'></div>
		<div id='country_b'>
			<div id='country_b_name'></div>
			<div id='country_b_logo'></div>
			<div id='country_b_score'></div>
			<div id='country_b_hs'></div>
			<div id='country_b_bb'></div>
		</div>
	</div>

	<div id='match_details'>
	<div id='scorecard_head'><?php echo smarty_function_html_image(array('file'=>'img/scorecard_img.jpg','width'=>'130','height'=>'27'),$_smarty_tpl);?>

	&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp 
	<?php echo smarty_function_html_image(array('file'=>'img/scorecard_logo.png','width'=>'90','height'=>'36'),$_smarty_tpl);?>
</div>
	<div id='scorecard_countries'>
		<div id='scorecard_country_a_head' onclick='toggle(this.id);'></div>
		<div id='scorecard_country_b_head' onclick='toggle(this.id);'></div>
	</div>
	<div id='scorecard_country_a'>
	<br>
		<table id='batting_table_a' align='center' border='0' cellspacing='0' cellpadding='0'>
			<tr id='table_head' >
				<th width='130' id='batsmen'>Batsmen</th>
				<th width='230' id='batting_table_comments'></th>
				<th width='50' id='runs'>Runs</th>
				<th width='30' id='balls'>Balls</th>
				<th width='40' id='sr'>SR</th>
				<th width='30' id='4s'>4s</th>
				<th width='30' id='6s'>6s</th>
			</tr>
		</table>
		<br>
		<table id='fow_table_a' align='center'  border='0' cellspacing='0' cellpadding='0'>
			<tr id='table_head' >
				<th width='540' align='left' >&nbsp &nbsp Fall of Wickets</th>
			</tr>
		</table>
		<br>
		<table id='bowling_table_a' align='center' border='0' cellspacing='0' cellpadding='0'>
			<tr id='table_head'>
				<th width='170' id='bowler'>Bowlers</th>
				<th width='40' id='o'>O</th>
				<th width='50' id='r'>R</th>
				<th width='30' id='w'>W</th>
				<th width='50' id='econ'>Econ</th>
				<th width='40' id='dots'>Dots</th>
			</tr>
		</table>
		<br>
	</div>
	<div id='scorecard_country_b'>
	<br>
		<table id='batting_table_b' align='center' border='0' cellspacing='0' cellpadding='0'>
			<tr id='table_head'>
				<th width='130' id='batsmen'>Batsmen</th>
				<th width='230' id='batting_table_comments'></th>
				<th width='50' id='runs'>Runs</th>
				<th width='30' id='balls'>Balls</th>
				<th width='40' id='sr'>SR</th>
				<th width='30' id='4s'>4s</th>
				<th width='30' id='6s'>6s</th>
			</tr>
		</table>
		<br>
		<table id='fow_table_b' align='center' border='0' cellspacing='0' cellpadding='0'>
			<tr id='table_head' >
				<th width='540' align='left' >&nbsp &nbsp Fall of Wickets</th>
			</tr>
		</table>
		<br>
		<table id='bowling_table_b' align='center' border='0' cellspacing='0' cellpadding='0'>
			<tr id='table_head'>
				<th width='170' id='bowler'>Bowlers</th>
				<th width='40' id='o'>O</th>
				<th width='50' id='r'>R</th>
				<th width='30' id='w'>W</th>
				<th width='50' id='econ'>Econ</th>
				<th width='40' id='dots'>Dots</th>
			</tr>
		</table>
		<br>
	</div>
	
	</div>

</div>
<div id='right_sub_div'></div>
<div id='right_main_div'></div>

</div>
<br>
<br>
<br>
<div></div>
</body>
</html><?php }
}
?>