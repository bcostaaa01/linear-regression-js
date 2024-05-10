/**
 * @function createLinearRegressionChart
 * @param {Array} x - Array of x values
 * @param {Array} y - Array of y values
 * @param {number} slope - The slope of the line of best fit
 * @param {number} intercept - The y-intercept of the line of best fit
 * @returns {void}
 * 
 * @example
 * const x = [1, 6, 9, 4, 5, 7, 8, 3, 2, 10];
 * const y = [2, 5, 7, 3, 4, 6, 8, 1, 1, 9];
 * const { slope, intercept } = linearRegression(x, y);
 * createLinearRegressionChart(x, y, slope, intercept);
 * 
 * @description
 * This function creates a scatter plot with a line of best fit using Chart.js, an open-source JavaScript library for data visualization.
 * The x and y values are displayed as scatter plot points, and the line of best fit is calculated using the slope and y-intercept provided.
 */
const createLinearRegressionChart = (x, y, slope, intercept) => {
  // Get the canvas element from HTML
  const ctx = document.getElementById("linearRegressionChart").getContext("2d");

  // Create the combined dataset containing scatter plot points and line of best fit
  const data = {
    labels: x,
    datasets: [
      {
        label: "Data Points",
        data: y,
        backgroundColor: "rgba(255, 99, 132, 0.5)", // Red with 50% transparency
        borderColor: "rgba(255, 99, 132, 1)", // Red
        borderWidth: 1,
        type: "scatter", // Set type to scatter plot
      },
      {
        label: "Line of Best Fit",
        data: x.map((val) => slope * val + intercept), // Calculate y values for the line
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Blue with 20% transparency
        borderColor: "rgba(54, 162, 235, 1)", // Blue
        borderWidth: 1,
        type: "line", // Set type to line chart
      },
    ],
  };

  // Create the chart
  new Chart(ctx, {
    type: "scatter", // Specify default type (scatter) for legend
    data: data,
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: "Number of rooms",
          },
          type: "linear",
          position: "bottom",
        },
        y: {
          title: {
            display: true,
            text: "Hotel price per night (EUR)",
          },
          type: "linear",
          position: "left",
        },
      },
    },
  });
};
