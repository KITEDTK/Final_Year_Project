export function  generateCheckDigit(code: string) {
    // Đảo ngược chuỗi để dễ dàng lấy các số từ phải sang trái
    const reversedCode = code.split('').reverse().join('');
    
    let oddSum = 0;
    let evenSum = 0;
    
    // Tính tổng các số ở vị trí lẻ và chẵn
    for (let i = 0; i < reversedCode.length; i++) {
      const digit = parseInt(reversedCode[i], 10);
      if (i % 2 === 0) {
        oddSum += digit;
      } else {
        evenSum += digit;
      }
    }
    
    // Nhân tổng của các số lẻ với 3
    const total = (oddSum * 3) + evenSum;
    
    // Tìm bội số của 10 gần nhất lớn hơn hoặc bằng tổng
    const nextMultipleOf10 = Math.ceil(total / 10) * 10;
    
    // Tính giá trị kiểm tra (checksum)
    const checksum = nextMultipleOf10 - total;
    
    return checksum.toString();
  }