function StrokevsGender() {

  // Name for the visualisation to appear in the menu bar.
  this.name = 'Stroke vs Gender';

  // Each visualisation must have a unique ID with no special
  // characters.
  this.id = 'Stroke vs Gender';

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
  

    
   // We need to convert it to array before we can pass it to Plotly.
   //  You can do that easily by using map method.
    var gender= [];
    var stroke =[];
    gender=rows.map(row => row.gender);
    stroke=rows.map(row => row.stroke);
    console.log(gender);
    // var colors = {'Female': 'SandyBrown', 'Male':'Brown'};
    // var Brown = 'rgb(165, 42, 42)';
    // var SandyBrown = 'rgb(244, 164,96)';

    var StrokeGender = {
      x:gender,
      y:stroke,
    
      marker:{
        color: 'SandyBrown',
        colorscale:"Portland"
      },
      
      type:'bar'
    };

    var layout = {
      title: "Stroke based on Age", 
      xaxis: {title: "Gender"},
      yaxis: {title: "Count of Stroke"},
      
      
    }

    Plotly.newPlot('chart', [StrokeGender], layout);

    });
  }
  this.destroy = function () {
    // Reset the canvas
    if (document.getElementsByClassName('p5Canvas')) {
      document.getElementsByClassName('p5Canvas')[0].style.display = 'block';
    }
  };  
 }