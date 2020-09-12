// from data.js
var tableData = data;

// Using d3 to select the table
var table = d3.select('table');

// Using d3 to select the table body
var tbody = d3.select('tbody');

// Using d3 to append one table row `tr` for each sighting object
tableData.forEach((sighting) => {
    // console.log(sighting);
    var row = tbody.append("tr");

    // Using `Object.entries` to console.log each sighting's value
    Object.entries(sighting).forEach(([key, value]) => {
        // console.log(key, value);

        // Append a cell to the row for each value
        // in the weather report object
        var cell = row.append("td").text(value);

    });
});

