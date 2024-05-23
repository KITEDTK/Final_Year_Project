export const objectToArrayCSV = <T extends object>(
  data: T[]
): (string | number)[][] => {
  if (!data || data.length === 0) return [];

  const headers = Object.keys(data[0]);
  const csvData = data.map((item) =>
    headers.map((header) => item[header as keyof T] as string | number)
  );

  return [headers, ...csvData];
};
