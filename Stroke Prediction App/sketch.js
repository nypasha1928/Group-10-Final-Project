// Global variable to store the gallery object. The gallery object is
// a container for all the visualisations.
var gallery;

function setup() {
  // Create a canvas to fill the content div from index.html.
  var c = createCanvas(1024, 576);
  c.parent('app');

  // Create a new gallery object.
  gallery = new Gallery();

  // Add the visualisation objects here.
  gallery.addVisual(new StrokePredication());
  gallery.addVisual(new StrokevsAge());
  gallery.addVisual(new StrokevsSmokingStatus());
  gallery.addVisual(new StrokevsAgeBmi());
  gallery.addVisual(new StrokevsAvgGL());
  gallery.addVisual(new StrokevsGender());
  gallery.addVisual(new StrokevsHeartDisease());
  gallery.addVisual(new StrokevsHypertension());
  
  gallery.addVisual(new StrokevsResidencetype());
  gallery.addVisual(new USEarthQuakeMap());
}

function draw() {
  background(255);
  if (gallery.selectedVisual && gallery.selectedVisual.draw) {
    gallery.selectedVisual.draw();
  }
}
