import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarGraph = ({ monthlyEarnings }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current && monthlyEarnings) {
      if (chartInstance.current) {
        // Destroy previous chart instance
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');

      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: Object.keys(monthlyEarnings),
          datasets: [{
            label: 'Monthly Earnings',
            data: Object.values(monthlyEarnings),
            backgroundColor: 'rgba(238, 201, 239, 0.35)', // Blue color with transparency
            borderColor: 'rgba(238, 201, 239, 0.35)', // Blue color
            borderWidth: 0,
            borderRadius: 10 // Border radius for bars
          }]
        },
        options: {
          scales: {
            y: {
              display: false // hide y-axis
            },
            x: {
                grid: {
                  color: 'white' // Change x-axis gridline color to white
                }
              }
          
          },
          plugins: {
            legend: {
              display: false // hide legend
            }
          },
        //   indexAxis: 'x', // Display bars vertically
        //   layout: {
        //     padding: {
        //       left: 100 // Adjust left padding as needed to accommodate the labels
        //     }
        //   },
          elements: {
            bar: {
              borderRadius: 10 // Border radius for bars
            }
          }
        }
      });
    }

    // Cleanup
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [monthlyEarnings]);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default BarGraph;
