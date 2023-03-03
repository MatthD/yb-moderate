import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log({body})
  const userID = Number(body?.userId ?? 0) ;
  return prisma.users.findUnique({where:{
    id: userID
  }})
});
