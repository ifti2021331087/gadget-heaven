// components/Statistics/Statistics.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Statistics = () => {
    const [allGadgets, setAllGadgets] = useState([]);

    useEffect(() => {
        fetch('gadgetData.JSON')
            .then(res => res.json())
            .then(data => setAllGadgets(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const labels = allGadgets.map(gadget => gadget.name || 'Unknown');
    const dataset = allGadgets.map(gadget => parseFloat(gadget.price) || 0);
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Price',
                data: dataset,
                backgroundColor: '#a855f7',
                borderColor: '#a855f7',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                max: 120,
                ticks: {
                    stepSize: 20,
                },
            },
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 10,
                    usePointStyle: true,
                },
            },
        },
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4 text-center">Statistics</h2>
            <div className="h-80 max-w-2xl mx-auto my-20">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default Statistics;