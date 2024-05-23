import * as XLSX from "xlsx";

export const tableToExcel = (table: HTMLElement, fileName: string, columnStyle: XLSX.ColInfo[]) => {
  const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(table);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  
  ws["!cols"] = columnStyle;
  //ws["!rows"] = [{  }];
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

  const completeFileName = fileName.endsWith(".xlsx")
    ? fileName
    : `${fileName}.xlsx`;
  XLSX.writeFile(wb, completeFileName);
};
