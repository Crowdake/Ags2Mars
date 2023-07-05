google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);

<script src="js/filtro.js"></script>

function drawChart() {

  var data = google.visualization.arrayToDataTable([
	['Label', 'Value'],
	['Co2', 400],
  ]);

  var options = {
	width: 500, height: 250,
	max: 8200, min:401,
	greenFrom: 400, greenTo:3000,
	yellowFrom: 3000, yellowTo: 6000,
	redFrom:6000, redTo: 8200,
	minorTicks: 5
  };

  var chart = new google.visualization.Gauge(document.getElementById('dio'));

  chart.draw(data, options);

  setInterval(function() {
	data.setValue(diovalor);
	chart.draw(data, options); 

	/*const query = `http://192.168.4.1/control?var=${el.srcElement.id}&val=${value}`;
	console.log("query =>" + query);
	
	fetch(query).then(response => {
	  console.log(
		`request to ${query} finished, status: ${response.status}`
	  );
	});*/





  }, 1300);

}