import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../components/FundraisingStats.css";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Aman() {
  const [dateFilter, setDateFilter] = useState("last7days");
  const [simulationAmount, setSimulationAmount] = useState(1000);
  const [estimatedReturn, setEstimatedReturn] = useState(0);

  const lineChartData = {
    labels:
      dateFilter === "last7days"
        ? ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"]
        : ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8"],
    datasets: [
      {
        label: "Funds Raised (USD)",
        data:
          dateFilter === "last7days"
            ? [1000, 2000, 3500, 5000, 6500, 8000, 10000]
            : [7000, 14000, 21000, 28000, 35000, 42000, 49000, 56000],
        borderColor: "#243B55",
        backgroundColor: "rgba(36, 59, 85, 0.3)",
        tension: 0.4,
        fill: true,
        borderWidth: 3,
        pointBorderColor: "#243B55",
        pointBackgroundColor: "#fff",
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#fff",
          font: { size: 14, weight: "bold" },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        titleColor: "#fff",
        bodyColor: "#ddd",
        borderColor: "#243B55",
        borderWidth: 2,
        callbacks: {
          label: (context) => `$${context.raw.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#fff", font: { size: 14 } },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#fff", font: { size: 14 } },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
    },
    interaction: {
      mode: "nearest",
      intersect: false,
    },
  };

  const topInvestors = [
    { name: "Alice", tokens: 50, investment: 5000 },
    { name: "Bob", tokens: 30, investment: 3000 },
    { name: "Charlie", tokens: 20, investment: 2000 },
  ];

  const handleSimulation = () => {
    const returnRate = 1.5; // Example return rate (50% increase)
    const calculatedReturn = simulationAmount * returnRate;
    setEstimatedReturn(calculatedReturn);
  };

  return (
    <div className="fundraising-stats">
      <div style={{ display: "flex", gap: "15px" }}>
        <div className="stats">
          <div className="stat">
            <h4>Tokens Sold</h4>
            <p>500</p>
          </div>
          <div className="stat">
            <h4>Average Price</h4>
            <p>$100</p>
          </div>
          <div className="stat">
            <h4>Market Volume</h4>
            <p>$50,000</p>
          </div>
        </div>
        <div className="chart-container-small">
          <Line data={lineChartData} options={lineChartOptions} />
        </div>
      </div>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div className="top-investors">
          <h3>Top Investors</h3>
          <table>
            <thead>
              <tr>
                <th>Investor Name</th>
                <th>Tokens Purchased</th>
                <th>Investment Amount</th>
              </tr>
            </thead>
            <tbody>
              {topInvestors.map((investor, index) => (
                <tr key={index}>
                  <td>{investor.name}</td>
                  <td>{investor.tokens}</td>
                  <td>${investor.investment.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="historical-data-simulation">
          <h1>Historical Data & Simulation</h1>
          <div>
            <label>
              Enter Investment Amount ($):
              <input
                type="number"
                value={simulationAmount}
                onChange={(e) => setSimulationAmount(Number(e.target.value))}
              />
            </label>
            <button onClick={handleSimulation}>Simulate Return</button>
          </div>
          {estimatedReturn > 0 && (
            <p>Estimated Return: ${estimatedReturn.toLocaleString()}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Aman;
