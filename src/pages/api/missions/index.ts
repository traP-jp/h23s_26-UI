import type { NextApiHandler } from 'next';

const handler: NextApiHandler = (req, res) => {
  res.status(200).json([
    {
      id: 'mission-1',
      name: 'Mission 1',
      description: 'Mission 1 description',
      points: 10,
    },
    {
      id: 'mission-2',
      name: 'Mission 2',
      description: 'Mission 2 description',
      points: 20,
    },
  ]);
};

export default handler;
