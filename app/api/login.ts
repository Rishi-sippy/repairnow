// pages/api/login.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import clientPromise from '../lib/mongodb';

// 1) Define exactly what you expect the client to send
interface LoginBody {
    email: string;
    password: string;
}

// 2) Define the shape of the user you’ll return
interface APIUser {
    id: string;
    name: string;
    email: string;
    phone: string;
}

// 3) Define your response payload—no `any` anywhere
type Data =
    | { message: string }
    | { message: string; user: APIUser };

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    // 4) Cast req.body to your LoginBody so there's no `any`
    const { email, password } = req.body as LoginBody;

    if (!email || !password) {
        return res.status(400).json({ message: 'Missing email or password' });
    }

    try {
        const client = await clientPromise;
        const db = client.db(); // "strangersdb"
        const user = await db.collection('users').findOne<{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
            _id: any; name: string; email: string; phone: string; password: string
        }>({ email });

        if (!user) {
            return res.status(404).json({ message: 'No user found' });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const safeUser: APIUser = {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            phone: user.phone,
        };

        return res.status(200).json({ message: 'Signed in!', user: safeUser });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
