const ctx = document.getElementById('chart');
let chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'Tabela',
            backgroundColor: [
                'rgb(220,1,1)',
                'rgb(255,91,0)',
                'rgb(253,209,35)',
                'rgb(193,255,0)',
                'rgb(92,255,0)',
                'rgb(36,96,0)',
                'rgb(0,255,128)',
                'rgb(0,255,225)',
                'rgb(0,34,255)',
                'rgb(85,0,255)',
                'rgb(208,0,255)',
                'rgb(115,115,115)',
            ],
            borderColor: 'rgb(0,0,0)',
            data: [12, 19, 3, 5, 2, 3, 5, 2, 4, 10, 20, 14],
            borderWidth: 1
        }]
    },
    options: {
        animation: {
            duration: 5000,
            easing: 'easeOutBounce',
        },
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20
            }
        },
        legend: {
            display: true,
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Tabelinha',
            fontSize: 20
        },
        tooltip: {
            enabled: true,
            intersect: true,
            backgroundColor: 'rgba(0,0,0,0.21)'
        },
        scales: {
            xAxes: [{
                gridLine: {
                    display: false,
                    drawBorder: false
                },
                position: 'bottom',
            }],
            yAxes: [{
                gridLine: {
                    display: true,
                    drawBorder: false
                }
            }]
        }
    }
});


const addData = () => {
    let sizeData = chart.data.datasets[0].data.length
    chart.data.datasets[0].data[sizeData] = Math.random() * 100
    chart.data.labels[sizeData] = 'Novo mês Adicionado ${sizeData + 1}'
    chart.update()
}
const removeData = () => {
    chart.data.datasets[0].data.pop()
    chart.data.labels.pop()
    chart.update()
}
