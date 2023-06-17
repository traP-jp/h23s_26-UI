import type { NextApiHandler } from 'next';
import type { GetRankingResponse } from '@/schema/schema';

const handler: NextApiHandler = (req, res) => {
  // const { filter, limit } = req.query;

  const ranking: GetRankingResponse = {
    ranking: [
      'cp20',
      'Kuryu',
      'ras',
      'mizoreyuki',
      'alt--er',
      'kazuki',
      'kazuki',
      'kazuki',
      'kazuki',
      'kazuki',
    ],
  };

  res.status(200).json(ranking);
};

export default handler;
