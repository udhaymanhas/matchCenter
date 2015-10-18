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

window.onload = start_js();
 
 function start_js()
 {
	request_server_data();
	setInterval(request_server_data,10000);
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
	
	if(status != "notstarted")
	{
		c_a_i = card['innings']['a_1']; //country_a_innings
		c_b_i = card['innings']['b_1']; //country_b_innings
	
	
		c_a_score = c_a_i['runs']+"/"+c_a_i['wickets']+" ("+c_a_i['overs']+")";
		c_b_score = c_b_i['runs']+"/"+c_b_i['wickets']+" ("+c_b_i['overs']+")";
		
		for(i=1;i<=c_a_i['batting_order'].length;i++)
		{
			table = document.getElementById("batting_table_a");

			row = table.insertRow(i);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			var cell5 = row.insertCell(4);
			var cell6 = row.insertCell(5);
			var cell7 = row.insertCell(6);
			
			cell1.innerHTML = "&nbsp&nbsp"+players[c_a_i['batting_order'][i-1]]['name'];
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
		
		for(i=1;i<=c_a_i['bowling_order'].length;i++)
		{
			table = document.getElementById("bowling_table_a");

			row = table.insertRow(i);

			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			var cell5 = row.insertCell(4);
			var cell6 = row.insertCell(5);
			
			cell1.innerHTML = "&nbsp&nbsp"+players[c_a_i['bowling_order'][i-1]]['name'];
		}
		
		
		for(i=1;i<=c_b_i['batting_order'].length;i++)
		{
			table = document.getElementById("batting_table_b");

			row = table.insertRow(i);

			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell2 = row.insertCell(2);
			var cell2 = row.insertCell(3);
			var cell2 = row.insertCell(4);
			var cell2 = row.insertCell(5);
			var cell2 = row.insertCell(6);
			
			cell1.innerHTML = "&nbsp&nbsp"+players[c_b_i['batting_order'][i-1]]['name'];
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
		
		for(i=1;i<=c_b_i['bowling_order'].length;i++)
		{
			table = document.getElementById("bowling_table_b");

			row = table.insertRow(i);

			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			var cell5 = row.insertCell(4);
			var cell6 = row.insertCell(5);
			
			cell1.innerHTML = "&nbsp&nbsp"+players[c_b_i['bowling_order'][i-1]]['name'];
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
	
	
	
	
	//console.log("--->"+country_a);
	//console.log(data_array['data']['card']['related_name']);
} 























