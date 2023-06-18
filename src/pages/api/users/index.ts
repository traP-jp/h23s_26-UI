import type { NextApiHandler } from 'next';
import type { GetUsersResponse } from '@/schema/schema';

const handler: NextApiHandler<GetUsersResponse> = (req, res) => {
  res.status(200).json([
    {
      id: 'cp20',
      ranking: 1,
      achieves: ['mission-1', 'mission-2'],
    },
    {
      id: 'Kuryu',
      ranking: 2,
      achieves: ['mission-1'],
    },
  ]);
};

export default handler;
