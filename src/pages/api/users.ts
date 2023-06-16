import type { NextApiHandler } from 'next';

const handler: NextApiHandler = async (req, res) => {
  res.status(200).json({ name: 'John Doe' });
};

export default handler;
