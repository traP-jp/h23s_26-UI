import type { NextApiHandler } from 'next';
import type { GetMissionsResponse } from '@/schema/schema';

const handler: NextApiHandler<GetMissionsResponse> = (req, res) => {
  res.status(200).json([
    {
      id: 'mission-1',
      name: 'Mission 1',
      description: 'Mission 1 description',
      achievers: ['cp20'],
    },
    {
      id: 'mission-2',
      name: 'Mission 2',
      description: 'Mission 2 description',
      achievers: ['cp20', 'Kuryu'],
    },
    {
      id: 'mission-3',
      name: 'Mission 3',
      description: 'Mission 3 description',
      achievers: [],
    },
    {
      id: 'mission-4',
      name: 'Mission 4',
      description: 'Mission 4 description',
      achievers: [],
    },
    {
      id: 'mission-5',
      name: 'Mission 5',
      description: 'Mission 5 description',
      achievers: ['cp20'],
    },
    {
      id: 'mission-6',
      name: 'Mission 6',
      description: 'Mission 6 description',
      achievers: [],
    },
  ]);
};

export default handler;
