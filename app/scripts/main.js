var tabs = ['.principal-menu', '.buttons'];
Array.prototype.forEach.call(tabs, function(tab){
  var menu = document.querySelectorAll(tab)[0],
    menuButton = menu.querySelector('.tab'),
    toggleMenu = function(e){
      e.preventDefault();
      if (menu.classList) {
        menu.classList.toggle('collapsed');
      } else {
        var classes = menu.className.split(' ');
        var existingIndex = classes.indexOf('collapsed');

        if (existingIndex >= 0)
          classes.splice(existingIndex, 1);
        else
          classes.push('collapsed');

        menu.className = classes.join(' ');
      }
    };
  menuButton.addEventListener('click', toggleMenu);
});



var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 19.414543,
            lng: -99.1528233
        },
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });
}
CollapsibleLists.apply();


var buttons = document.querySelectorAll('.buttons button'),
  rows = document.querySelectorAll('.buttons .row');
Array.prototype.forEach.call(buttons, function(button, i){
  button.addEventListener('click', function(e){
    e.preventDefault();
    Array.prototype.forEach.call(rows,function(row){
      if (row.classList){
        row.classList.remove('active');
      } else {
        row.className = row.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    });
    var currentRow = rows[i + 1];
    if(currentRow.classList){
      currentRow.classList.add('active');
    } else {
      currentRow.className += ' ' + 'active';
    }

  });
});


google.load('visualization', '1', {packages: ['corechart']});
function drawVisualization_edad() {
    var data = google.visualization.arrayToDataTable([
        ['PoblTotal', 'PEA'],
        ['15-17 años', 1070],
        ['18-24 años', 2321],
        ['25-29 años', 1419],
        ['30-49 años', 4783],
        ['50-59 años', 1378],
        ['60-69 años', 613],
    ]);

    // Create and draw the visualization.

    new google.visualization.PieChart(document.getElementById('age-container')).
    draw(data, {
        title: "Poblacion por edad",
    });
}
//Datos de la segunda grafica: por empleo
function drawVisualization_ocupacion() {
    var data = google.visualization.arrayToDataTable([
        ['PoblTotal', 'PEA'],
        ['Trabajadores', 7429],
        ['Jubilados', 378],
        ['Estudiantes', 1883],
        ['Amas de casa', 3379],
    ]);

    var options = {
        title: "Poblacion por ocupación",
    }
    new google.visualization.PieChart(document.getElementById('occupation-container')).
    draw(data, options);
}


//Datos de la tercer gráfica: por nivel socioeconómico
function drawVisualization_nivelSoc() {
    // Create and populate the data table.
    var data = google.visualization.arrayToDataTable(
        [
            ['Nivel SocioEconomico', ' '],
            ['e', 0],
            ['d', 0],
            ['d +', 0],
            ['c', 7279],
            ['c +', 4305],
            ['ab', 0],
        ]);
    var options = {
            title: "Poblacion por Nivel Socio-Económico",
            hAxis: {
                title: "Poblacion por Nivel Socio-Económico"
            },
            vAxis: {
                title: "Valor"
            }
        }
    // Create and draw the visualization.
    new google.visualization.ColumnChart(document.getElementById('socioeconomic-level-container')).
    draw(data, options);
}

google.setOnLoadCallback(drawVisualization_edad);
google.setOnLoadCallback(drawVisualization_ocupacion);
google.setOnLoadCallback(drawVisualization_nivelSoc);