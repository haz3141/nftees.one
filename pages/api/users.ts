import type {NextApiRequest, NextApiResponse} from 'next';
import clientPromise from '../../lib/mongodb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db('appdb');
  const collection = db.collection('users');

  if (req.method === 'POST') {
    await collection.insertOne({
      email: req.body,
    });
    res.send(201);
  } else {
    res.send(404);
  }
}
