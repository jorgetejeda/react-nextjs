import Database from '@database';
import { NextApiRequest, NextApiResponse } from 'next';

const getProductById = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new Database();
  const { id } = request.query;
  const entry = await db.getById(id as string);

  response.status(200).json(entry)
}

export default getProductById;