import React from "react";
import { Line } from "react-chartjs-2";

const labels = ["400", "500", "600", "700", "800"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Enable",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0.00, 0.25, 0.75, 0.50, 1.00],
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;