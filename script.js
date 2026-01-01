const hamburgermenu = document.getElementById("hamburgermenu");
const smallScreenMenu = document.querySelector(".smallScreenMenu");
const x = document.getElementById("x");

hamburgermenu.addEventListener("click", () => {
  smallScreenMenu.style.display = "flex";
});

x.addEventListener("click", () => {
  smallScreenMenu.style.display = "none";
});

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Month", "Revenue"],
    ["Jan", 250000],
    ["Feb", 500000],
    ["Mar", 750000],
    ["Apr", 1100000],
    ["May", 1450000],
    ["Jun", 1876580],
  ]);

  var options = {
    legend: "none",
    hAxis: {
      textPosition: "out",
      baselineColor: "transparent",
      gridlines: { color: "transparent" },
    },
    vAxis: {
      textPosition: "none",
      baselineColor: "transparent",
      gridlines: { color: "transparent" },
    },
    backgroundColor: "white",
    areaOpacity: 0.1,
    curveType: "function",
    lineWidth: 2,
    colors: ["#63b2b0"],
  };

  var chart = new google.visualization.AreaChart(
    document.getElementById("curve_chart")
  );
  chart.draw(data, options);
}
window.addEventListener("resize", drawChart);
