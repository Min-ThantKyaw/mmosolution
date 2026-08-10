import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const port: number = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port);

console.log(`APP is running on http://localhost:${port}`);
