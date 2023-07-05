google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);

<script src="js/filtro.js"></script>

function drawChart() {

  var data = google.visualization.arrayToDataTable([
	['Label', 'Value'],
	['tVOC', 80],
  ]);

  var options = {
	width: 500, height: 250,
	max: 1200, min:0,
	greenFrom:1000, greenTo:1200,
	yellowFrom:600, yellowTo: 1000,
	redFrom:0, redTo:600,
	minorTicks: 5
  };

  var chart = new google.visualization.Gauge(document.getElementById('tVOC'));

  chart.draw(data, options);

  setInterval(function() {
	data.setValue(tVOCvalor);
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