function StrokevsResidencetype() {
  // Name for the visualisation to appear in the menu bar.
  this.name = 'Stroke vs Residence Type';

  // Each visualisation must have a unique ID with no special
  // characters.
  this.id = 'Stroke vs Residence Type';

  
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
  
    
      var xValue = ['Rural', 'Urban'];
      var yValue = ['15,215', '30,555'];
      // var textList = [28550, 1428];
  
      var trace = {
        x: xValue,
        y: yValue,
        type: 'bar',
        textposition: 'auto',
        text : yValue.map(String),
        hoverinfo: ['15,215', '30,555'],
        marker: {
          
          color : ['Thistle', '#7c4d79']
        },
  
        // orientation: 'h'
      };
  
      var data = [ trace];
      
      var layout = {
        title: 'Stroke vs Residence type',
        size : 14,
        barmode : 'stack',
        xaxis: {title: 'Residence Type'},
        yaxis: {title: "Count  of  Stroke"}
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
