import type { NextApiHandler } from 'next';

const handler: NextApiHandler = (req, res) => {
  const { userId } = req.query;

  res
    .status(200)
    .json({ id: userId, ranking: 15, achieves: ['mission-1', 'mission-2'] });
};

export default handler;
