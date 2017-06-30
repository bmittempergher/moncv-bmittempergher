import $ from 'jquery';
import Chart from 'chart.js';
import 'jquery-colorbox';
import 'jquery-colorbox/jquery.colorbox-min.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/readable/bootstrap.min.css';
import './main.css';

$(document).ready(() => {
    // Appel de la fonction pour afficher des chart au lieu des progress-bar
    transformPage();
    // Crée une gallerie avec les photos de class gallery
    $('a.gallery').colorbox({
        opacity: 0.7,
        rel: 'group1',
        previous: '<button class="btn btn-primary"><span class="glyphicon glyphicon-backward"></span></button>',
        next: '<button class="btn btn-primary"><span class="glyphicon glyphicon-forward"></span></button>',
        close: '<button class="btn btn-primary"><span class="glyphicon glyphicon-remove-circle"></span></button>',
        maxWidth: '80%',
        maxHeight: '80%',
        scalePhotos: true,
        current: function () {
            var url = $(this).attr('href');
            return '<a href="' + url + '"  class="btn  btn-primary" target="_blank"><span class="glyphicon glyphicon-comment"></span></a>';
        }});
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
