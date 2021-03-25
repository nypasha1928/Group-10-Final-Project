function StrokevsAvgGL() {
  // Name for the visualisation to appear in the menu bar.
  this.name = 'Stroke vs (Age , avg_glucose_level)';

  // Each visualisation must have a unique ID with no special
  // characters.
  this.id = 'Stroke vs (Age , avg_glucose_level)';

  // Title to display above the plot.
  this.title = 'UK Household: Average food and drink purchased per person per week.';

  // Names for each axis.
  this.xAxisLabel = 'year';
  this.yAxisLabel = 'Units  g / ml';

  this.colors = [];

  var marginSize = 35;

  // Layout object to store all common plot layout parameters and
  // methods.
  this.layout = {
    marginSize: marginSize,

    
  
    // Layout object to store all common plot layout parameters and
    // methods.
    // this.layout = {
    //   marginSize: marginSize,
  
      // Locations of margin positions. Left and bottom have double margin
      // size due to axis and tick labels.
      leftMargin: marginSize * 2,
      rightMargin: width - marginSize,
      topMargin: marginSize,
      bottomMargin: height - marginSize * 2,
      pad: 5,
  
      plotWidth: function () {
        return this.rightMargin - this.leftMargin;
      },
  
      plotHeight: function () {
        return this.bottomMargin - this.topMargin;
      },
  
      // Boolean to enable/disable background grid.
      grid: true,
  
      // Number of axis tick labels to draw so that they are not drawn on
      // top of one another.
      numXTickLabels: 10,
      numYTickLabels: 8,
    };
  
  
    // Property to represent data has been loaded.
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
  
      Plotly.d3.csv('data/Stroke_selected_new_data.csv', function(err, rows){
            console.log(rows);
    
  
      
     // We need to convert it to array before we can pass it to Plotly.
     //  You can do that easily by using map method.
      var age_list= [];
      var agl =[];
      var gender = [];
      var stroke =[];
  
      age_list=rows.map(row => row.age);
      agl =rows.map(row => row.avg_glucose_level);
      gender =rows.map(row => row.gender);
      stroke=rows.map(row => row.stroke);
      console.log(age_list);
      
         // 1. Create the trace for the bubble chart.
         var bubbleData = [{
          x: age_list,
          y: agl,
          text: (stroke),
          mode: "markers",
          marker: {
            size: agl,
            color: agl,
            colorscale:"Portland"
          }
    
        }]; 
        
        // 2. Create the layout for the bubble chart.
        var bubbleLayout = {
          title: "No stroke = 0 <br> stroke = 1 <br> Avg of Glucose level is high among old people.",
          xaxis: {title:"Age"},
          yaxis: {title:"avg_glucose_level"},
          // showlegend:true,
          margin: {
            l: 100,
            r: 50,
            t: 100,
            b: 80
          },
          // hovermode='x'
        };
  
        
    
        // 3. Use Plotly to plot the data with the layout.
        Plotly.newPlot("chart", bubbleData, bubbleLayout);
  
      });
    }
    this.destroy = function () {
      // Reset the canvas
      if (document.getElementsByClassName('p5Canvas')) {
        document.getElementsByClassName('p5Canvas')[0].style.display = 'block';
      }
    };  
}
