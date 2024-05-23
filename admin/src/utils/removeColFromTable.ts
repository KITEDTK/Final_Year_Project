export const removeColFromTables = (tableElement: HTMLTableElement, columnsToRemove: number[]) => {
    const clone = tableElement.cloneNode(true) as HTMLTableElement;
    const rows = clone.rows;
  
    for (const row of rows) {
      for (let i = columnsToRemove.length - 1; i >= 0; i--) {
        row.deleteCell(columnsToRemove[i]);
      }
    }
  
    return clone;
  };
  