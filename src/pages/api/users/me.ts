import type { NextApiHandler } from 'next';
import type { GetUserResponse } from '@/schema/schema';

const handler: NextApiHandler<GetUserResponse> = (req, res) => {
  res
    .status(200)
    .json({ id: 'cp20', ranking: 15, achieves: ['mission-1', 'mission-2'] });
};

export default handler;
