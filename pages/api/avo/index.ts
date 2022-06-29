import Database from '@database';
import { NextApiRequest, NextApiResponse } from 'next';

const allAvos = async (request: NextApiRequest, response: NextApiResponse<TProduct[]>) => {
  const db = new Database();
  const allEntries: TProduct[] = await db.getAll();
  const lenght = allEntries.length;
  response.statusCode = 200
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify({ data: allEntries, lenght}))
}

export default allAvos