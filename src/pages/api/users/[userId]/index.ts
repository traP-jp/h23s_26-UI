import type { NextApiHandler } from 'next';
import type { GetUserResponse } from '@/schema/schema';

const handler: NextApiHandler<GetUserResponse> = (req, res) => {
  const { userId } = req.query;

  res.status(200).json({
    id: userId as string,
    ranking: 15,
    achieves: ['mission-1', 'mission-2'],
  });
};

export default handler;
