import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import clientPromise from '../lib/mongodb';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Data = { message: string; user?: any };

interface RegisterBody {
    name:   string;
    email:  string;
    phone:  string;
    password:string;
  }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  const { name, email, phone, password } = req.body as RegisterBody;
  if (!name || !email || !phone || !password) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const client = await clientPromise;
  const db = client.db();
  const exists = await db.collection('users').findOne({ email });
  if (exists) return res.status(409).json({ message: 'Email already in use' });

  const hash = await bcrypt.hash(password, 10);
  const result = await db
    .collection('users')
    .insertOne({ name, email, phone, password: hash, createdAt: new Date() });

  const user = { name, email, phone, id: result.insertedId.toString() };
  res.status(201).json({ message: 'Registered!', user });
}
