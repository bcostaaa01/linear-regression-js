# Linear Regression Chart
This project is a simple web page that displays a chart showing the relationship between the number of hotel rooms and the price of a hotel night based on a linear regression model.

# Installing the necessary dependencies

```
npm install
```

### Mathematical Problem - Linear Regression
Linear regression is a statistical method used to model the relationship between a dependent variable (often denoted as Y) and one or more independent variables (often denoted as X). In this project, we are dealing with simple linear regression, which involves a single independent variable.

The goal of linear regression is to find the best-fitting straight line through the data points. This line is called the regression line and can be represented by the equation:

`Y = a + bx`

Where:

- `Y` is the dependent variable (in this case, the price of a hotel night).
- `X` is the independent variable (in this case, the number of hotel rooms).
- `a` is the Y-intercept, which is the value of Y when X is 0.
- `b` is the slope of the line, which represents the rate at which Y changes for each change in X.

### Project Structure
The project consists of an HTML file (index.html) and several JavaScript files (linear-chart.js, linear-regression.js, main.js).

`index.html`: This is the main HTML file that includes a canvas element for the chart and script tags to include the JavaScript files.

`linear-chart.js`: This file is likely to contain the code for creating and managing the chart using the Chart.js library.

`linear-regression.js`: This file is likely to contain the code for calculating the linear regression model.

`main.js`: This file is likely to contain the main application logic.

### Usage
To use this project, simply open the index.html file in your web browser.

### Dependencies
This project uses the Chart.js library (version 4.2.0) for creating and managing the chart. The library is included in the project via a CDN link.

### Contributing
Contributions are welcome. Please open an issue or submit a pull request.

### License
This project is open source and available under the MIT License.