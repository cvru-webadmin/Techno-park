import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const AnsweredNotAnsweredGraph = ({ answered, notAnswered }) => {
  // Chart data
  const data = {
    labels: ['Answered', 'Not Answered'],
    datasets: [
      {
        data: [answered, notAnswered],
        backgroundColor: ['#4F46E5', '#F87171'], // Blue for answered, coral for not answered
        hoverBackgroundColor: ['#4338CA', '#EF4444'], // Darker shades for hover
        borderWidth: 1, // Fine border for neatness
        cutout: '70%', // Thin rings
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        backgroundColor: '#1F2937', // Tooltip dark gray for contrast
        titleColor: '#FFFFFF',
        bodyColor: '#D1D5DB',
        cornerRadius: 3,
      },
      legend: {
        display: false, // Hide default legend
      },
    },
  };

  return (
    <div className="max-w-sm w-full mb-5 bg-white rounded-lg shadow-md p-4 md:p-6">
      <div className="flex justify-between mb-4">
        <h5 className="text-xl font-semibold text-center w-full text-gray-600">
          Answered vs Not Answered
        </h5>
      </div>

      <div className="relative w-full flex justify-center h-36 mb-5">
        <Doughnut data={data} options={options} />
      </div>

      <div className="grid grid-cols-2 gap-4 items-center border-t border-gray-200 pt-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
          <span className="text-sm font-medium text-gray-700">Answered</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
          <span className="text-sm font-medium text-gray-700">Not Answered</span>
        </div>
      </div>
    </div>
  );
};

export default AnsweredNotAnsweredGraph;
