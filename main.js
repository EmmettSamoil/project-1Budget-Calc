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

//Calculate Montly expendetures
function monthExp (){
  let monExp = 0;
  if (getElNum('housing') > 0){
    monExp += getElNum('housing');
  } 
  if (getElNum('food') > 0) {
    monExp += getElNum('food');
  }
  if (getElNum('electricity') > 0) {
    monExp += getElNum('electricity');
  }
  if (getElNum('heating') > 0) {
    monExp += getElNum('heating');
  }
  if (getElNum('water') > 0){
    monExp += getElNum('water');
  }
  if (getElNum('entertainment') > 0){
    monExp += getElNum('entertainment');
  }
  if (getElNum('addCost') > 0){
    monExp += getElNum('addCost');
  }
  console.log(monExp);
  return monExp
}


// Draw the chart and set the chart values
function calcFunc() {
  // let h1 = parseInt(document.getElementById('housing').value);
  let h1 = getElNum('housing');
  let f1 = getElNum('food');
  let e1 = getElNum('electricity');
  let h2 = getElNum('heating');
  let w1 = getElNum('water');
  let e2 = getElNum('entertainment');
  let addCost = getElNum('addCost');
  let addExp = getEl('addExpenseName');
  salary = getEl('anIncome');
  monSal = salary / 12 ;
  // let monExp = h1 + f1 + e1 + h2 + w1 + e2 + addCost;
  let monExp = monthExp();
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