// Description: This file contains the logic to generate random data for the x and y axis, calculate the linear regression, and create a scatter plot with a line of best fit using Chart.js.
// Random data for the x and y axis for linear regression - regenerated at every page reload/rerendering
const x = Array.from({ length: 50 }, () =>
    Math.floor(Math.random() * 40),
);
const y = x.map(
    (value) => value * 2 + Math.floor(Math.random() * 10),
);
// Calculate the slope and y-intercept of the linear regression
const { slope, intercept } = linearRegression(x, y);

// Call the function to create the chart
createLinearRegressionChart(x, y, slope, intercept);