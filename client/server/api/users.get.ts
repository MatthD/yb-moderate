import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const users = await prisma.users.findMany({take: 30, });
  // const users = await prisma.users.findMany({
  //   select:{}
  // });
  return users
});
