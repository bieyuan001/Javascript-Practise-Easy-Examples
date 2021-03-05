$(document).ready(function() {
    chart01();
})

function chart01() {
    var myChart = echarts.init(document.getElementById('main'));
    var option = {
        title: {
            text: 'First Echart Simple'
        },
        tooltip: {},
        legend: {
            data: ['Sales', "Number"]
        },
        xAxis: {
            data: [1, 2, 3, 4, 5, 6]
        },
        yAxis: {},
        series: [{
            name: 'Sales',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }, {
            name: 'Number',
            type: 'bar',
            data: [6, 14, 14, 66, 44, 60]
        }]
    };
    myChart.setOption(option);
}