google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);

<script src="js/filtro.js"></script>

function drawChart() {

  var data = google.visualization.arrayToDataTable([
	['Label', 'Value'],
	['Humedad', 80],
  ]);

  var options = {
	width: 500, height: 250,
	max: 100, min:0,
	greenFrom: 25, greenTo:50,
	redFrom: 80, redTo: 100,
	yellowFrom:50, yellowTo: 80,
	minorTicks: 5
  };

  var chart = new google.visualization.Gauge(document.getElementById('Humedad'));

  chart.draw(data, options);

  setInterval(function() {
	data.setValue(humedadvalor);
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