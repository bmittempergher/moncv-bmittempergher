import $ from 'jquery';
import Chart from 'chart.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/readable/bootstrap.min.css';
import './main.css';

$(document).ready(() => {
    console.log('it works!');
    let monChart;
    let ctx = document.getElementsByClassName("progress");
    monChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)'
                ],
                borderWidth: 1
            }]
        },
        options: Chart.defaults.doughnut
    }
    );
});
