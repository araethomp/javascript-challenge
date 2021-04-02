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

     entryCell = row.append("td");
     //console.log(entryCell);
     entryCell.text(value);

   })
})
