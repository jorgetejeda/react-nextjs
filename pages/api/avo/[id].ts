import Database from '@database';
import { NextApiRequest, NextApiResponse } from 'next';

const getProductById = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new Database();
  const { id } = request.query;
  const entry = await db.getById(id as string);

  response.statusCode = 200;
  response.setHeader('Content-type', 'application/json')
  response.end(JSON.stringify({ data: entry }))
}

export default getProductById;