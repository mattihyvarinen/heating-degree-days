import { Component } from '@angular/core';
import Chart from 'chart.js/auto'

@Component({
    selector: 'app-graph',
    standalone: true,
    imports: [],
    template: `
    <div class="chart-container">
    <canvas id="graph-component"></canvas>
    </div>
    `
})

export class GraphComponent {
    ngOnInit(): void {
        new Chart("graph-component", {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [{
                    type: 'line',
                    label: '2023',
                    data: [(793/658)*1961.78, (724/651)*1669.09, (651/680)*1939.49, (446/420)*1454.63, (206/140)*1079, (34/56)*915.87, (10/0)*698.27, (32/0)*915.42, (188/49)*849.57, (416/478)*1277.34, (557/636)*1753.11, (698/797)*2022.54]
                },
                {
                    type: 'line',
                    label: '2022',
                    data: [(793/779)*2082.41, (724/613)*1729.2, (651/612)*1745.06, (446/473)*1207.9, (206/219)*1204.16, (34/0)*644.35, (10/5)*814.69, (32/14)*521.5, (188/257)*817.15, (416/359)*1087.95, (557/553)*1653.13, (698/692)*1940.21]
                },
                {
                    type: 'line',
                    label: '2021',
                    data: [(793/792)*1642.75, (724/836)*1707.29, (651/652)*1334.6, (446/432)*828.33, (206/223)*669.02, (34/0)*461.6, (10/0)*472.98, (32/44)*701.07, (188/284)*903.5, (416/340)*1073.8, (557/538)*1418.74, (698/830)*2118.6]
                }]
            }
        }
    )
}
}
