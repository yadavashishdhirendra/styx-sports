// Sample data
const data = {
    labels: ['All', '1s x 7', '2s x 3', '3s x 0', '4s x 1', '5s x 0', '6s x 1',],
    datasets: [{
        label: 'Runs',
        data: [12, 15, 5, 4, 10, 16, 19],
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            '#12372A',
            "#637A9F",
            "#474F7A",
            "#FFA447"
        ],
        borderWidth: 1
    }]
};

// Chart configuration
const config = {
    type: 'pie',
    data: data,
    options: {
        plugins: {
            legend: {
                labels: {
                    font: {
                        family: 'Saira_SemiBold', // Font family for legend labels
                    }
                }
            }
        },
        hover: {
            onHover: function (event, elements) {
                if (elements.length) {
                    const chart = this;
                    chart.legend.legendItems.forEach((item, index) => {
                        if (index === elements[0].index) {
                            item.textFont = {
                                family: 'Saira_SemiBold' // Font family for hover labels
                            };
                        } else {
                            item.textFont = {
                                family: 'Saira_SemiBold' // Font family for non-hover labels
                            };
                        }
                    });
                    chart.legend.update();
                }
            }
        }
    }
};

// Render the chart
var myChart = new Chart(
    document.getElementById('myChart'),
    config
);

var myChart = new Chart(
    document.getElementById('myChart1'),
    config
)

let totalRuns = data.datasets[0].data.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById('totalRuns').textContent = totalRuns;
document.getElementById('totalRuns1').textContent = totalRuns;
