// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    let metadata = data.metadata;
    let result = metadata.find(sampleObj => sampleObj.id == sample);
    let panel = d3.select("#sample-metadata");
    panel.html("");  // Clear old data

    Object.entries(result).forEach(([key, value]) => {
      panel.append("h6").text(`${key}: ${value}`);
    });
  });
}

      


// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let samples = data.samples;
    let result = samples.find(sampleObj => sampleObj.id == sample);
    // Filter the samples for the object with the desired sample number


    // Get the otu_ids, otu_labels, and sample_values
let otu_ids = result.otu_ids;
let otu_labels = result.otu_labels;
let sample_values = result.sample_values;

    // Build a Bubble Chart
let bubbleData = [{
  x: otu_ids,
  y: sample_values,
  text: otu_labels,
  mode: "markers",
  marker: {
    size: sample_values,
    color: otu_ids,
    colorscale: "Earth"
  }
}];

    // Render the Bubble Chart
let bubbleLayout = {
  title: "bacteria Cultures Per Sample",
  xaxis: { title: "OTU ID" },
  hovermode: "closest"
};

Plotly.newPlot("bubble", bubbleData, bubbleLayout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
let yticks = otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse();
let barData = [{
  x: sample_values.slice(0, 10).reverse(),
  y: yticks,
  text: otu_labels.slice(0, 10).reverse(),
  type: "bar",
  orientation: "h"
}];


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
let barLayout = {
  title: "Top 10 Bacteria Cultures Found",
  xaxis: { title: "Sample Values" }
};

    // Render the Bar Chart
Plotly.newPlot("bar", barData, barLayout);
  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    let sampleNames = data.names;
    let dropdown = d3.select("#selDataset");

    sampleNames.forEach((sample) => {
      dropdown.append("option").text(sample).property("value", sample);
    });

    let firstSample = sampleNames[0];
    buildMetadata(firstSample);
    buildCharts(firstSample);
  });
}


// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
    buildMetadata(newSample);
    buildCharts(newSample);
  }
  
// Initialize the dashboard
init();
