var GoogleSpreadSheet = require('google-spreadsheet');
var creds = require('./client_secret.json/data-capture-8ab6f4aed11a.json');

var doc = new GoogleSpreadSheet('14m2f6Y2Ue4RkIZGOV8h-1Bn7s6P8ZtjGlrgyO73eCY0');

doc.useServiceAccountAuth(creds, function(err){
  doc.getRows(1, function (err, rows){
    var ds= rows;
    console.log(ds);
  });
});

