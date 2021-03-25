function StrokevsSmokingStatus() {

  // Name for the visualisation to appear in the menu bar.
  this.name = 'Stroke based on Smoking Status';

  // Each visualisation must have a unique ID with no special
  // characters.
  this.id = 'Stroke based on Smoking Status';



  // Property to represent data has been loaded.
  this.loaded = false;

  this.layout = {
  width: 600,
  height: 500,
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
  

    
   // We need to convert it to array before we can pass it to Plotly.
   //  You can do that easily by using map method.
    var smoking_status = [];
    var stroke =[];
    smoking_status=rows.map(row => row.smoking_status);
    stroke=rows.map(row => row.stroke);
    console.log(smoking_status);
 

    var StrokeSmoke = {
      x:smoking_status,
      y:stroke,

      type:'bar'
    };
    var layout = {
      
      title: {text :'Being a smoker or a formerly smoker <br> increases your risk of having a stroke', font:{size:14}},
      // subtitle:{text :'Smoking Status a formerly smoker increases your risk of having a stroke'},
      // text:"Being a smoker or a formerly smoker increases your risk of having a stroke"
      xaxis: {title: "Smoking Status"},
      yaxis: {title: "Count"}    
    };
    Plotly.newPlot('chart', [StrokeSmoke], layout);

    });
  }
  this.destroy = function () {
    // Reset the canvas
    if (document.getElementsByClassName('p5Canvas')) {
      document.getElementsByClassName('p5Canvas')[0].style.display = 'block';
    }
  };  
}
