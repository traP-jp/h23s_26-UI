import type { NextApiHandler } from 'next';

const handler: NextApiHandler = (req, res) => {
  res
    .status(200)
    .json({ id: 'cp20', ranking: 15, achieves: ['mission-1', 'mission-2'] });
};

export default handler;
