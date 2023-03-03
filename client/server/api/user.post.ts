import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (user) => {
  console.log('DATA sent from front to back for user', user)
});
