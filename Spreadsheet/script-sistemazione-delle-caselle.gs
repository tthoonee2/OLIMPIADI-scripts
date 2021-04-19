/** @OnlyCurrentDoc */

function RIassestamentofilesheet() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('E4:E6').activate();
  spreadsheet.getRange('E4:E6').setDataValidation(SpreadsheetApp.newDataValidation()
  .setAllowInvalid(false)
  .requireNumberBetween(13, 15)
  .build());
  spreadsheet.getRange('L4:L6').activate();
  spreadsheet.getRange('L4:L6').setDataValidation(SpreadsheetApp.newDataValidation()
  .setAllowInvalid(false)
  .requireNumberBetween(13, 15)
  .build());
  spreadsheet.getRange('E5').activate();
  spreadsheet.getRange('E4').setNote('Minimo 13\nMassimo 15\n\n');
  spreadsheet.getRange('E6').activate();
  spreadsheet.getRange('E5').setNote('Minimo 13\nMassimo 15\n\n');
  spreadsheet.getRange('L4').activate();
  spreadsheet.getRange('E6').setNote('Minimo 13\nMassimo 15\n\n');
  spreadsheet.getRange('L5').activate();
  spreadsheet.getRange('L4').setNote('Minimo 13\nMassimo 15\n\n');
  spreadsheet.getRange('L6').activate();
  spreadsheet.getRange('L5').setNote('Minimo 13\nMassimo 15\n\n');
  spreadsheet.getRange('E4').activate();
  spreadsheet.getRange('L6').setNote('Minimo 13\nMassimo 15\n\n');
  spreadsheet.getCurrentCell().setValue('14');
  spreadsheet.getRange('E5').activate();
  spreadsheet.getCurrentCell().setValue('14');
  spreadsheet.getRange('E6').activate();
  spreadsheet.getCurrentCell().setValue('14');
  spreadsheet.getRange('L4').activate();
  spreadsheet.getCurrentCell().setValue('14');
  spreadsheet.getRange('L5').activate();
  spreadsheet.getCurrentCell().setValue('14');
  spreadsheet.getRange('L6').activate();
  spreadsheet.getCurrentCell().setValue('14');
  spreadsheet.getRange('L7').activate();
};