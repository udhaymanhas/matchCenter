function request_server_data()
{
	console.log("JS Started");
	var xmlhttp = new XMLHttpRequest();
	var url = document.getElementById('url').value;
	

	xmlhttp.onreadystatechange = function() 
	{
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
		{
			var data_array = JSON.parse(xmlhttp.responseText);
			empty_view_data();
			update_view_data(data_array);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

$(document).ready(function(){
// window.onload = start_js();
 start_js();
} );

 function start_js()
 {
	var match_format = document.getElementById('format').value;
	
	if(match_format == 'oneday')
	{	
		document.getElementById('innings_div').style.display='none';
	}
	request_server_data();
	setInterval(request_server_data,3000);
 }
 
function empty_view_data(data_array)
{
	var batting_table_a_length = document.getElementById("batting_table_a").rows.length;
	var fow_table_a_length = document.getElementById("fow_table_a").rows.length;
	var bowling_table_a_length = document.getElementById("bowling_table_a").rows.length;
	
	var batting_table_b_length = document.getElementById("batting_table_b").rows.length;
	var fow_table_b_length = document.getElementById("fow_table_b").rows.length;
	var bowling_table_b_length = document.getElementById("bowling_table_b").rows.length;
	
	delete_rows(batting_table_a_length,"batting_table_a");
	delete_rows(fow_table_a_length,"fow_table_a");
	delete_rows(bowling_table_a_length,"bowling_table_a");
	
	delete_rows(batting_table_b_length,"batting_table_b");
	delete_rows(fow_table_b_length,"fow_table_b");
	delete_rows(bowling_table_b_length,"bowling_table_b");
	
} 

function delete_rows(n,id)
{
	for(i=1;i<n;i++)
	{	
		document.getElementById(id).deleteRow(1);
	}
}

function update_view_data(data_array)
{
	var card = data_array['data']['card'];
	var players = card['players'];
	
	var title = card['title'].split("-");
    versus = title[0];
	
	country_a = card['teams']['a']['name'];
	country_b = card['teams']['b']['name'];
	
	start_date = card['start_date']['str'];
	venue = card['venue'];
	match_sub_details = venue+"<br>"+start_date;
	
	status = card['status'];
	if(status == "completed")
		match_status = card['msgs']['completed'];
	else if(status == "started")
		match_status = "LIVE";
	else if(status == "notstarted")
		match_status=card['short_name'];
	
	if(card['format'] == 'one-day')
		format = '1d';
	else
	if(card['format']=='test')
		format = 't';
	
	if(status != "notstarted")
	{
		c_a_i = card['innings']['a_1']; //country_a_innings
		c_b_i = card['innings']['b_1']; //country_b_innings
		
		if(format == 't')
		{
			c_a_i_2 = card['innings']['a_2'];
			c_b_i_2 = card['innings']['b_2'];
		}
		//c_a_score = c_a_i['runs']+"/"+c_a_i['wickets']+" ("+c_a_i['overs']+")";
		//c_b_score = c_b_i['runs']+"/"+c_b_i['wickets']+" ("+c_b_i['overs']+")";
		
		if(c_a_i['batting_order'] != null)
		{
			c_a_score = c_a_i['runs']+"/"+c_a_i['wickets']+" ("+c_a_i['overs']+")";
		for(i=1;i<=c_a_i['batting_order'].length;i++)
		{
			table = document.getElementById("batting_table_a");

			row = table.insertRow(i);
			if(i%2==0)
				row_color='#CCEBEB';
			else
				row_color='#ffffff';
			row.style.backgroundColor=row_color;
			
			var cell1 = row.insertCell(0);
				cell1.className="player_name";
			var cell2 = row.insertCell(1);
				cell2.className="out_str";
			var cell3 = row.insertCell(2);
				cell3.className="balls numbers";;
			var cell4 = row.insertCell(3);
				cell4.className="runs numbers";
			var cell5 = row.insertCell(4);
				cell5.className="strike_rate numbers";
			var cell6 = row.insertCell(5);
				cell6.className="fours numbers";
			var cell7 = row.insertCell(6);
				cell7.className="sixes numbers";
			
			player = players[c_a_i['batting_order'][i-1]]['name'];
			current="";
			if(c_a_i['batting_order'][i-1] == card['now']['striker'])
			{	
				current = " **";
				player = "<b>"+player+"</b>";
			}
			else
			if(c_a_i['batting_order'][i-1] == card['now']['nonstriker'])
			{	
				current = " *";
				player = "<b>"+player+"</b>";
			}
			out_str = players[c_a_i['batting_order'][i-1]]['match']['innings']['1']['batting']['out_str'];
			balls = players[c_a_i['batting_order'][i-1]]['match']['innings']['1']['batting']['balls'];
			runs = players[c_a_i['batting_order'][i-1]]['match']['innings']['1']['batting']['runs'];
			strike_rate = players[c_a_i['batting_order'][i-1]]['match']['innings']['1']['batting']['strike_rate'];
			fours = players[c_a_i['batting_order'][i-1]]['match']['innings']['1']['batting']['fours'];
			sixes = players[c_a_i['batting_order'][i-1]]['match']['innings']['1']['batting']['sixes'];
			
			if(out_str == null)
				out_str = '-';
			if(balls == null)
				balls = '-';
			if(runs == null)
				runs = '-';
			if(strike_rate == null)
				strike_rate = '-';
			if(fours == null)
				fours = '-';
			if(sixes == null)
				sixes = '-';
			
			if(current==" *")
				out_str = "Batting-NonStriker";
			else
			if(current==" **")
				out_str = "Batting-Striker";
			
			cell1.innerHTML = "&nbsp&nbsp"+player+current;			
			cell2.innerHTML = "<i>"+out_str+"</i>";			
			cell3.innerHTML = balls;
			cell4.innerHTML = runs;
			cell5.innerHTML = strike_rate;
			cell6.innerHTML = fours;
			cell7.innerHTML = sixes;
			
			
		}
		
		table = document.getElementById("batting_table_a");
		row = table.insertRow(i);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		cell4.colSpan= '4';
		cell4.style.fontSize= '12px';
		
		cell1.innerHTML="<b>Extras<b>";
		cell3.innerHTML="<b>"+c_a_i['extras']+"</b>";
		cell4.innerHTML="( <b>b</b> "+c_a_i['bye']+", <b>lb</b> "+c_a_i['legbye']+", <b>w</b> "+c_a_i['wide']+", <b>nb</b> "+c_a_i['noball']+")";
		
		row = table.insertRow(i+1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		cell4.colSpan= '4';
		cell4.style.fontSize= '12px';
		
		cell1.innerHTML="<b>Total</b>";
		cell3.innerHTML="<b>"+c_a_i['runs']+"</b>";
		cell4.innerHTML="( "+c_a_i['wickets']+" <b>wkts</b>, "+c_a_i['overs']+" <b>Ov</b> )";
		
		table = document.getElementById("fow_table_a");
		row = table.insertRow(1);
		var cell1 = row.insertCell(0);
		cell1.style.fontSize= '13px';
		fow_a = "";
		for(i=0;i<c_a_i['fall_of_wickets'].length;i++)
		{
			fow_a += " <b>(</b>"+c_a_i['fall_of_wickets'][i]+"<b>)</b>,";	
		}
		cell1.innerHTML=fow_a;
		}
		
		if(c_a_i['bowling_order'] != null)
		for(i=1;i<=c_a_i['bowling_order'].length;i++)
		{
			table = document.getElementById("bowling_table_a");

			row = table.insertRow(i);
			if(i%2==0)
				row_color='#CCEBEB';
			else
				row_color='#ffffff';
			row.style.backgroundColor=row_color;
			
			var cell1 = row.insertCell(0);
				cell1.className="player_names";
			var cell2 = row.insertCell(1);
				cell2.className="overs numbers";
			var cell3 = row.insertCell(2);
				cell3.className="runs numbers";
			var cell4 = row.insertCell(3);
				cell4.className="wickets numbers";
			var cell5 = row.insertCell(4);
				cell5.className="economy numbers";
			var cell6 = row.insertCell(5);
				cell6.className="extras numbers";
			var cell7 = row.insertCell(6);
				cell7.className="maiden_overs numbers";
			
			
			player = players[c_a_i['bowling_order'][i-1]]['name'];
			current="";
			if(c_a_i['bowling_order'][i-1] == card['now']['bowler'])
			{	
				current = " *";
				player = "<b>"+player+"</b>";
			}
			overs=players[c_a_i['bowling_order'][i-1]]['match']['innings']['1']['bowling']['overs'];
			runs=players[c_a_i['bowling_order'][i-1]]['match']['innings']['1']['bowling']['runs'];
			wickets=players[c_a_i['bowling_order'][i-1]]['match']['innings']['1']['bowling']['wickets'];
			economy=players[c_a_i['bowling_order'][i-1]]['match']['innings']['1']['bowling']['economy'];
			extras=players[c_a_i['bowling_order'][i-1]]['match']['innings']['1']['bowling']['extras'];
			maiden_overs=players[c_a_i['bowling_order'][i-1]]['match']['innings']['1']['bowling']['maiden_overs'];
			
			if(overs == null)
				overs = '-';
			if(runs == null)
				runs = '-';
			if(wickets == null)
				wickets = '-';
			if(economy == null)
				economy = '-';
			if(extras == null)
				extras = '-';
			if(maiden_overs == null)
				maiden_overs = '-';
			
			cell1.innerHTML = "&nbsp&nbsp"+player+current;
			cell2.innerHTML = overs;
			cell3.innerHTML = runs;
			cell4.innerHTML = wickets;
			cell5.innerHTML = economy;
			cell6.innerHTML = extras;
			cell7.innerHTML = maiden_overs;
		}
		
		if(c_b_i['batting_order'] != null)
		{
			c_b_score = c_b_i['runs']+"/"+c_b_i['wickets']+" ("+c_b_i['overs']+")";
		for(i=1;i<=c_b_i['batting_order'].length;i++)
		{
			table = document.getElementById("batting_table_b");

			row = table.insertRow(i);
			if(i%2==0)
				row_color='#CCEBEB';
			else
				row_color='#ffffff';
			row.style.backgroundColor=row_color;
			
			var cell1 = row.insertCell(0);
				cell1.className="player_name";
			var cell2 = row.insertCell(1);
				cell2.className="out_str";
			var cell3 = row.insertCell(2);
				cell3.className="balls numbers";
			var cell4 = row.insertCell(3);
				cell4.className="runs numbers";
			var cell5 = row.insertCell(4);
				cell5.className="strike_rate numbers";
			var cell6 = row.insertCell(5);
				cell6.className="fours numbers";
			var cell7 = row.insertCell(6);
				cell7.className="sixes numbers";
			
			
			player = players[c_b_i['batting_order'][i-1]]['name'];
			current="";
			if(c_b_i['batting_order'][i-1] == card['now']['striker'])
			{	
				current = " **";
				player = "<b>"+player+"</b>";
			}
			else
			if(c_b_i['batting_order'][i-1] == card['now']['nonstriker'])
			{	
				current = " *";
				player = "<b>"+player+"</b>";
			}
			out_str = players[c_b_i['batting_order'][i-1]]['match']['innings']['1']['batting']['out_str'];
			balls = players[c_b_i['batting_order'][i-1]]['match']['innings']['1']['batting']['balls'];
			runs = players[c_b_i['batting_order'][i-1]]['match']['innings']['1']['batting']['runs'];
			strike_rate = players[c_b_i['batting_order'][i-1]]['match']['innings']['1']['batting']['strike_rate'];
			fours = players[c_b_i['batting_order'][i-1]]['match']['innings']['1']['batting']['fours'];
			sixes = players[c_b_i['batting_order'][i-1]]['match']['innings']['1']['batting']['sixes'];
			
			if(out_str == null)
				out_str = '-';
			if(balls == null)
				balls = '-';
			if(runs == null)
				runs = '-';
			if(strike_rate == null)
				strike_rate = '-';
			if(fours == null)
				fours = '-';
			if(sixes == null)
				sixes = '-';
			
			if(current==" *")
				out_str = "Batting-NonStriker";
			else
			if(current==" **")
				out_str = "Batting-Striker";
			
			cell1.innerHTML = "&nbsp&nbsp"+player+current;
			cell2.innerHTML = "<i>"+out_str+"</i>";			
			cell3.innerHTML = balls;
			cell4.innerHTML = runs;
			cell5.innerHTML = strike_rate;
			cell6.innerHTML = fours;
			cell7.innerHTML = sixes;
		}
		
		table = document.getElementById("batting_table_b");
		row = table.insertRow(i);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		cell4.colSpan= '4';
		cell4.style.fontSize= '12px';
		
		cell1.innerHTML="<b>Extras</b>";
		cell3.innerHTML="<b>"+c_b_i['extras']+"</b>";
		cell4.innerHTML="( <b>b</b> "+c_b_i['bye']+", <b>lb</b> "+c_b_i['legbye']+", <b>w</b> "+c_b_i['wide']+", <b>nb</b> "+c_b_i['noball']+")";
		
		row = table.insertRow(i+1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		cell4.colSpan= '4';
		cell4.style.fontSize= '12px';
		cell1.innerHTML="<b>Total</b>";
		cell3.innerHTML="<b>"+c_b_i['runs']+"</b>";
		cell4.innerHTML="( "+c_b_i['wickets']+" <b>wkts</b>, "+c_b_i['overs']+" <b>Ov</b> )";
		}
		
		if(c_b_i['fall_of_wickets'] != null)
		{
		table = document.getElementById("fow_table_b");
		row = table.insertRow(1);
		var cell1 = row.insertCell(0);
		cell1.style.fontSize= '13px';
		fow_b = "";
		for(i=0;i<c_b_i['fall_of_wickets'].length;i++)
		{
			fow_b += " <b>(</b>"+c_b_i['fall_of_wickets'][i]+"<b>)</b>,";	
		}
		cell1.innerHTML=fow_b;
		}
		
		if(c_b_i['bowling_order'] != null)
		{
		for(i=1;i<=c_b_i['bowling_order'].length;i++)
		{
			table = document.getElementById("bowling_table_b");

			row = table.insertRow(i);
			if(i%2==0)
				row_color='#CCEBEB';
			else
				row_color='#ffffff';
			row.style.backgroundColor=row_color;
			
			var cell1 = row.insertCell(0);
				cell1.className="player_names";
			var cell2 = row.insertCell(1);
				cell2.className="overs numbers";
			var cell3 = row.insertCell(2);
				cell3.className="runs numbers";
			var cell4 = row.insertCell(3);
				cell4.className="wickets numbers";
			var cell5 = row.insertCell(4);
				cell5.className="economy numbers";
			var cell6 = row.insertCell(5);
				cell6.className="extras numbers";
			var cell7 = row.insertCell(6);
				cell7.className="maiden_overs numbers";
			
			player = players[c_b_i['bowling_order'][i-1]]['name'];
			current="";
			if(c_b_i['bowling_order'][i-1] == card['now']['bowler'])
			{	
				current = " *";
				player = "<b>"+player+"</b>";
			}
			overs=players[c_b_i['bowling_order'][i-1]]['match']['innings']['1']['bowling']['overs'];
			runs=players[c_b_i['bowling_order'][i-1]]['match']['innings']['1']['bowling']['runs'];
			wickets=players[c_b_i['bowling_order'][i-1]]['match']['innings']['1']['bowling']['wickets'];
			economy=players[c_b_i['bowling_order'][i-1]]['match']['innings']['1']['bowling']['economy'];
			extras=players[c_b_i['bowling_order'][i-1]]['match']['innings']['1']['bowling']['extras'];
			maiden_overs=players[c_b_i['bowling_order'][i-1]]['match']['innings']['1']['bowling']['maiden_overs'];
			
			if(overs == null)
				overs = '-';
			if(runs == null)
				runs = '-';
			if(wickets == null)
				wickets = '-';
			if(economy == null)
				economy = '-';
			if(extras == null)
				extras = '-';
			if(maiden_overs == null)
				maiden_overs = '-';
			
			cell1.innerHTML = "&nbsp&nbsp"+player;
			cell2.innerHTML = overs;
			cell3.innerHTML = runs;
			cell4.innerHTML = wickets;
			cell5.innerHTML = economy;
			cell6.innerHTML = extras;
			cell7.innerHTML = maiden_overs;
			
		}
		}
		
		document.getElementById('country_b_score').innerHTML=c_b_score;
		document.getElementById('country_a_score').innerHTML=c_a_score;
		
		document.getElementById('scorecard_country_a_head').innerHTML=country_a+"<br>"+c_a_score;
		document.getElementById('scorecard_country_b_head').innerHTML=country_b+"<br>"+c_b_score;
	}
	
	document.getElementById('match_number').innerHTML=card['related_name'];
	
	document.getElementById('country_a_name').innerHTML=country_a;
	
	document.getElementById('country_b_name').innerHTML=country_b;
	
	document.getElementById('match_sub_details').innerHTML=match_sub_details;
	document.getElementById('match_status').innerHTML=match_status;
	
	
	if(status == "started") //live card
	{
		current_batting = card['now']['batting_team']+"_"+card['now']['innings'];
		current_batting_run_str = card['innings'][current_batting]['run_str'];
		current_batting_short_name= card['teams'][card['now']['batting_team']]['short_name'];
		current_stat_playing = current_batting_short_name+" ("+current_batting_run_str+")"
		document.getElementById('current_stat_playing').innerHTML=current_stat_playing;
		
		current_bowling = card['now']['bowling_team']+"_"+card['now']['innings'];
		current_bowling_run_str = card['innings'][current_bowling]['run_str'];
		current_bowling_short_name= card['teams'][card['now']['bowling_team']]['short_name'];
		current_stat_played = current_bowling_short_name+" ("+current_bowling_run_str+")";
		if(current_bowling_run_str == null)
			current_stat_played = current_bowling_short_name;
		document.getElementById('current_stat_played').innerHTML=current_stat_played;
		
		on_pitch_striker_batting='';
		on_pitch_nonstriker_batting='';
		on_pitch_bowler_bowling='';
		
		innings = card['now']['innings'];
		
		striker = card['now']['striker'];
		if(striker == null)
		{	
			striker_name = "-";
			on_pitch_striker_batting = null;
		}
		else
		{	
			striker_name = card['players'][striker]['name'];
			on_pitch_striker_batting = card['players'][striker]['match']['innings'][innings]['batting'];
		}
		
		nonstriker = card['now']['nonstriker'];
		if(nonstriker == null)
		{	
			nonstriker_name = "-";
			on_pitch_nonstriker_batting = null;
		}
		else
		{	
			nonstriker_name = card['players'][nonstriker]['name'];
			on_pitch_nonstriker_batting = card['players'][nonstriker]['match']['innings'][innings]['batting'];
		}
		
		bowler = card['now']['bowler'];
		if(bowler == null)
		{	
			bowler_name = "-";
			on_pitch_bowler_bowling=null;
	}
	else
	{	
		bowler_name = card['players'][bowler]['name'];
		on_pitch_bowler_bowling = card['players'][bowler]['match']['innings'][innings]['bowling'];
	}
	
	
	
	
	
	
	if(on_pitch_striker_batting != null)
		on_pitch_striker_stat = "("+on_pitch_striker_batting['runs']+"("+on_pitch_striker_batting['balls']+"), "+on_pitch_striker_batting['strike_rate']+"<i>SR</i>, "+on_pitch_striker_batting['fours']+"<i> 4s</i>, "+on_pitch_striker_batting['sixes']+"<i> 6s</i>)";
	else
		on_pitch_striker_stat ="-";	
	
	if(on_pitch_nonstriker_batting != null)
		on_pitch_nonstriker_stat = "("+on_pitch_nonstriker_batting['runs']+"("+on_pitch_nonstriker_batting['balls']+"), "+on_pitch_nonstriker_batting['strike_rate']+"<i>SR</i>, "+on_pitch_nonstriker_batting['fours']+"<i> 4s</i>, "+on_pitch_nonstriker_batting['sixes']+"<i> 6s</i>)";
	else
		on_pitch_nonstriker_stat ="-";	
	
	if(on_pitch_bowler_bowling != null)
		on_pitch_bowler_stat = "("+on_pitch_bowler_bowling['overs']+"("+on_pitch_bowler_bowling['runs']+"), "+on_pitch_bowler_bowling['wickets']+"<i>wkt</i>, "+on_pitch_bowler_bowling['extras']+"<i>ext</i>, "+on_pitch_bowler_bowling['economy']+"<i>e</i>)";
	else
		on_pitch_bowler_stat ="-";	
	
	document.getElementById('on_pitch_striker').innerHTML=striker_name+" *";
	document.getElementById('on_pitch_nonstriker').innerHTML=nonstriker_name;
	document.getElementById('on_pitch_bowler').innerHTML=bowler_name;
	
	document.getElementById('on_pitch_striker_stat').innerHTML=on_pitch_striker_stat;
	document.getElementById('on_pitch_nonstriker_stat').innerHTML=on_pitch_nonstriker_stat;
	document.getElementById('on_pitch_bowler_stat').innerHTML=on_pitch_bowler_stat;
	}
	else
	{
		document.getElementById('current_details').style.display='none';
	}

} 























