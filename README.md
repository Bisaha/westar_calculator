# This is the code for the calculator I made for Brian Grimmett's Westar story.

There are two formulas we are using, provided by Westar.

The traditional formula is:
((First 900 kWh * rate for the first 900kWh) + remaining kWh * rate for remaining) + service fee + (rider * all kWh))
This volume rate changes base on Summer and Winter months.

The new formula is:
(all kWH * volume charge) + service fee + (rider * all kWh) + (demand * demand rate)
The demand rate changes based on Summer and Winter months.

I first wrote the code in a [ipython notebook](https://github.com/Bisaha/westar_calculator/blob/master/The%20Formula%20Python%20Draft.ipynb) since I'm more comfortable in Python.

I then used [jscalc.io](jscalc.io) to make the calculator.

The code used in that calculator is in [calculator.js](https://github.com/Bisaha/westar_calculator/blob/master/calculator.js).
