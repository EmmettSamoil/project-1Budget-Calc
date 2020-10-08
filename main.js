//Notes 
//FIRGURE OUT MONEXP
//EzFunction lib not working

// Load google charts
google.charts.load('current', {
  'packages': ['corechart']
});

let salary;
let monSal;
//Event listeners
document.getElementById('calc').addEventListener('click', calcFunc);
document.getElementById('anIncome').addEventListener('keyup', monthSal)

//Show monthly salary
function monthSal () {
  salary = document.getElementById('anIncome').value;
  monSal = salary / 12 ;
document.getElementById('salParg').innerHTML = 'Every month you earn ' + monSal.toFixed(2) + '$';
}

//Calculate Montly expendtures
function monthExp (){
  let monExp = 0;
  if (document.getElementById('housing').value > 0){
    monExp + parseInt(document.getElementById('housing').value);
  }
  console.log(monExp)
}

function getElNum(id) {
  parseInt(document.getElementById(id).value);
}

// Draw the chart and set the chart values
function calcFunc() {
  // let h1 = parseInt(document.getElementById('housing').value);
  let h1 = getElNum('housing');
  let f1 = parseInt(document.getElementById('food').value);
  let e1 = parseInt(document.getElementById('electricity').value);
  let h2 = parseInt(document.getElementById('heating').value);
  let w1 = parseInt(document.getElementById('water').value);
  let e2 = parseInt(document.getElementById('entertainment').value);
  let addCost = parseInt(document.getElementById('addCost').value)
  let addExp = document.getElementById('addExpenseName').value;
  salary = document.getElementById('anIncome').value;
  monSal = salary / 12 ;
  let monExp = h1 + f1 + e1 + h2 + w1 + e2 + addCost;
  // monthExp();
  let savings = (monSal - monExp);
  
  var data = google.visualization.arrayToDataTable([
    ['Expenses', 'Cost'],
    ['Housing', h1],
    ['Food', f1],
    ['Electricity', e1],
    ['Heating', h2],
    ['Water', w1],
    ['Entertainment', e2],
    [addExp, addCost]
  ]);

  console.log(h1);

  // Optional; add a title and set the width and height of the chart
  var options = {
    'title': 'Monthly Budget Manager',
    'width': 1050,
    'height': 800,
  };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);

  // Output Parg 
 document.getElementById('outputParg').innerHTML = 'Every month you spend '+ monExp.toFixed(2) + '$ and save ' + savings.toFixed(2) + '$';
}