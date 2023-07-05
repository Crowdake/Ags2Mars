google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);

<script src="js/filtro.js"></script>

function drawChart() {

  var data = google.visualization.arrayToDataTable([
	['Label', 'Value'],
	['Presion', 8000],
  ]);

  var options = {
	width: 500, height: 250,
	max: 10000, min:0,
	greenFrom: 000, greenTo:6000,
	redFrom:8000, redTo: 10000,
	yellowFrom:6000, yellowTo: 8000,
	minorTicks: 5
  };

  var chart = new google.visualization.Gauge(document.getElementById('Presion'));

  chart.draw(data, options);

  setInterval(function() {
	data.setValue(presionvalor);
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