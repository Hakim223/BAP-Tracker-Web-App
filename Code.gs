function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}

// GET DATA FROM GOOGLE SHEET AND RETURN AS AN ARRAY
function getData() {
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Rekap BAP 2023');
  let data = sheet.getDataRange().getValues().slice(1);
  let indexedData = data.map(function(row, index) {
    row.unshift(index + 1); // Insert the index as the first element of each row
    return row;
  });

  return indexedData;
}


function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
}
