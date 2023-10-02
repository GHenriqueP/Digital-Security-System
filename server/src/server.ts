import express from 'express'
import { router } from './routes'
import { database } from './database';

const PORT = 3000;

const app = express()
app.use(express.json())
app.use(router)

async function main() {
  await database.$connect();
  app.listen(PORT, () => console.log('The server is Running!'));
}

main();