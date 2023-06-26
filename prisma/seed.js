import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      id: 1,
      name: 'matheus',
      email: 'gf@gmail.com',
    },
  });
    const comment = await prisma.comment.create({
        data: {
            id: 1,
            text: 'Aprendi Muito',
            userId: 1,
        }

    });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });