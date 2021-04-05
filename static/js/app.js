// from data.js
const tableData = data;
console.log(tableData);

// // Grab table from index
const tbody = d3.select("tbody");
console.log(tbody);

tableData.forEach(function(ufoEntry) {
   console.log(ufoEntry);
   // Create rows for each ufoEntry and add each entry
   let row = tbody.append("tr");

   Object.entries(ufoEntry).forEach(function([key, value]){
     //console.log(key, value);

     let entryCell = row.append("td");
     //console.log(entryCell);
     entryCell.text(value);

   })
})

// Date Search Button
let dateSearch = d3.select("#filter-btn");
dateSearch.on("click", function(){

// Clear out row data
  tbody.html("");

// Grab input dates
  let dateGrab = d3.select("#datetime");
  let valueGrab = dateGrab.property("value");
  //console.log(valueGrab);
// Filter dates
  let filteredDates = tableData.filter(date => date.datetime === valueGrab);
  //console.log(filteredDates);

})
