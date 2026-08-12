import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const host: string = process.env.HOST || "localhost";

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});


