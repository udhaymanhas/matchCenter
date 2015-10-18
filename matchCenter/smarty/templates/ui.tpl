<html>
<body background="img/fanart.jpg">

<input type='hidden' id='url' value='{$url}'>
<head>
{literal}
<link href="/css/ui.css" rel="stylesheet" type="text/css"/>
<script type="text/javascript" src="js/server_request.js"></script>
<script>
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
</script>

{/literal}
</head>


<body>
<div id='main'>

<div id='left_main_div'></div>
<div id='left_sub_div'></div>
<div id='center_main_div'>

	<div id='page_head'>
		<div id='head_title'>{html_image file='img/cricket.jpg' width='190' height='50'}{html_image file='img/center.jpg' width='110' height='50'}</div>
		<div id='head_center_empty'></div>
		<div id='head_logo'>{html_image file='img/sub_logo.jpg' width='59' height='59'}</div>
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
	<div id='scorecard_head'>{html_image file='img/scorecard_img.jpg' width='130' height='27'}
	&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp 
	{html_image file='img/scorecard_logo.png' width='90' height='36'}</div>
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
</html>