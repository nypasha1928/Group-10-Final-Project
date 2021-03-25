function StrokevsAge() {

  // Name for the visualisation to appear in the menu bar.
  this.name = 'Stroke vs Age';

  // Each visualisation must have a unique ID with no special
  // characters.
  this.id = 'Stroke vs Age';

  // Title to display above the plot.
  this.title = 'Stroke based on Age';

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

    Plotly.d3.csv('data/Stroke_new_data.csv', function(err, rows){
          console.log(rows);
  

    
   // We need to convert it to array before we can pass it to Plotly.
   //  You can do that easily by using map method.
    var age_list= [];
    var stroke =[];
    age_list=rows.map(row => row.age);
    stroke=rows.map(row => row.stroke);
    console.log(age_list);
    //  for(let i =0; i<rows.length; i++)
              // data.push(rows.map(row => row [i].gender));
              // age_list=rows.map(row => row[i].age)
              // console.log(rows[i].age, rows[i].stroke);
              // console.log(age);
              // age.push(rows[i].age);
              // stroke.push(rows[i].stroke);
                  
            
   // Now we have the data in the correct format. 
   // The final step is to create the chart. 
    // Plotly.newPlot('chart',[{
    //   x:age_list,
    //   y:stroke,
    //   // z: age_list, stroke,
    //   type: 'bar',
    //   title: 'Stroke based on Age'
    //   // type: 'surface'
    // }]);

    var StrokevsAge = {
      x:age_list,
      y:stroke,

      type:'bar'
    };

    var layout = {
      title: "Stroke based on Age", 
      xaxis: {title: "Age"},
      yaxis: {title: "Count of Stroke"}
    }

    Plotly.newPlot('chart', [StrokevsAge], layout);

    });
  }
  this.destroy = function () {
    // Reset the canvas
    if (document.getElementsByClassName('p5Canvas')) {
      document.getElementsByClassName('p5Canvas')[0].style.display = 'block';
    }
  };  
}