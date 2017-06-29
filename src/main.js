import $ from 'jquery';
import Chart from 'chart.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/readable/bootstrap.min.css';
import './main.css';
import 'jquery-gmaps';

$(document).ready(() => {
    // Appel de la fonction pour afficher des chart au lieu des progress-bar
    transformPage();
    $('#map').gmaps();
});

// Recherche des éléments avec la class progress
let listProg = $('.progress');
// Extraction des infos de la progress bar
function extractDataFromProgressBar (progress) {
    const bar = progress.children[0];
    const val = bar.getAttribute('aria-valuenow') * 10;
    return val;
}
// Dessine le chart de remplacement des progress bar
function drawChart (val, nbID) {
    let conID = 'Canvas_' + nbID;
    let c = $('#' + conID + '');
    let ctx = c;
    const monChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Acquis', 'Non-acquis'],
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
        options: {
            legend: {
                display: false
            }
        }
    });
    return monChart;
}
// Parcours de la liste des progress bar et fais les transformations
function transformPage () {
    let indexFor = 0;
    for (let progress of $(listProg)) {
        indexFor++;
        const val = extractDataFromProgressBar(progress);
        const monCanvas = $('<canvas id="Canvas_' + indexFor + '"></canvas>');
        $(progress).replaceWith($(monCanvas));
        drawChart(val, indexFor);
    }
}
