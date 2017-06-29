import $ from 'jquery';
import Chart from 'chart.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/readable/bootstrap.min.css';
import './main.css';

$(document).ready(() => {
    console.log('it works!');
    /* let monChart;
    $('.progress').replaceWith('<canvas id="graf" width="50px" height="50px"></canvas>');
    let ctx = $('#graf');
    monChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [6, 4],
                backgroundColor: [
                    'rgba(0, 222, 0, 0.2)',
                    'rgba(0, 0, 222, 0.2)'
                ],
                borderColor: [
                    'rgba(222,0,0,1)',
                    'rgba(222,0,0,1)'
                ],
                borderWidth: 1
            }]
        },
        options: Chart.defaults.doughnut
    });
    ctx = monChart; */
    /* let ctx = $('.progress');
    ctx.each(function (index) {
        $('.progress-bar').each(function (index) {
            let val = index.attr('aria-valuenow');
            ctx.replaceWith(val);
        });
    }); */
    // Recherche des éléments avec la class progress
    let listProg = document.getElementsByClassName('progress');
    // Extraction des infos de la progress bar
    function extractDataFromProgressBar (progress) {
        const bar = progress.children[0];
        const val = bar.getAttribute('aria-valuenow') * 10;
        return val;
    }
    // Création des canvas
    function createCanvas () {
        const monCanvas = $('<canvas class="canvas"></canvas>');
        return monCanvas;
    }
    // Dessine le chart de remplacement des progress bar
    function drawChart (val, canvas) {
        let ctx = $('.canvas');
        const monChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Savoir', 'Inconnu'],
                datasets: [{
                    data: [val, (100 - val)],
                    backgroundColor: [
                        '#2196F3',
                        '#E3F2FD'
                    ],
                    borderColor: [
                        '#0D47A1',
                        '#0D47A1'
                    ],
                    borderWidth: 1
                }]
            },
            options: Chart.defaults.doughnut
        });
        return monChart;
    }
    // Parcours de la liste des progress bar et fais les transformations
    function transformPage () {
        for (let progress of listProg) {
            const val = extractDataFromProgressBar(progress);
            const monCanvas = createCanvas();
            const monChart = drawChart(val, monCanvas);
            progress.replaceWith($(monChart));
        }
    }
    transformPage();
});
