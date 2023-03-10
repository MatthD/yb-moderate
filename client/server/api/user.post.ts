import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const userId = Number(body?.userId ?? 0) ;
  // could be better if done in //
  const user = await prisma.users.findUnique({where:{
    id: userId
  }})
  const messages = await prisma.messages.findMany({where:{
    senderId: userId,
  }})
  const medias = await prisma.media.findMany({where:{
    userId: userId
  }})
  return {user, medias, messages}
});
