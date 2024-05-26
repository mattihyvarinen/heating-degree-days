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
                    label: '2023',
                    data: [658, 651, 680, 420, 140, 56, 0, 0, 49, 478, 636, 797]
                },
            {
                label: '2022',
                data: [779, 613, 612, 473, 219, 0, 5, 14, 257, 359, 553, 692]
            },
        {
            label: '2021',
            data: [792, 836, 652, 432, 223, 0, 0, 44, 284, 340, 538, 830]
        }]
            }
        }
    )
}
}
