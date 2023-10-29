google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['City', '2023',],
        ['Minggu 1', 8175000],
        ['Minggu 2', 3792000],
        ['Minggu 3', 2695000],
        ['Minggu 4', 2099000],
        ['Bulan Ini', 1526000]
      ]);

      var options = {
        title: 'Stastika Destinasi Kolam Renang',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Total',
          minValue: 0
        },
        vAxis: {
          title: 'City'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }