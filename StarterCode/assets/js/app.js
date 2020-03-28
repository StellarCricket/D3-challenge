var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;
var svg = d3.select(".chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);


  d3.csv("data.csv").then(function(smokersData){
      smokersData.forEach(function(data){
          data.smokersAge = +data.age;
          data.numSmokers = +data.smokes;
      });

    var xLineraScale = d3.scaleLinear()
      .domain([0, d3.max(smokersData, d => d.smokersAge )])
      .range([height,0]);

    var bottomAxis = d3.axisBottom(xlinearScale);
    var leftAxis = d3.axisLeft(ylinearScale);
    





  });