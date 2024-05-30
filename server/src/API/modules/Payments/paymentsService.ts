import { PrismaClient } from "@prisma/client";
import { sortObject } from "../../../utils/sortObject";
import moment from "moment";
import { generateURL } from "../../../utils/vnpay";

const prisma = new PrismaClient();

async function vnpay(req: any) {
    const url = generateURL(req);
    return url;
}

export default { vnpay };
