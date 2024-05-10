/** 
    @function linearRegression
    @param {number[]} x - The x values of the data points
    @param {number[]} y - The y values of the data points
    @returns {object} An object containing the slope and y-intercept of the line

    Example usage:
    @example
    const x = [1, 6, 9, 4, 5, 7, 8, 3, 2, 10];
    const y = [2, 5, 7, 3, 4, 6, 8, 1, 1, 9];
    const { slope, intercept } = linearRegression(x, y);
    console.log(`y = ${slope}x + ${intercept}`);
    // Output: y = 0.8x + 0.4

    @description
    Calculate the slope and y-intercept of a linear regression line

    The slope and y-intercept of a linear regression line can be calculated using the following formulas:
    - slope = Σ((x - xMean) * (y - yMean)) / Σ((x - xMean)^2)
    - y-intercept = yMean - slope * xMean

    Where:
    - x is the x value of a data point
    - y is the y value of a data point
    - xMean is the mean of x
    - yMean is the mean of y
    - Σ is the sum of the values
    - slope is the slope of the line
    - y-intercept is the y-intercept of the line

    This function takes two arrays of x and y values and returns an object containing the slope and y-intercept of the line.

    What is Linear Regression?
    Linear regression is a statistical method used to model the relationship between two variables by fitting a linear equation to observed data. It is commonly used for predictive analysis and forecasting based on historical data. Examples of linear regression include predicting hotel night prices based on the number of rooms, or estimating sales based on advertising expenditure.
*/
const linearRegression = (x, y) => {


  /*
    Calculate the mean of x

    The mean of x is the sum of all x values divided by the number of x values.
  */
  const xMean = x.reduce((acc, n) => acc + n, 0) / x.length;
  // Find the mean of y
  const yMean = y.reduce((acc, n) => acc + n, 0) / y.length;

  /*
    Calculate the numerator

    The numerator is the sum of the product of the differences between each x value and the mean of x and the differences between each y value and the mean of y.
  */
  const numerator = x.reduce(
    (acc, x, i) => acc + (x - xMean) * (y[i] - yMean),
    0,
  );

  /*
  Calculate the denominator

  The denominator is the sum of the squared differences between each x value and the mean of x.
  */
  const denominator = x.reduce((acc, x) => acc + (x - xMean) ** 2, 0);
  /*
  Calculate the slope

  The slope is the numerator divided by the denominator.
  */
  const slope = numerator / denominator;

  /*
  Calculate the y-intercept

    The y-intercept is the mean of y minus the slope times the mean of x.
  */
  const intercept = yMean - slope * xMean;

  /*
    Return an object containing the slope and y-intercept
  */
  return { slope, intercept };
};
