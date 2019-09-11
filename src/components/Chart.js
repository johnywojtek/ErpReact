import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

export default class Chart extends Component {
    render() {
        const options = {
            maintainAspectRatio: false,
            legend: {
                display: false,
                labels: {
                    display: false
                }
            },
            scales: {
                yAxes: [
                    {
                        display: false,
                        ticks: {
                            beginAtZero: true,
                            fontSize: 10,
                            max: 80
                        }
                    }
                ],
                xAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                            fontSize: 11,
                            fontFamily: 'Arial'
                        }
                    }
                ]
            }
        };

        const data = canvas => {
            const ctx = canvas.getContext('2d');
            var gradient = ctx.createLinearGradient(0, 240, 0, 0);
            gradient.addColorStop(0, 'rgba(0,123,255,0)');
            gradient.addColorStop(1, 'rgba(0,123,255,.3)');
            return {
                labels: [
                    'Oct 1',
                    'Oct 2',
                    'Oct 3',
                    'Oct 4',
                    'Oct 5',
                    'Oct 6',
                    'Oct 7',
                    'Oct 8',
                    'Oct 9',
                    'Oct 10'
                ],
                datasets: [
                    {
                        data: [12, 15, 18, 40, 35, 38, 32, 20, 25, 50],
                        borderColor: '#007bff',
                        borderWidth: 1,
                        backgroundColor: gradient
                    }
                ]
            };
        };

        return <Line data={data} options={options} />;
    }
}
