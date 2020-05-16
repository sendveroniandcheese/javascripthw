// from data.js
var tableData = data;

// Console.log the weather data from data.js
console.log(data);


// reference the table body

var tbody = d3.select("tbody");

//data.forEach(function(UFOdata) {
    //console.log(UFOdata)});

// use d3 to append a table row for each object of data
data.forEach(function(UFOdata) {
    console.log(UFOdata)
    let row = tbody.append("tr");

    Object.entries(UFOdata).forEach((key, value) => {
        console.log(key, value);
        let cell = row.append("td");
        cell.text(value);

    })

});

