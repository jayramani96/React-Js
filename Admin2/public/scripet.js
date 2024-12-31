$(document).ready(function(){
    $(".a").click(function(){
        $(this).next(".aa").slideToggle()
        $(this).find(".i").toggleClass("fa-angle-down fa-angle-up")
    })

    $("#bar").click(function(){
        $(".left").toggleClass("hide")
    })
    $("#bar").click(function(){
        $(".right").toggleClass("w")
    })
    

    var options = {
        series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
        chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
      };
    
      var chart = new ApexCharts(document.querySelector("#chart1"), options);
      chart.render();
     var options = {
              series: [44, 55, 41, 17, 15],
              chart: {
              type: 'donut',
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 298
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
            };
             
            var options = {
              series: [44, 55, 41, 17, 15],
              chart: {
              type: 'donut',
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 180
                },
                legend: {
                  position: 'top'
                }
              }
            }]
            };
    
            var chart = new ApexCharts(document.querySelector("#chart2"), options);
            chart.render();
          
    
            // var chart = new ApexCharts(document.querySelector("#chart2"), options);
            // chart.render();
    
    
            //   var swiper = new Swiper(".mySwiper", {
            //     // autoplay: true,
            //     pagination: {
            //       el: ".swiper-pagination",
            //     },
            //   });

            

})      
    
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth'
    });
    calendar.render();
  });

