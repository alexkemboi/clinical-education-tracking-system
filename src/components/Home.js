import React from "react";
function Home(){


    var options = {
        series: [{
          name: "Success",
          data: [80]
        },
        {
          name: "Failure",
          data: [20]
        }],
        chart: {
          height: 350,
          type: 'bar',
          stacked: true,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        xaxis: {
          categories: ['Success Rate'],
        },
        legend: {
          position: 'top',
        },
        fill: {
          opacity: 1
        }
      };
    
      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
      return(
<>
</>
      );
}
export default Home;