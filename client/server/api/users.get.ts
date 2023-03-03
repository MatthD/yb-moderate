import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const NB_USE_PER_PAGE = 30;

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const pageNb = (query?.page ?? 0) as number; 
  console.log({pageNb})
  const users = await prisma.users.findMany({take: NB_USE_PER_PAGE, skip: NB_USE_PER_PAGE*pageNb});
  console.log({users})
  return users;
});
