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
                    data: [658, 651, 680, 420, 140, 56, 0, 0, 49, 478, 636, 797]
                },
                {
                    type: 'line',
                    label: '2022',
                    data: [779, 613, 612, 473, 219, 0, 5, 14, 257, 359, 553, 692]
                },
                {
                    type: 'line',
                    label: '2021',
                    data: [792, 836, 652, 432, 223, 0, 0, 44, 284, 340, 538, 830]
                },
                {
                    type: 'bar',
                    label: '2021',
                    data: [1642.75, 1707.29, 1334.6, 828.33, 669.02, 461.6, 472.98, 701.07, 903.5, 1073.8, 1418.74, 2118.6]
                },
                {
                    type: 'bar',
                    label: '2022',
                    data: [ 2082.41, 1729.2, 1745.06, 1207.9, 1204.16, 644.35, 814.69, 521.5, 817.15, 1087.95, 1653.13, 1940.21]
                },
                {
                    type: 'bar',
                    label: '2023',
                    data: [ 1961.78, 1669.09, 1939.49, 1454.63, 1079, 915.87, 698.27, 915.42, 849.57, 1277.34, 1753.11, 2022.54]
                },]
            }
        }
    )
}
}
