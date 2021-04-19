function saveRange(){
    var tabs = [
        'moduloAliverti',
        'moduloAlterio',
        'moduloAmati',
        'moduloAmicone',
        'moduloBarlocco',
        'moduloBascia',
        'moduloBersia',
        'moduloBesso',
        'moduloBiasi',
        'moduloBlasi',
        'moduloBleve',
        'moduloBoschiero',
        'moduloCantaro',
        'moduloCarbone',
        'moduloCarnevale',
        'Sample_tab_3',
        'Sample_tab_1',
        'Sample_tab_2',
        'Sample_tab_3',
        'Sample_tab_1',
        'Sample_tab_2',
        'Sample_tab_3',
        'Sample_tab_1',
        'Sample_tab_2',
        'Sample_tab_3',
        'Sample_tab_1',
        'Sample_tab_2',
        'Sample_tab_3',
        'Sample_tab_1',
        'Sample_tab_2',
        'Sample_tab_3',
        /**da finire di aggiungere tutti i tab */

    ];

    var ss=SpreadsheetApp.getActiveSpreadsheet();
    for (var i = 0; i < tabs.length; i++) {
        var sheet=ss.getSheetByName(tabs[i]);
        
        /** inserire il macro qui dentro */
    }
  }