var GoogleSpreadSheet = require('google-spreadsheet');
var creds = require('./client_secret.json/data-capture-8ab6f4aed11a.json');
var fs = require('fs');
var tr= "";

  var doc = new GoogleSpreadSheet('14m2f6Y2Ue4RkIZGOV8h-1Bn7s6P8ZtjGlrgyO73eCY0');

  doc.useServiceAccountAuth(creds, function (err) {
    doc.getRows(1, function (err, rows) {
      rows.forEach(row => {
        tr += "\n\t\t<tr><td>" + row.country + "</td><td>" + row.product + "</td><td>" + row.profit + "</td></tr>" 
      });
      fs.writeFile('table.html', "<link rel='stylesheet' href='table-styling.css'/>\n<table id>" + "\n\t<tbody>\n\t\t<tr><th>Country</th><th>Product</th><th>Profit</th>" +  tr + "\n\t</tbody>\n</table>", function (err) {
        if (err) throw err;
        console.log('Saved!');        
      });
    });    
  });



  

