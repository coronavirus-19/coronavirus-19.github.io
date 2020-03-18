function makeChart(cases) {

  var date = cases.map(function(d) {
    return d.date;
  });
  var china = cases.map(function(d) {
    return +d.China;
  });
  var italy = cases.map(function(d) {
    return +d.Italy;
  });
  var unitedStates = cases.map(function(d) {
    return d['United States'];
  });
  var southKorea = cases.map(function(d) {
    return d['South Korea'];
  });
  var iran = cases.map(function(d) {
    return d.Iran;
  });

  var chart = new Chart('chart', {
    type: "line",
    data: {
      labels: date,
      datasets: [
        {
          label: 'Italy',
          data: italy,
          borderColor: "#3e95cd",
          fill: false
        },
        {
          label: 'China',
          data: china,
          borderColor: "#8e5ea2",
          fill: false
        },
        {
          label: 'United States',
          data: unitedStates,
          borderColor: "#3cba9f",
          fill: false
        },
        {
          label: 'South Korea',
          data: southKorea,
          borderColor: "#e8c3b9",
          fill: false
        },
        {
          label: 'Iran',
          data: iran,
          borderColor: "#c45850",
          fill: false
        }
      ]
    }
  });
}

// Request data using D3
d3.csv("https://covid.ourworldindata.org/data/total_cases.csv").then(makeChart);