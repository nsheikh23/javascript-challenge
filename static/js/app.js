// from data.js
var tableData = data;

// Using d3 to select the table
var table = d3.select('table');

// Using d3 to select the table body
var tbody = d3.select('tbody');


// Using d3 to append one table row `tr` for each sighting object
function buildTable(data) {
    
    data.forEach((sighting) => {
    // console.log(sighting);
    var row = tbody.append("tr");

    // Using `Object.entries` to console.log each sighting's value
    Object.entries(sighting).forEach(([key, value]) => {
        // console.log(key, value);

        // Append a cell to the row for each value
        // in the weather report object
        var cell = row.append("td").text(value);
    });
})};

buildTable(tableData);

var dropdown = d3.select('#dropdown');
dropdown.on('click', function() {
    
    // Select the dropdown
    var dropdownselection = d3.select('#dropdown').node().value

    d3.select('#criteria').node().value = '';

    switch(dropdownselection) {
        case 'date':
            placeHolder = '1/11/2010';
            break;

        case 'city':
            placeHolder = 'Benton';
            break;

        case 'state':
            placeHolder = 'Ca';
            break;
        
        case 'country':
            placeHolder = 'US';
            break;
        
        case 'shape':
            placeHolder = 'Circle';
            break;
        
        case 'selection':
            placeHolder = '';
            break;
    }
    d3.select('#criteria').attr('placeholder', placeHolder);
    d3.select('label').attr('for',dropdownselection).text(`Enter a value for ${dropdownselection}: `);

})

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
    
    // Select the dropdown
    var dropdownselection = d3.select('#dropdown').node().value

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#criteria");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value").toLowerCase();
    // console.log(inputValue);

    function filtersightings(sighting){
        if (dropdownselection === 'date' && sighting.datetime === inputValue){
            return sighting.datetime;
        } else if (dropdownselection === 'city' && sighting.city === inputValue){
            return sighting.city;
        } else if (dropdownselection === 'state' && sighting.state === inputValue){
            return sighting.state;
        } else if (dropdownselection === 'country' && sighting.country === inputValue){
            return sighting.country;
        } else if (dropdownselection === 'shape' && sighting.shape === inputValue){
            return sighting.shape;
        }
    }

    var filteredData = tableData.filter(filtersightings);
    // console.log(filteredData);

    // clearing out all table rows
    tbody.html('');

    // append filtered date to the table
    buildTable(filteredData);
}