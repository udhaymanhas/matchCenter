<html>
<body background="img/fanart.jpg">

<input type='hidden' id='url' value='{$url}'>
<input type='hidden' id='format' value='{$format}'>
<head>
{literal}
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<link href="/css/test_ui.css" rel="stylesheet" type="text/css"/>
<script type="text/javascript" src="js/server_request_test.js"></script>
<script>
	function toggle(r_id)
	{
		if(document.getElementById('format').value=='test')
		{
			console.log('re');
			toggle_innings_head(r_id);
		}
		
		if(r_id=="scorecard_country_a_1_head")
		{
			id="scorecard_country_b_";
			r_id="scorecard_country_a_";
			document.getElementById('scorecard_country_a_1_head').style.display='block';
			document.getElementById('scorecard_country_a_2_head').style.display='none';
			document.getElementById('scorecard_country_b_1_head').style.display='block';
			document.getElementById('scorecard_country_b_2_head').style.display='none';
		}
		else
		if(r_id=="scorecard_country_b_1_head")
		{
			id="scorecard_country_a_";
			r_id="scorecard_country_b_";
			
			document.getElementById('scorecard_country_b_1_head').style.display='block';
			document.getElementById('scorecard_country_b_2_head').style.display='none';
			document.getElementById('scorecard_country_a_1_head').style.display='block';
			document.getElementById('scorecard_country_a_2_head').style.display='none';
		}
		else
		if(r_id=="scorecard_country_a_2_head")
		{
			id="scorecard_country_b_";
			r_id="scorecard_country_a_";
			document.getElementById('scorecard_country_a_2_head').style.display='block';
			document.getElementById('scorecard_country_a_1_head').style.display='none';
			document.getElementById('scorecard_country_b_2_head').style.display='block';
			document.getElementById('scorecard_country_b_1_head').style.display='none';
		}
		else
		if(r_id=="scorecard_country_b_2_head")
		{
			id="scorecard_country_a_";
			r_id="scorecard_country_b_";
			
			document.getElementById('scorecard_country_b_2_head').style.display='block';
			document.getElementById('scorecard_country_b_1_head').style.display='none';
			document.getElementById('scorecard_country_a_2_head').style.display='block';
			document.getElementById('scorecard_country_a_1_head').style.display='none';
		}
			
		document.getElementById(id+'1_head').style.backgroundColor='#efefef';
		document.getElementById(id+'2_head').style.backgroundColor='#efefef';
		
		document.getElementById(r_id+'1_head').style.backgroundColor='#ffffff';
		document.getElementById(r_id+'2_head').style.backgroundColor='#ffffff';
		
		
	};
	
	function toggle_innings_head(r_id)
	{
			
			if(r_id=="scorecard_country_a_1_head"||r_id=="scorecard_country_a_2_head")
			{
				show_div_1 = "innings_head_country_a_1";
				show_div_2 = "innings_head_country_a_2";
				hide_div_1 = "innings_head_country_b_1";
				hide_div_2 = "innings_head_country_b_2";
			}
			else
			if(r_id=="scorecard_country_b_1_head"||r_id=="scorecard_country_b_2_head")
			{
				show_div_1 = "innings_head_country_b_1";
				show_div_2 = "innings_head_country_b_2";
				hide_div_1 = "innings_head_country_a_1";
				hide_div_2 = "innings_head_country_a_2";
			}
			
			document.getElementById(show_div_1).style.display='block';
			document.getElementById(show_div_2).style.display='block';
			
			document.getElementById(hide_div_1).style.display='none';
			document.getElementById(hide_div_2).style.display='none';
			
			document.getElementById("innings_head_country_a_1").style.backgroundColor="#efefef";
			document.getElementById("innings_head_country_a_2").style.backgroundColor="#efefef";
			document.getElementById("innings_head_country_b_1").style.backgroundColor="#efefef";
			document.getElementById("innings_head_country_b_2").style.backgroundColor="#efefef";
			
			document.getElementById(show_div_1).style.backgroundColor="#ffffff";
		
	}
	
	function toggle_scorecard(id)
	{	
		toggle_scorecard_head(id);
		document.getElementById("scorecard_country_a_1").style.display='none';
		document.getElementById("scorecard_country_a_2").style.display='none';
		document.getElementById("scorecard_country_b_1").style.display='none';
		document.getElementById("scorecard_country_b_2").style.display='none';
		
		document.getElementById("scorecard_country_"+id).style.display='block';
		
		document.getElementById("innings_head_country_a_1").style.backgroundColor="#efefef";
		document.getElementById("innings_head_country_a_2").style.backgroundColor="#efefef";
		document.getElementById("innings_head_country_b_1").style.backgroundColor="#efefef";
		document.getElementById("innings_head_country_b_2").style.backgroundColor="#efefef";
		
		document.getElementById("innings_head_country_"+id).style.backgroundColor="#ffffff";
		
	}
	
	function toggle_scorecard_head(id)
	{
		if(id == "a_1"){ 	show="a_1";hide="a_2";}
		if(id == "a_2"){	show="a_2";hide="a_1";}
		if(id == "b_1"){	show="b_1";hide="b_2";}
		if(id == "b_2"){	show="b_2";hide="b_1";}
		
		document.getElementById('scorecard_country_'+show+'_head').style.display='block';
		document.getElementById('scorecard_country_'+hide+'_head').style.display='none';
		
		document.getElementById("scorecard_country_a_1_head").style.backgroundColor="#efefef";
		document.getElementById("scorecard_country_a_2_head").style.backgroundColor="#efefef";
		document.getElementById("scorecard_country_b_1_head").style.backgroundColor="#efefef";
		document.getElementById("scorecard_country_b_2_head").style.backgroundColor="#efefef";
		
		document.getElementById('scorecard_country_'+show+'_head').style.backgroundColor="#ffffff";
		
	}
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
	<div id='current_head'><table><tr><td id='current_head_title'>&nbsp FEED</td></tr></table></div>
	
	<div id='scorecard_head'>{html_image file='img/scorecard_img.jpg' width='130' height='27'}
	&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp 
	{html_image file='img/scorecard_logo.png' width='90' height='36'}</div>
	
	<div id='current_details'>
		<div id='current_stat'>
		<table >
		<tr><th colspan='1' id='current_stat_played'></th><th id='innings'></th></tr>
		<tr><th colspan ='2' id='current_stat_playing'></th></tr>
		</table>
		</div>
		
		<div id='on_pitch'>
			<table align='center' style='margin-top:5px;'>
			<tr><th id='on_pitch_striker' class='on_pitch_player'></th></tr>
			<tr><th id='on_pitch_striker_stat' class='on_pitch_player_stat'></th></tr>
			<tr><th id='on_pitch_nonstriker' class='on_pitch_player'></th></tr>
			<tr><th id='on_pitch_nonstriker_stat' class='on_pitch_player_stat'></th></tr>
			<tr><td>&nbsp</td></tr>
			<tr><th id='on_pitch_bowler' class='on_pitch_player'></th></tr>
			<tr><th id='on_pitch_bowler_stat' class='on_pitch_player_stat'></th></tr>
			</table>
		</div>
	</div>
	
	<div id='innings_div'>
		<div id='innings_head_country_a_1' onclick='toggle_scorecard("a_1");'>&nbsp&nbsp&nbsp&nbspinning 1</div>
		<div id='innings_head_country_a_2' onclick='toggle_scorecard("a_2");'>&nbsp&nbsp&nbsp&nbspinning 2</div>
		<div id='innings_head_country_b_2' onclick='toggle_scorecard("b_2");'>&nbsp&nbsp&nbsp&nbspinning 2</div>
		<div id='innings_head_country_b_1' onclick='toggle_scorecard("b_1");'>&nbsp&nbsp&nbsp&nbspinning 1</div>
	</div>
	
	<div id='scorecard_countries'>
		<div id='scorecard_country_a_1_head' onclick='toggle(this.id);'></div>
		<div id='scorecard_country_a_2_head' onclick='toggle(this.id);'></div>
		<div id='scorecard_country_b_1_head' onclick='toggle(this.id);'></div>
		<div id='scorecard_country_b_2_head' onclick='toggle(this.id);'></div>
	</div>
	
	<div id='scorecard_country_a_1'>
	<br>
		<table id='batting_table_a_1' align='center' border='0' cellspacing='0' cellpadding='0'>
			<tr id='table_head' >
				<th width='130' id='batsmen_a_1'>&nbsp &nbsp Batsmen</th>
				<th width='230' id='batting_table_comments_a_1'></th>
				<th width='45' id='runs_a_1'>Runs</th>
				<th width='50' id='balls_a_1'>Balls</th>
				<th width='60' id='sr_a_1'>SR</th>
				<th width='30' id='4s_a_1'>4s</th>
				<th width='30' id='6s_a_1'>6s</th>
			</tr>
		</table>
		<br>
		<table id='fow_table_a_1' align='center'  border='0' cellspacing='0' cellpadding='0'>
			<tr id='table_head' >
				<th width='540' align='left' >&nbsp &nbsp Fall of Wickets</th>
			</tr>
		</table>
		<br>
		<table id='bowling_table_a_1' align='center' border='0' cellspacing='0' cellpadding='0'>
			<tr id='table_head'>
				<th width='170' id='bowler_a_1'>&nbsp &nbsp Bowlers</th>
				<th width='52' id='o_a_1'>O</th>
				<th width='35' id='r_a_1'>R</th>
				<th width='30' id='w_a_1'>W</th>
				<th width='50' id='econ_a_1'>Econ</th>
				<th width='40' id='dots_a_1'>Extra</th>
				<th width='40' id='dots_a_1'>Maiden</th>
			</tr>
		</table>
		<br>
	</div>
	
	<div id='scorecard_country_a_2'>
	<br>
		<table id='batting_table_a_2' align='center' border='0' cellspacing='0' cellpadding='0'>
			<tr id='table_head' >
				<th width='130' id='batsmen_a_2'>&nbsp &nbsp Batsmen</th>
				<th width='230' id='batting_table_comments_a_2'></th>
				<th width='45' id='runs_a_2'>Runs</th>
				<th width='50' id='balls_a_2'>Balls</th>
				<th width='60' id='sr_a_2'>SR</th>
				<th width='30' id='4s_a_2'>4s</th>
				<th width='30' id='6s_a_2'>6s</th>
			</tr>
		</table>
		<br>
		<table id='fow_table_a_2' align='center'  border='0' cellspacing='0' cellpadding='0'>
			<tr id='table_head' >
				<th width='540' align='left' >&nbsp &nbsp Fall of Wickets</th>
			</tr>
		</table>
		<br>
		<table id='bowling_table_a_2' align='center' border='0' cellspacing='0' cellpadding='0'>
			<tr id='table_head'>
				<th width='170' id='bowler_a_2'>&nbsp &nbsp Bowlers</th>
				<th width='52' id='o_a_2'>O</th>
				<th width='35' id='r_a_2'>R</th>
				<th width='30' id='w_a_2'>W</th>
				<th width='50' id='econ_a_2'>Econ</th>
				<th width='40' id='dots_a_2'>Extra</th>
				<th width='40' id='dots_a_2'>Maiden</th>
			</tr>
		</table>
		<br>
	</div>
	
	<div id='scorecard_country_b_1'>
	<br>
		<table id='batting_table_b_1' align='center' border='0' cellspacing='0' cellpadding='0'>
			<tr id='table_head'>
				<th width='130' id='batsmen_b_1'>&nbsp &nbsp Batsmen</th>
				<th width='230' id='batting_table_comments_b_1'></th>
				<th width='45' id='runs_b_1'>Runs</th>
				<th width='50' id='balls_b_1'>Balls</th>
				<th width='60' id='sr_b_1'>SR</th>
				<th width='30' id='4s_b_1'>4s</th>
				<th width='30' id='6s_b_1'>6s</th>
			</tr>
		</table>
		<br>
		<table id='fow_table_b_1' align='center' border='0' cellspacing='0' cellpadding='0'>
			<tr id='table_head' >
				<th width='540' align='left' >&nbsp &nbsp Fall of Wickets</th>
			</tr>
		</table>
		<br>
		<table id='bowling_table_b_1' align='center' border='0' cellspacing='0' cellpadding='0'>
			<tr id='table_head'>
				<th width='170' id='bowler_b_1'>&nbsp &nbsp Bowlers</th>
				<th width='52' id='o_b_1'>O</th>
				<th width='35' id='r_b_1'>R</th>
				<th width='30' id='w_b_1'>W</th>
				<th width='50' id='econ_b_1'>Econ</th>
				<th width='40' id='dots_b_1'>Extra</th>
				<th width='40' id='dots_b_1'>Maiden</th>
			</tr>
		</table>
		<br>
	</div>
	
	<div id='scorecard_country_b_2'>
	<br>
		<table id='batting_table_b_2' align='center' border='0' cellspacing='0' cellpadding='0'>
			<tr id='table_head'>
				<th width='130' id='batsmen_b_2'>&nbsp &nbsp Batsmen</th>
				<th width='230' id='batting_table_comments_b_2'></th>
				<th width='45' id='runs_b_2'>Runs</th>
				<th width='50' id='balls_b_2'>Balls</th>
				<th width='60' id='sr_b_2'>SR</th>
				<th width='30' id='4s_b_2'>4s</th>
				<th width='30' id='6s_b_2'>6s</th>
			</tr>
		</table>
		<br>
		<table id='fow_table_b_2' align='center' border='0' cellspacing='0' cellpadding='0'>
			<tr id='table_head' >
				<th width='540' align='left' >&nbsp &nbsp Fall of Wickets</th>
			</tr>
		</table>
		<br>
		<table id='bowling_table_b_2' align='center' border='0' cellspacing='0' cellpadding='0'>
			<tr id='table_head'>
				<th width='170' id='bowler_b_2'>&nbsp &nbsp Bowlers</th>
				<th width='52' id='o_b_2'>O</th>
				<th width='35' id='r_b_2'>R</th>
				<th width='30' id='w_b_2'>W</th>
				<th width='50' id='econ_b_2'>Econ</th>
				<th width='40' id='dots_b_2'>Extra</th>
				<th width='40' id='dots_b_2'>Maiden</th>
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