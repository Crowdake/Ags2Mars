var gaugeHum = new RadialGauge({
  renderTo: 'humedad',
  width: 275,
  height: 275,
  units: "Humedad R%",
  barWidth: 20,
  colorBar: "rgba(52, 47, 162, 0.5)",
  colorBarProgress: "#342FA2",
  minValue: 0,
  maxValue: 100,
  majorTicks: [
      "0",
      "20",
      "40",
      "60",
      "80",
      "100"
  ],
  minorTicks: 2,
  strokeTicks: true,
  highlights: [
      {
          "from": 160,
          "to": 220,
          "color": "#222"
      }
  ],
  
  ticksAngle: 225,
  startAngle: 67.5,
  //colores
  colorMajorTicks: "#ddd",
  colorMinorTicks: "#ddd",
  colorTitle: "#fff",
  colorValueText: "fff",
  colorUnits: "#ccc",
  colorNumbers: "#eee",
  colorPlate: "#222",
  colorNeedle: "rgb(89, 233, 231, 0.8)",
  colorNeedleEnd: "rgb(23, 138, 173, 0.9)",
  colorValueBoxBackground: "#fff",
  borderShadowWidth: 0,
  colorValueBoxRect: "rgba(52, 47, 162)",
  colorValueBoxRectEnd: "#fff",
  borders: false,
  needleType: "line",
  needleWidth: 1,
  needleCircleSize: 3,
  needleCircleOuter: true,
  needleCircleInner: false,
  animationDuration: 1500,
  animationRule: "linear",
  needleStart: 10,
  animatedValue: false,
  
  borderOuterWidth: 1,
  borderInnerWidth: 1,
  borders: true
}).draw();

  var gaugeTemp = new RadialGauge({
      renderTo: 'temperatura',
      width: 275,
      height: 275,
      units: "Temperatura °C",
      minValue: 0,
      maxValue: 100,
      majorTicks: [
          
          
          "0",
          "20",
          "40",
          "60",
          "80",
          "100"
      ],
      minorTicks: 2,
      strokeTicks: true,
      highlights: [
          {
              "from": 0,
              "to": 20,
              "color": "#fff"
          },
          {
              "from": 20,
              "to": 40,
              "color": "rgb(245, 255, 77)"
              
          },
          {
              "from": 40,
              "to": 60,
              "color": "rgb(255, 193, 77)"
          },
          {
              "from": 60,
              "to": 100,
              "color": "rgb(229, 0, 0)"
          },
          {
              "from": 0,
              "to": 100,
              "color": "rgb(34, 32, 0, 0.4)"
          }
          
      ],
      
      colorMajorTicks: "#ddd",
  colorMinorTicks: "#ddd",
  colorTitle: "#fff",
  colorValueText: "fff",
  colorUnits: "#ccc",
  colorNumbers: "#eee",
  colorPlate: "#222",
  colorValueBoxRect: "rgba(52, 47, 162)",
  colorValueBoxRectEnd: "#fff",
  colorNeedle: "rgb(204, 237, 241)",
  colorNeedleEnd: "rgb(204, 237, 241)",
  colorValueBoxBackground: "#fff",
      borderShadowWidth: 0,
      borders: false,
      needleType: "lineal",
      needleWidth: 1,
      needleStart: 10,
      needleCircleSize: 3,
      needleCircleOuter: true,
      needleCircleInner: false,
      animationDuration: 1000,
      animationRule: "linear",
      borderOuterWidth: 1,
      borderInnerWidth: 1,
      borders: true
  }).draw();
  
  var gaugePre = new RadialGauge({
      renderTo: 'presion',
      width: 275,
      height: 275,
      units: "Presión Pa",
      barWidth: 20,
      colorBar: "rgba(69, 242, 241, 0.5)",
      colorBarProgress: "#45F2F1",
      minValue: 0,
      maxValue: 100000,
      majorTicks: [
          "0",
          "25000",
          
          "50000",
          "75000",
          "100000"
      ],
      minorTicks: 2,
      strokeTicks: true,
      highlights: [
          {
              "from": 80000,
              "to": 100000,
              "color": "#222"
          }
      ],
      
      ticksAngle: 225,
      startAngle: 67.5,
      //colores
      colorMajorTicks: "#ddd",
      colorMinorTicks: "#ddd",
      colorTitle: "#fff",
      colorValueText: "fff",
      colorUnits: "#ccc",
      colorNumbers: "#eee",
      colorPlate: "#222",
      colorNeedle: "rgb(89, 233, 231, 0.8)",
      colorNeedleEnd: "rgb(23, 138, 173, 0.9)",
      colorValueBoxBackground: "#fff",
      borderShadowWidth: 0,
      colorValueBoxRect: "rgba(52, 47, 162)",
      colorValueBoxRectEnd: "#fff",
      borders: false,
      needleType: "line",
      needleWidth: 1,
      needleCircleSize: 3,
      needleCircleOuter: true,
      needleCircleInner: false,
      animationDuration: 1500,
      animationRule: "linear",
      needleStart: 10,
      animatedValue: false,
      
      borderOuterWidth: 1,
      borderInnerWidth: 1,
      borders: true
  }).draw();

  var gaugeCO2 = new RadialGauge({
      renderTo: 'co2',
      width: 275,
      height: 275,
      units: "Co2",
      barWidth: 20,
      colorBar: "rgba(118, 201, 49, 0.5)",
      colorBarProgress: "#6AB52B",
      minValue: 400,
      maxValue: 8200,
      majorTicks: [
          "400",
          "2300",
          "4200",
          "6100",
          "8000"
      ],
      minorTicks: 10,
      strokeTicks: true,
      highlights: [
          {
              "from": 0,
              "to": 0,
              "color": "#222"
          }
      ],
      
      ticksAngle: 225,
      startAngle: 67.5,
      //colores
      colorMajorTicks: "#478D91",
      colorMinorTicks: "#478D91",
      colorTitle: "#478D91",
      colorValueText: "fff",
      colorUnits: "#478D91",
      colorNumbers: "#478D91",
      colorPlate: "#A1DAE3",
      colorNeedle: "rgb(33, 221, 61, 0.8)",
      colorNeedleEnd: "rgb(0, 168, 25, 0.9)",
      colorValueBoxBackground: "#fff",
      borderShadowWidth: 0,
      colorValueText: "#A1DAE3",
      colorValueBoxRect: "rgba(255, 255, 255)",
      colorValueBoxRectEnd: "#478D91",
      colorValueBoxBackground: "#478D91",
      borders: false,
      needleType: "line",
      needleWidth: 1,
      needleCircleSize: 3,
      needleCircleOuter: true,
      needleCircleInner: false,
      animationDuration: 1500,
      animationRule: "linear",
      needleStart: 10,
      animatedValue: false,
      
      borderOuterWidth: 1,
      borderInnerWidth: 1,
      borders: true,
      colorBorderOuter: "#478D91",
      colorBorderMiddle: "#478D91",
      colorBorderInner: "#478D91",
      colorBorderOuterEnd: "#478D91",
      colorBorderMiddleEnd: "#478D91",
      colorBorderInnerEnd: "#478D91",
      
  }).draw();

  var gaugeTVOC = new RadialGauge({
      renderTo: 'tvoc',
      width: 275,
      height: 275,
      units: "tVOC",
      
      minValue: 0,
      maxValue: 1200,
      majorTicks: [
          "0",
          "200",
          "400",
          "600",
          "800",
          "1000",
          "1200"
      ],
      minorTicks: 2,
      strokeTicks: true,
      highlights: [
          {
              "from": 0,
              "to": 200,
              "color": "#15FF00"
          },
          {
              "from": 200,
              "to": 400,
              "color": "#F0FF00"
          },
          {
              "from": 400,
              "to": 800,
              "color": "#FFBD00"
          },
          {
              "from": 800,
              "to": 1200,
              "color": "#FF0000"
          },
          {
              "from": 0,
              "to": 1200,
              "color": "rgb(113, 113, 113, 0.2)"
          }
      ],
      
      ticksAngle: 225,
      startAngle: 67.5,
      //colores
      colorMajorTicks: "#478D91",
      colorMinorTicks: "#478D91",
      colorTitle: "#478D91",
      colorValueText: "fff",
      colorUnits: "#478D91",
      colorNumbers: "#478D91",
      colorPlate: "#A1DAE3",
      colorNeedle: "rgb(33, 221, 61, 0.8)",
      colorNeedleEnd: "rgb(0, 168, 25, 0.9)",
      colorValueBoxBackground: "#fff",
      borderShadowWidth: 0,
      colorValueText: "#A1DAE3",
      colorValueBoxRect: "rgba(255, 255, 255)",
      colorValueBoxRectEnd: "#478D91",
      colorValueBoxBackground: "#478D91",
      borders: false,
      needleType: "line",
      needleWidth: 1,
      needleCircleSize: 3,
      needleCircleOuter: true,
      needleCircleInner: false,
      animationDuration: 1500,
      animationRule: "linear",
      needleStart: 10,
      animatedValue: false,
      
      borderOuterWidth: 1,
      borderInnerWidth: 1,
      borders: true,
      colorBorderOuter: "#478D91",
      colorBorderMiddle: "#478D91",
      colorBorderInner: "#478D91",
      colorBorderOuterEnd: "#478D91",
      colorBorderMiddleEnd: "#478D91",
      colorBorderInnerEnd: "#478D91",
      
  }).draw();

  var gaugeBru = new RadialGauge({
      renderTo: 'brujula',
          width: 275,
          height: 275,
          minValue: 0,
          maxValue: 360,
          majorTicks: ["N","NE","E","SE","S","SW","W","NW","N"],
          minorTicks: 5,
          ticksAngle: 360,
          startAngle: 180,
          strokeTicks: false,
          highlights: false,
          colorPlate: "rgb(218, 109, 18, 0.8)",
          colorMajorTicks: "#000",
          colorMinorTicks: "#000",
          colorNumbers: "#F0EFFA",
          colorNeedle: "rgba(123, 0, 0)",
          colorNeedleEnd: "#FFBD57",
          valueBox: false,
          valueTextShadow: false,
          colorCircleInner: "#fff",
          colorNeedleCircleOuter: "#ccc",
          needleCircleSize: 5,
          needleCircleOuter: false,
          animationRule: "linear",
          needleType: "line",
          needleStart: 75,
          needleEnd: 99,
          needleWidth: 3,
          borders: true,
          borderInnerWidth: 0,
          borderMiddleWidth: 0,
          borderOuterWidth: 5,
          colorBorderOuter: "#fff",
          colorBorderOuterEnd: "#fff",
          borderShadowWidth: 0,
          animationTarget: "plate",
          units: "",
          title: "BRÚJULA",
          fontTitleSize: 19,
          colorTitle: "#f5f5f5",
          animationDuration: 1500,
          value: 0,
          animateOnInit: true
  }).draw();

window.addEventListener("load", function(){
setInterval(() => {
        

        
            // gaugeTemp.value = datos.temp *
            //     (gaugeTemp.options.maxValue - gaugeTemp.options.minValue) +
            //     gaugeTemp.options.minValue;
        

        
            // gaugePre.value = datos.presion() *
            //     (gaugePre.options.maxValue - gaugePre.options.minValue) +
            //     gaugePre.options.minValue;
        
        
            // gaugeCO2.value = datos.co2 *
            //     (gaugeCO2.options.maxValue - gaugeCO2.options.minValue) +
            //     gaugeCO2.options.minValue;
        
        
            // gaugeBru.value = datosFiltrados() *
            //     (gaugeBru.options.maxValue - gaugeBru.options.minValue) +
            //     gaugeBru.options.minValue;


  setTimeout(() => {
    // GET -> Example
   let data = axios.get("http://localhost:3000/data")
   .then(function (response) {
     let datosFiltrados = response.data.data.replace(/(<([^>]+)>)/ig,"").split(",");
      let datos = {
        humedad: datosFiltrados[0].trim(),
        presion: datosFiltrados[1].trim(),
        temp: datosFiltrados[2].trim(),
        co2: datosFiltrados[3].trim(),
        tvoc: datosFiltrados[4].trim(),
        ax: datosFiltrados[5].trim(),
        ay: datosFiltrados[6].trim(),
        az: datosFiltrados[7].trim(),
        gx: datosFiltrados[8].trim(),
        gy: datosFiltrados[9].trim(),
        gz: datosFiltrados[10].trim(),
        mx: datosFiltrados[11].trim(),
        my: datosFiltrados[12].trim(),
        mz: datosFiltrados[13].trim(),
      }
      console.log(datos);
      gaugeTemp.value = datos.temp;
      gaugePre.value = datos.presion;
      gaugeCO2.value = datos.co2;
      gaugeTVOC.value = datos.tvoc;
      gaugeHum.value = datos.humedad;
    // GET -> Example

    if (gaugeTVOC.value >= 800){
        alert("Esto es una alarma")
      }
    if (gaugeTemp.value >= 45){       
        alert("Esto es una alarma")
      }
    if (gaugeHum.value >= 60){
        alert("Esto es una alarma")
      }

    if (gaugePre.value >= 101300){ 
        alert("Esto es una alarma")
      }
      if (gaugePre.value <= 60000){ 
        alert("Esto es una alarma")
      }
    

      return datos;
   })
   .catch(function (error) {
     console.log(error);
   });
 
  }, 10);
}, 2000);
})





   







