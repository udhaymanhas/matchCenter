<?php /* Smarty version 3.1.24, created on 2015-10-18 01:02:10
         compiled from "C:/wamp/www/matchCenter/smarty/templates/index.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:88185622d372a7f8d9_56076617%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '6e76ddba9e37543082ee767af87213c805aff9ce' => 
    array (
      0 => 'C:/wamp/www/matchCenter/smarty/templates/index.tpl',
      1 => 1445122924,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '88185622d372a7f8d9_56076617',
  'variables' => 
  array (
    'url' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.24',
  'unifunc' => 'content_5622d372ab63e5_61892076',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5622d372ab63e5_61892076')) {
function content_5622d372ab63e5_61892076 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '88185622d372a7f8d9_56076617';
?>
<html
<body style='background-color:green'>
<input type='hidden' id='url' value='<?php echo $_smarty_tpl->tpl_vars['url']->value;?>
'>

<?php echo '<script'; ?>
 type="text/javascript" src="js/server_request.js"><?php echo '</script'; ?>
>

</body>
</html><?php }
}
?>