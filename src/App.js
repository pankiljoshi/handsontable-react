import React from 'react';
import Handsontable from 'handsontable';
import { HotTable } from '@handsontable/react';
import HyperFormula from 'hyperformula';

function getDebugInfo() {
  let debug = 'Handsontable:';
  debug += ` v${Handsontable.version}`;
  debug += ` (${Handsontable.buildDate})`;
  debug += ' Wrapper:';
  debug += ` v${HotTable.version}`;
  debug += ' React:';
  debug += ` v${React.version}`;
  return debug;
}

function App() {
  const data = [
    ["", "Ford", "Volvo", "Toyota", "Honda"],
    ["2016", 10, 11, 12, 13],
    ["2017", 20, 11, 14, 13],
    ["2018", 30, 15, 12, 13],
    ["Total", "=SUM(B2:B4)", "=SUM(C2:C4)", "=SUM(D2:D4)", "=SUM(E2:E4)"],
    ["Average", "=AVERAGE(B2:B4)", "=AVERAGE(C2:C4)", "=AVERAGE(D2:D4)", "=AVERAGE(E2:E4)"]
  ];

  return (
    <div id="example">
      <HotTable
        data={data}
        width="100%"
        height="100%"
        colHeaders={true}
        rowHeaders={true}
        contextMenu={true}
        manualRowMove={true}
        bindRowsWithHeaders="strict"
        filters={true}
        manualColumnMove={true}
        autoWrapRow={true}
        autoWrapCol={true}
        dropdownMenu={true}
        fillHandle={true}
        formulas={{
          engine: HyperFormula,
        }}
        licenseKey="non-commercial-and-evaluation"
      />
    </div>
  );
}

console.log(getDebugInfo());

export default App;
