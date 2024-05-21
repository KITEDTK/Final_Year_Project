
export const objectToArrayCSV = <T extends object>(data: T[]): string => {
    if (data.length === 0) {
      return '';
    }
  
    // Extract headers
    const headers = Object.keys(data[0]);
  
    // Convert headers to CSV format
    const csvHeaders = headers.join(',');
  
    // Convert rows to CSV format
    const csvRows = data.map(row =>
      headers.map(header => {
        const value = row[header as keyof T];
        return typeof value === 'string' ? `"${value.replace(/"/g, '""')}"` : value;
      }).join(',')
    );
  
    // Join headers and rows
    return [csvHeaders, ...csvRows].join('\n');
  };
  