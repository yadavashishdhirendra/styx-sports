 // Chart 
        // Sample data
        const data = {
            labels: ['Win Bat First', 'Win Bowl First'],
            datasets: [{
                label: 'Runs',
                data: [12, 15],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
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
        // Chart
