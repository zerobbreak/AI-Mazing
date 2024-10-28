import { PrismaClient } from "@prisma/client";

//Create a new instance of PrismaCLient
const prisma = new PrismaClient();

//Export the instance
export default prisma;