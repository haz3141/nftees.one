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
    const userEmail = req.body.email;
    const emailExists = await collection.findOne({
      email: userEmail,
    });

    if (!emailExists) {
      await collection.insertOne({
        email: userEmail,
      });
      res.status(201).send(201);
    } else {
      res.status(422).send(422);
    }
  } else {
    res.send(404);
  }
}
