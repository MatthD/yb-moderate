import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const userId = Number(body?.userId ?? 0) ;
  // could be better if done in //
  const user = await prisma.users.findUnique({where:{
    id: userId
  }})
  await prisma.users.update({data:{isDeleted: !user?.isDeleted},where:{id: user?.id,}})
});
