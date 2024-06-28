import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const tasks = [
    {
      title: 'First Task',
      description: 'This is the first task',
      completed: false,
    },
    {
      title: 'Second Task',
      description: 'This is the second task',
      completed: false,
    },
    {
      title: 'Third Task',
      description: 'This is the third task',
      completed: true,
    },
  ];

  for (const task of tasks) {
    await prisma.task.create({
      data: task,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
