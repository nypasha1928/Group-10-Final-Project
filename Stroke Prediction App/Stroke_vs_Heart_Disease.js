function StrokevsHeartDisease() {

  // Name for the visualisation to appear in the menu bar.
  this.name = 'Stroke vs Heart Disease';

  // Each visualisation must have a unique ID with no special
  // characters.
  this.id = 'Stroke vs Heart Disease';

  // Property to represent whether data has been loaded.
  this.loaded = false;

 

  this.layout = {
  width: 800,
  height: 700,
  };

  this.setup = function () {
    var width = this.layout.width;
    var height = this.layout.height;
    var g, active = d3.select(null);;
    // const zoom = d3.zoom()
    //   .scaleExtent([1, 8])
    //   .on("zoom", zoomed);

    // Hide original p5 canvas and show the covid-19 map
    if (document.getElementsByClassName('p5Canvas')) {
      document.getElementsByClassName('p5Canvas')[0].style.display = 'none';
    }
    this.chart = createDiv();
    this.chart.style('width', width + 'px');
    this.chart.style('height', height + 'px');
    this.chart.id('chart');
    this.chart.parent('app');

    Plotly.d3.csv('data/Stroke_new_data.csv', function(err, rows){
          console.log(rows);

  
    var xValue = ['Heart_Disease <br> Stroke', 'Heart_Disease <br> NO Stroke'];
    var yValue = ['5.08%', '94.92%'];
    var textList = [28550, 1428];

    var trace = {
      x: xValue,
      y: yValue,
      type: 'bar',
      textposition: 'auto',
      text : yValue.map(String),
      hoverinfo: ['5.08%', '94.92%'],
      marker: {
        color : ['Brown', 'SandyBrown']
      },

      // orientation: 'h'
    };

    var data = [ trace];
    
    var layout = {
      title: 'Most People who have had a stroke had no heart disease <br> but that does not prevent it being influential factor',
      size : 14,
      barmode : 'stack',
      yaxis: {title: "Percentage  of  Stroke"}
    };


    
 
    Plotly.newPlot('chart', data, layout);

    });
  }
  this.destroy = function () {
    // Reset the canvas
    if (document.getElementsByClassName('p5Canvas')) {
      document.getElementsByClassName('p5Canvas')[0].style.display = 'block';
    }
  };  
}

   // var No_Heart_Disease = 0;
    // var Heart_Disease = 1;
    
    // //  Base
    // var xData = ['Heart_Disease <br> Stroke', 'Heart_Disease <br> NO Stroke'];
    // var yData = [28550, 1428];
    // var textList = ['5.08%', '94.92%'];

    // // Base ( Heart_Disease_Stroke)
    // var Heart_Disease_Stroke = {
    //   x: xData,
    //   y: [0, 28550],

    //   marker:{
    //     color: 'Brown',
    //   },
    //   type:'bar'
    // };

    // //  Base (Hear_Disease_NO_Stroke)
    // var Hear_Disease_NO_Stroke ={
    //   x: xData,
    //   y: [1428, 0],

    //   marker: {
    //     color:'SandyBrown',
    //     // line: {
    //     //   color: 'green',
    //     //   width: 2
    //     // }
    //   },
    //   type:'bar'
    // }

    // var data = [Heart_Disease_Stroke, Hear_Disease_NO_Stroke];

    // var layout = {
    //   title: 'Stroke based on Age',
    //   barmode: 'stack',
    //   paper_bgcolor: 'rgba(245,246,249,1)',
    //   plot_bgcolor: 'rgba(245,246,249,1)',
    //   width: 800,
    //   height: 700,
    //   // showlegend: false,
    //   annotations: []
    // };

    // for (var i =0; i < 10;i++) {
    //   var result = {
    //     x: xData[i],
    //     y: yData[i],
    //     text: textList[i],
    //     font: {
    //       family :'Arial',
    //       size:14,
    //       color: 'rgba(245,246,249,1)'
    //     },
    //     //  shawarrow: false
    //   };
    //   layout.annotations.push(result);
    // };
    
   // We need to convert it to array before we can pass it to Plotly.
   //  You can do that easily by using map method.
    // var heart_disease= [];
    // var stroke =[];
    // heart_disease=rows.map(row => row.heart_disease);
    // stroke=rows.map(row => row.stroke);
    // console.log(heart_disease);
    // // var colors = {'Female': 'SandyBrown', 'Male':'Brown'};
    // // var Brown = 'rgb(165, 42, 42)';
    // // var SandyBrown = 'rgb(244, 164,96)';

    // var StrokeGender = {
    //   x:stroke,
    //   y:heart_disease,

    //   orientation: 'h',
    
    //   marker:{
    //     color: 'SandyBrown',
    //     colorscale:"Portland"
    //   },
      
    //   type:'bar'
    // };

    // var layout = {
    //   title: "Stroke based on Age", 
    //   xaxis: {title: "Heart Disease"},
    //   yaxis: {title: "Count of Stroke"},
      
      
    // }

