
function RESETSX() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('B3').activate();
  spreadsheet.getCurrentCell().setValue('NomeSquadra');
  spreadsheet.getRange('B4').activate();
  spreadsheet.getCurrentCell().setValue('Pro1');
  spreadsheet.getRange('B5').activate();
  spreadsheet.getCurrentCell().setValue('Pro2');
  spreadsheet.getRange('B6').activate();
  spreadsheet.getCurrentCell().setValue('Pro3');
  spreadsheet.getRange('B7').activate();
  spreadsheet.getCurrentCell().setValue('ProArr');
  spreadsheet.getRange('C4').activate();
  spreadsheet.getCurrentCell().setValue('28');
  spreadsheet.getRange('C5').activate();
  spreadsheet.getCurrentCell().setValue('28');
  spreadsheet.getRange('C6').activate();
  spreadsheet.getCurrentCell().setValue('28');
  spreadsheet.getRange('C7').activate();
  spreadsheet.getCurrentCell().setValue('14');
  spreadsheet.getRange('D7').activate();
  spreadsheet.getCurrentCell().setValue('14');
  spreadsheet.getRange('E7').activate();
  spreadsheet.getCurrentCell().setValue('7');
  spreadsheet.getRange('D4').activate();
  spreadsheet.getCurrentCell().setValue('28');
  spreadsheet.getRange('D5').activate();
  spreadsheet.getCurrentCell().setValue('28');
  spreadsheet.getRange('D6').activate();
  spreadsheet.getCurrentCell().setValue('28');
  spreadsheet.getRange('E4').activate();
  spreadsheet.getCurrentCell().setValue('14');
  spreadsheet.getRange('E5').activate();
  spreadsheet.getCurrentCell().setValue('14');
  spreadsheet.getRange('E6').activate();
  spreadsheet.getCurrentCell().setValue('14');
  spreadsheet.getRange('H10').activate();
  spreadsheet.getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true});
  spreadsheet.getRange('H11:I11').activate();
  spreadsheet.getCurrentCell().setValue('Pierro');
  spreadsheet.getRange('I3').activate();
  spreadsheet.getCurrentCell().setValue('NomeSquadra');
  spreadsheet.getRange('I4').activate();
  spreadsheet.getCurrentCell().setValue('Opp1');
  spreadsheet.getRange('I5').activate();
  spreadsheet.getCurrentCell().setValue('Opp2');
  spreadsheet.getRange('I6').activate();
  spreadsheet.getCurrentCell().setValue('Opp3');
  spreadsheet.getRange('I7').activate();
  spreadsheet.getCurrentCell().setValue('OppArr');
  spreadsheet.getRange('J4').activate();
  spreadsheet.getCurrentCell().setValue('28');
  spreadsheet.getRange('J5').activate();
  spreadsheet.getCurrentCell().setValue('28');
  spreadsheet.getRange('J6').activate();
  spreadsheet.getCurrentCell().setValue('28');
  spreadsheet.getRange('J7').activate();
  spreadsheet.getCurrentCell().setValue('14');
  spreadsheet.getRange('K4').activate();
  spreadsheet.getCurrentCell().setValue('28');
  spreadsheet.getRange('K5').activate();
  spreadsheet.getCurrentCell().setValue('28');
  spreadsheet.getRange('K6').activate();
  spreadsheet.getCurrentCell().setValue('28');
  spreadsheet.getRange('K7').activate();
  spreadsheet.getCurrentCell().setValue('14');
  spreadsheet.getRange('L4').activate();
  spreadsheet.getCurrentCell().setValue('14');
  spreadsheet.getRange('L5').activate();
  spreadsheet.getCurrentCell().setValue('14');
  spreadsheet.getRange('L6').activate();
  spreadsheet.getCurrentCell().setValue('14');
  spreadsheet.getRange('L7').activate();
  spreadsheet.getCurrentCell().setValue('7');
};