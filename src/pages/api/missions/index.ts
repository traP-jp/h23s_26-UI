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
    {
      id: 'mission-3',
      name: 'Mission 3',
      description: 'Mission 3 description',
      points: 30,
    },
    {
      id: 'mission-4',
      name: 'Mission 4',
      description: 'Mission 4 description',
      points: 40,
    },
    {
      id: 'mission-5',
      name: 'Mission 5',
      description: 'Mission 5 description',
      points: 50,
    },

    {
      id: 'mission-6',
      name: 'Mission 6',
      description: 'Mission 6 description',
      points: 60,
    },
  ]);
};

export default handler;
