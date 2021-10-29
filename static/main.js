// console.log("Hola mundo")
var dates={
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(73, 198, 230, 0.5)',
            ],
            borderWidth: 1
        }]
    },
    options: {}
}





const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx,dates);

////////////////** */
var socket= new WebSocket('ws://localhost:8000/ws/graph/')
console.log("alalalalalalal")

socket.onmessage=function(e){
    var djangoData=JSON.parse(e.data);
    console.log(djangoData)






    var mygraph=dates.data.datasets[0].data;
    mygraph.shift();
    mygraph.push(djangoData.value)

    dates.data.datasets[0].data=mygraph;
    myChart.update()



    // document.querySelector('#app').innerText=djangoData.value;
}