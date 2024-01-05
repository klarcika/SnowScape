import React from 'react';
import { Image, Dimensions } from 'react-native';

interface LineChartProps {
  chartData: number[];
  labels: string[];
}

const LineChart: React.FC<LineChartProps> = ({ chartData, labels }) => {
  const screenWidth = Dimensions.get('window').width;
  const chartUrl = `https://quickchart.io/chart?c=${encodeURIComponent(
    JSON.stringify({
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            pointRadius: 5,
            borderWidth: 3,
            lineTension: 0.2,
            data: chartData,
            elements: {
              point: {
                radius: 0, // Set radius to 0 to hide default point
              },
            },
          },
        ],
      },
       
    })
  )}`;

  return <Image source={{ uri: chartUrl }} style={{ width: screenWidth, height: 300 }} />;
};

export default LineChart;
