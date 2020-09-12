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

// Select the button
var button = d3.select('button');
// console.log(button);

// Select the form
var form = d3.select('form');
// console.log(form);

// Create event handler 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    // console.log(inputValue);
  
    var filteredData = tableData.filter(date => date.datetime === inputValue);
    // console.log(filteredData);

    // clearing out all table rows
    tbody.html('')

    // append filtered date to the table
    filteredData.forEach((sighting) => {
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
}