// Load google charts
google.charts.load('current', {
  'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

//Event listeners
document.getElementById('calc').addEventListener('click', drawChart);
let h1 = document.getElementById('housing').value;
let f1 = document.getElementById('food').value;
let e1 = document.getElementById('electricity').value;
let h2 = document.getElementById('heating').value;
let w1 = document.getElementById('water').value;
let e2 = document.getElementById('entertainment').value;


// Draw the chart and set the chart values
function drawChart(h1, f1, e1, h2, w1, e2) {
  /*var data = google.visualization.arrayToDataTable([
  ['Expenses', 'Cost'],
  ['Housing', h1],
  ['Food', f1],
  ['Electricity', e1],
  ['Heating', h2],
  ['Water', w1],
  ['Entertainment', e2]
]);*/

console.log(h1, f1, e1, h2, w1, e2)

  // Optional; add a title and set the width and height of the chart
  /*var options = {'title':'Monthly Budget Manager', 'width':1050, 'height':800,};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);*/
}

// function newExpense() {
//    arrayToDataTable.push({
//     Expenses: document.getElementById('addExpenseName').value,
//     Cost: document.getElementById('addCost').value
//   })
//   console.log(google.visualization.arrayToDataTable)
// }