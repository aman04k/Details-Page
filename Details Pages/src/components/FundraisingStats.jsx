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
import "../components/Fundraising.css";

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

const FundraisingStats = () => {
  const [dateFilter, setDateFilter] = useState("last7days");

  // Line Chart Data
  const lineChartData = {
    labels:
      dateFilter === "last7days"
        ? ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"]
        : [
            "Week 1",
            "Week 2",
            "Week 3",
            "Week 4",
            "Week 5",
            "Week 6",
            "Week 7",
            "Week 8",
          ],
    datasets: [
      {
        label: "Funds Raised (USD)",
        data:
          dateFilter === "last7days"
            ? [1000, 2000, 3500, 5000, 6500, 8000, 10000]
            : [7000, 14000, 21000, 28000, 35000, 42000, 49000, 56000],
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79, 70, 229, 0.3)",
        tension: 0.4,
        fill: true,
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
        labels: { color: "#333" },
      },
      tooltip: {
        callbacks: {
          label: (context) => `$${context.raw.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#333" },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#333" },
        grid: { color: "#ccc" },
      },
    },
  };

  // Dummy Data for Token Sale Info and Top Investors
  const tokensSold = 500;
  const averagePrice = 100;
  const marketVolume = 50000;

  const topInvestors = [
    { name: "Alice", tokens: 50, investment: 5000 },
    { name: "Bob", tokens: 30, investment: 3000 },
    { name: "Charlie", tokens: 20, investment: 2000 },
  ];

  return (
    <div className="fundraising-stats">
      <h2>Fundraising Stats</h2>

      {/* Date Filter */}
      <div className="filters">
        <button
          onClick={() => setDateFilter("last7days")}
          className={dateFilter === "last7days" ? "active" : ""}
        >
          Last 7 Days
        </button>
        <button
          onClick={() => setDateFilter("last30days")}
          className={dateFilter === "last30days" ? "active" : ""}
        >
          Last 30 Days
        </button>
      </div>

      <div className="content-container">
        {/* Top Investors Table */}
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
      </div>

      {/* Token Sale Details Section */}
      <div className="token-sale-details">
        <h3>Token Sale Details</h3>
        <div className="stats">
          <div className="stat">
            <h4>Tokens Sold</h4>
            <p>{tokensSold}</p>
          </div>
          <div className="stat">
            <h4>Average Price</h4>
            <p>${averagePrice}</p>
          </div>
          <div className="stat">
            <h4>Market Volume</h4>
            <p>${marketVolume.toLocaleString()}</p>
          </div>
        </div>
        {/* Line Chart */}
        <div className="chart-container-small">
          <Line data={lineChartData} options={lineChartOptions} />
        </div>
      </div>
    </div>
  );
};

export default FundraisingStats;
