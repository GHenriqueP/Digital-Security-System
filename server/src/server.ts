import { PrismaClient } from '@prisma/client';
import express from 'express';

const app = express();

app.use(express.json());

const PORT = 3000;

const prisma = new PrismaClient({
  log: ['query'],
});

app.get('/systems', async (request, response) => {
  const systems = await prisma.system.findMany({})

  return response.json(systems)
})

async function main() {
  await prisma.$connect();
  app.listen(PORT, () => console.log('O servidor está ativo!'));
}

main();