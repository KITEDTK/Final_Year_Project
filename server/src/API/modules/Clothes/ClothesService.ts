import { PrismaClient } from "@prisma/client";
import { ClothDetails, CreateClothesInput } from "./ClothesTypes";
import fs from "fs";
const excelToJson = require("convert-excel-to-json");
const prisma = new PrismaClient();
import { generateCheckDigit } from "../../../utils/generateCheckDigit";

async function getClothesByRootCategory(rootCategoryId: string, page: string) {
  const pageNumber = page ? parseInt(page, 10) : 0;
  let filterRootCategoryIds = {};
  let rootCategoryIds = [];
  if (rootCategoryId !== null) {
    const category: any = await prisma.$queryRaw`WITH allCategory AS (
        SELECT id
        FROM Categories
        WHERE id = ${rootCategoryId}  
        UNION ALL
        SELECT c.id
        FROM Categories c
        INNER JOIN allCategory s ON c.parent_id = s.id
      )
      SELECT id FROM allCategory`;
    rootCategoryIds.push(...category.map((c: any) => c.id));
    filterRootCategoryIds = { in: rootCategoryIds };
  }
  const result = await prisma.clothes.findMany({
    skip: pageNumber * 3,
    take: 3,
    where: {
      ...(rootCategoryId !== null ? { categoryId: filterRootCategoryIds } : {}),
    },
    include: {
      clothDetails: {
        include: {
          size: { select: { name: true } },
          color: { select: { name: true } },
        },
      },
    },
  });
  return result;
}
async function getMaxQuantityClothesByRootCategory(rootCategoryId: string) {
  let filterRootCategoryIds = {};
  let rootCategoryIds = [];
  const category: any = await prisma.$queryRaw`WITH allCategory AS (
    SELECT id
    FROM Categories
    WHERE id = ${rootCategoryId}  
    UNION ALL
    SELECT c.id
    FROM Categories c
    INNER JOIN allCategory s ON c.parent_id = s.id
  )
  SELECT id FROM allCategory`;
  rootCategoryIds.push(...category.map((c: any) => c.id));
  filterRootCategoryIds = { in: rootCategoryIds };
  const result = await prisma.clothes.findMany({
    where: {
      ...(rootCategoryId !== null ? { categoryId: filterRootCategoryIds } : {}),
    },
  });
  return result.length;
}
async function exportClothesToCSV() {
  const data = await prisma.clothes.findMany({
    select: {
      id: true,
      name: true,
      brand: true,
      categoryId: true,
    },
  });

  const csvArray: string[][] = [
    Object.keys(data[0]),
    ...data.map((item) => Object.values(item).map((value) => `"${value}"`)),
  ];

  return csvArray.map((row) => `[${row.join(", ")}]`);
}
async function getAllClothesDetail() {
  const result = await prisma.clothDetails.findMany({});
  return result;
}
async function getAllClothes(pages: any) {
  const pageNumber = pages ? parseInt(pages, 10) : 0;
  const data = await prisma.clothes.findMany({
    skip: pageNumber * 5,
    take: 5,
    select: {
      id: true,
      name: true,
      brand: true,
      location: true,
      price: true,
      initPrice: true,
      category: {
        select: {
          name: true,
        },
      },
    },
  });
  const result = data.map(({ category, ...rest }) => ({
    ...rest,
    categoryName: category.name,
  }));
  return result;
}
async function getQuantityClothDetail(clothDetailId: string){
  const amount = await prisma.clothDetails.findUnique({
    where:{
      id:clothDetailId
    }
  });
  return amount?.amount;
}
async function readExcelFile(file: string) {
  const excelData = excelToJson({
    sourceFile: file,
    header: {
      rows: 1,
    },
  });
  const firstRowValues = Object.values(excelData.Sheet1[0]);
  const data = excelToJson({
    sourceFile: file,
    header: {
      cols: firstRowValues.length,
    },
  });
  fs.unlinkSync(file);
  const keyMappings = data.Sheet1[0];
  let validCheckNumber = 5;
  const checkedValues: Set<string> = new Set();
  for (const [key, value] of Object.entries(keyMappings)) {
    if (
      value === "Tên sản phẩm" ||
      value === "Hãng" ||
      value === "Vị trí" ||
      value === "Danh mục" ||
      (value === "Giá tiền" && !checkedValues.has(value)) // Kiểm tra xem giá trị đã được kiểm tra chưa
    ) {
      validCheckNumber -= 1;
      checkedValues.add(value);
    }
  }
  if (validCheckNumber !== 0) {
    throw "File không hợp lệ";
  }
  const newKeyMapping: { [key: string]: any } = {};

  Object.entries(keyMappings).forEach(([key, value]) => {
    // Kiểm tra nếu giá trị của trường là "Tên sản phẩm" thì đổi giá trị thành "name"
    if (value === "Tên sản phẩm") {
      newKeyMapping[key] = "name";
    } else if (value === "Hãng") {
      newKeyMapping[key] = "brand";
    } else if (value === "Vị trí") {
      newKeyMapping[key] = "location";
    } else if (value === "Danh mục") {
      newKeyMapping[key] = "categoryId";
    } else if (value === "Giá tiền") {
      newKeyMapping[key] = "price";
    } else {
      newKeyMapping[key] = value;
    }
  });

  const newData = data.Sheet1.slice(1).map((item: any) => {
    const newItem: { [key: string]: any } = {};
    Object.entries(item).forEach(([oldKey, value]) => {
      const newKey = newKeyMapping[oldKey] || oldKey;
      newItem[newKey] = value;
    });
    const { STT, ...rest } = newItem;
    return rest;
  });
  const addData = await Promise.all(
    newData.map(async (item: any) => {
      if (item.categoryId) {
        const categoryId = await prisma.categories.findFirst({
          where: {
            name: item.categoryId,
          },
          select: {
            id: true,
          },
        });
        if (categoryId) {
          item.categoryId = categoryId.id;
        } else {
          throw "error: không tồn tại danh mục"; // Sử dụng new Error() để tạo một lỗi mới
        }
      }
      return item;
    })
  );

  const result = await prisma.cLothesAddExcelTest.createMany({
    data: addData,
  });
  return result;
}
async function getSingleClothes(clothesId: string) {
  const result = await prisma.clothes.findUnique({
    where: {
      id: clothesId,
    },
    include: {
      clothDetails: {
        include: {
          size: { select: { name: true } },
          color: { select: { name: true } },
        },
      },
      category: {},
      comments: {
        select: {
          id: true,
          userId: true,
          content: true,
          createAt: true,
          user: {
            select: {
              fullname: true,
            },
          },
          cloth: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
  return result;
}
async function addComment(clothesId: string, userId: string, content: string) {
  const checkBuyer = await prisma.payments.findFirst({
    where: {
      userId: userId,
      paymentDetails: {
        some: {
          clothDetail: {
            clothId: clothesId,
          },
        },
      },
    },
  });
  if (!checkBuyer) {
    throw new Error("Người dùng chưa mua mặt hàng này");
  }
  await prisma.comments.create({
    data: {
      clothId: clothesId,
      userId: userId,
      content: content,
    },
  });
  return getSingleClothes(clothesId);
}
async function getSingleClothesAdmin(clothesId: string) {
  const result = await prisma.clothes.findUnique({
    where: {
      id: clothesId,
    },
    select: {
      id: true,
      name: true,
      brand: true,
      location: true,
      category: {
        select: {
          id: true,
          name: true,
        },
      },
      price: true,
      initPrice: true,
      clothDetails: {
        select: {
          id: true,
          codeBar: true,
          amount: true,
          size: {
            select: {
              name: true,
            },
          },
          color: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
  if (result && result.clothDetails) {
    result.clothDetails = await Promise.all(
      result.clothDetails.map(async (item) => {
        const orderPayments = await prisma.paymentDetails.findMany({
          where: {
            clothId: item.id,
            payment:{
              OR:[
                {
                  status: 'Chưa duyệt đơn'
                },
                {
                  status: 'Đang vận chuyển'
                }
              ]
            }
          },
          select: {
            amount: true,
          },
        });
        const sumOrderAmount = orderPayments.reduce(
          (accumulator, currentValue) => {
            const value =
              currentValue.amount !== null ? currentValue.amount : 0;
            return accumulator + value;
          },
          0
        );
        return { ...item, sumOrderAmount };
      })
    );
  }

  return result;
}
async function getAllClothesAdmin() {
  const allClothDetails = await prisma.clothDetails.findMany({});
  const orders = await Promise.all(
    allClothDetails.map(async (item) => {
      const orderPayment = await prisma.paymentDetails.findMany({
        where: {
          clothId: item.id,
        },
        select: {
          amount: true,
        },
      });
      const sumOrderAmount = orderPayment.reduce(
        (accumulator, currentValue) => {
          const value = currentValue.amount !== null ? currentValue.amount : 0;
          return accumulator + value;
        },
        0
      );
      return { ...item, sumOrderAmount };
    })
  );
  return orders;
}
async function getMaxQuantityClothes() {
  const result = await prisma.clothes.findMany();
  return result.length;
}
async function updateSingleClothesInfo(clothesId: string, data: any) {
  const {} = data;
  await prisma.clothes.update({
    where: {
      id: clothesId,
    },
    data: data,
  });
  return getSingleClothesAdmin(clothesId);
}
async function generateBarcode(oldBarcode: string[]) {
  const VNCode = "893";
  const shopCode = "1709";
  let allBarcode = await prisma.clothDetails.findMany({
    select: {
      codeBar: true,
    },
  });
  if (oldBarcode.length > 0) {
    oldBarcode.forEach((item) => {
      allBarcode.push({ codeBar: item });
    });
  }
  let validBarcode: string[] = [];
  allBarcode.forEach((item) => {
    if (
      item.codeBar?.slice(0, 3) === "893" &&
      item.codeBar.slice(4, 8) === "1709" &&
      item.codeBar.length === 16
    ) {
      validBarcode.push(item.codeBar.slice(9, 14));
    }
  });
  let validBarcodeIntegers: number[] = [];
  if (validBarcode.length === 0) {
    const initialCode = VNCode.concat("", shopCode).concat("", "00000");
    const checkdigit = generateCheckDigit(initialCode);
    const newBarcode = VNCode.concat(" ", shopCode)
      .concat(" ", "00000")
      .concat(" ", checkdigit);
    return newBarcode;
  } else {
    validBarcodeIntegers = validBarcode.map((barcode) => parseInt(barcode, 10));
  }
  // Kết quả cuối cùng là mảng các số hợp lệ từ 0 đến 99999 không trùng lặp
  const finalValidBarcodes: number[] = [];

  for (let i = 0; i <= 99999; i++) {
    // Kiểm tra nếu số không nằm trong khoảng từ 0 đến 99999
    if (!validBarcodeIntegers.includes(i)) {
      finalValidBarcodes.push(i);
    }
  }

  // Tìm số nhỏ nhất trong mảng finalValidBarcodes
  const smallestValidBarcode = Math.min(...finalValidBarcodes);
  const smallestValidBarcodeString = smallestValidBarcode
    .toString()
    .padStart(5, "0");
  const barcodeWithoutCheckdigit = VNCode.concat("", shopCode).concat(
    "",
    smallestValidBarcodeString
  );
  const checkdigit = generateCheckDigit(barcodeWithoutCheckdigit);
  const newBarcode = VNCode.concat(" ", shopCode)
    .concat(" ", smallestValidBarcodeString)
    .concat(" ", checkdigit);
  return newBarcode;
}
async function createClothes(input: CreateClothesInput , req: any){
  const {name, brand, location, initPrice, price, categoryId, clothDetails} = input;
  const result = await prisma.clothes.create({
    data: {
      name: name,
      brand: brand,
      location: location,
      initPrice: initPrice,
      price: price,
      categoryId: categoryId
    }
  });
  return await prisma.clothes.findUnique({
    where:{
      id: result.id
    }
  });
}
async function createClothesDetail( clothesId: string,input: ClothDetails){
  const {barcode, ...rest} = input;
  const result = await prisma.clothDetails.create({
    data:{
      clothId: clothesId,
      codeBar: barcode,
      ...rest
    }
  });
  await prisma.actionLogs.create({
    data:{
      clothDetailId: result.id,
      actionName: 'Thêm mới',
      amount: result.amount
    }
  });
  return result;
}
async function searching(text: string) {
  if(text === ""){
    return null;
  }
  const result = await prisma.clothes.findMany({
    where:{
      OR: [
        {
          name: {
            contains: text
          }
        },
        {
          category:{
            name: {
              contains: text
            }
          }
        }
      ]
    },
    include:{
      clothDetails:{
        select:{
          image1: true
        }
      }
    }
  });
  return result;
}
async function addQuantity(clothDetailId: string, quantity: number){
  const clothDetail = await prisma.clothDetails.findUnique({
    where:{
      id: clothDetailId
    }
  })
  const result = await prisma.clothDetails.update({
    where : {
      id: clothDetailId
    },
    data:{
      amount: clothDetail ? clothDetail.amount + quantity : quantity
    }
  });
  await prisma.actionLogs.create({
    data:{
      actionName: 'Thêm mới',
      clothDetailId: clothDetailId,
      amount: quantity
    }
  });
  return result;
}
async function updateQuantity(clothDetailId: string, quantity: number){
  const oldQuantity = await prisma.clothDetails.findUnique({
    where:{
      id: clothDetailId
    }
  });
  if(oldQuantity){
    if(oldQuantity.amount > quantity){
      await prisma.actionLogs.create({
        data:{
          actionName: 'Bớt đi',
          clothDetailId: clothDetailId,
          amount: oldQuantity.amount - quantity
        }
      })
    }
    if(oldQuantity.amount < quantity){
      await prisma.actionLogs.create({
        data:{
          actionName: 'Thêm mới',
          clothDetailId: clothDetailId,
          amount: quantity - oldQuantity.amount
        }
      })
    }
  }
  const result = await prisma.clothDetails.update({
    where:{
      id: clothDetailId
    },
    data:{
      amount: quantity
    }
  });
  return result;
}
async function getByBarcode(barcode: string){
  const data = await prisma.clothDetails.findUnique({
    where:{
      codeBar: barcode
    },
    select:{
      id: true,
      image1: true,
      size:{
        select:{
          name: true
        }
      },
      color:{
        select:{
          name: true
        }
      },
      cloth:{
        select:{
          name: true
        }
      }
    }
  });
  return data;
}
async function refund(clothDetailId: string, amount: number){
  const data = await prisma.clothDetails.findUnique({
    where:{
      id: clothDetailId
    }
  });
  if(!data){
    throw 'err';
  }
  const update = await prisma.clothDetails.update({
    where:{
      id: clothDetailId
    },
    data:{
      amount: data?.amount + amount
    }
  });
  return update;
}
export default {
  getMaxQuantityClothesByRootCategory,
  getClothesByRootCategory,
  updateSingleClothesInfo,
  getSingleClothesAdmin,
  getMaxQuantityClothes,
  createClothesDetail,
  getAllClothesDetail,
  getAllClothesAdmin,
  exportClothesToCSV,
  getSingleClothes,
  generateBarcode,
  getAllClothes,
  createClothes,
  readExcelFile,
  getByBarcode,
  updateQuantity,
  addQuantity,
  addComment,
  searching,
  refund,
  getQuantityClothDetail,
};
