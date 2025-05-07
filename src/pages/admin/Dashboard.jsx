import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  BarElement,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import DashboardMap from './DashboardMap';

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  BarElement,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const [lineData, setLineData] = useState({
    labels: ['जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून'],
    datasets: [
      {
        label: 'मासिक वोट',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgb(126, 34, 206)',
        tension: 0.4,
      },
    ],
  });

  const [barData, setBarData] = useState({
    labels: ['युवा', 'महिला', 'वरिष्ठ'],
    datasets: [
      {
        label: 'वोटर्स',
        data: [12, 19, 3],
        backgroundColor: ['#4F46E5', '#EC4899', '#10B981'],
      },
    ],
  });

  const [supportData] = useState({
    labels: ['कार्य करता', 'समर्थक', 'नहीं हुआ'],
    datasets: [
      {
        label: 'स्थिति',
        data: [50, 30, 20],
        backgroundColor: ['#22C55E', '#3B82F6', '#EF4444'], 
        hoverOffset: 4,
      },
    ],
  });

  const stats = [
    { label: 'कुल वोटर', value: 38300 },
    { label: 'स्थायी वोटर', value: 28700 },
    { label: 'कुल समर्थक', value: 20000 },
    { label: 'कुल जिम्मेदार', value: 10 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
     
      const newLineData = [...lineData.datasets[0].data];
      newLineData.shift();
      newLineData.push(Math.floor(Math.random() * 100));

      setLineData((prev) => ({
        ...prev,
        datasets: [
          {
            ...prev.datasets[0],
            data: newLineData,
          },
        ],
      }));

      const newBarData = barData.datasets[0].data.map(() =>
        Math.floor(Math.random() * 50)
      );

      setBarData((prev) => ({
        ...prev,
        datasets: [
          {
            ...prev.datasets[0],
            data: newBarData,
          },
        ],
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, [lineData, barData]);

  return (
    <div className="p-6  min-h-screen">
    
      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
  {stats.map((item, index) => (
    <div
      key={index}
      className="bg-white rounded-xl shadow-md p-6 text-center border border-purple-300 hover:shadow-lg transition duration-300"
    >
      <h2 className="text-xl font-semibold text-gray-800">
        {item.label}
      </h2>
      <p className="mt-2 text-3xl font-bold text-green-600">
        {item.value.toLocaleString()}
      </p>
    </div>
  ))}
</div>


      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Line Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-purple-700 mb-4">
            मासिक वोट ट्रेंड
          </h2>
          <div className="h-64">
            <Line
              data={lineData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false },
                },
              }}
            />
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-purple-700 mb-4">
            वोटर डेमोग्राफिक
          </h2>
          <div className="h-64">
            <Bar
              data={barData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false },
                },
              }}
            />
          </div>
        </div>

        
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-purple-700 mb-4">
            समर्थन विश्लेषण
          </h2>
          <div className="h-96 mx-auto max-w-2xl">
            <Doughnut
              data={supportData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { position: 'bottom' },
                  tooltip: {
                    callbacks: {
                      label: function (context) {
                        const total = context.dataset.data.reduce(
                          (sum, val) => sum + val,
                          0
                        );
                        const value = context.raw;
                        const percentage = ((value / total) * 100).toFixed(1);
                        return `${context.label}: ${percentage}%`;
                      },
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
      <DashboardMap />
    </div>
  );
}
