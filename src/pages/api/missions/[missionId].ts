import type { NextApiHandler } from 'next';
import type { GetMissionResponse, PostMissionResponse } from '@/schema/schema';

const handler: NextApiHandler<GetMissionResponse | PostMissionResponse> = (
  req,
  res,
) => {
  if (req.method === 'GET') {
    const { missionId } = req.query;

    res.status(200).json({
      id: missionId as string,
      name: `Mission ${missionId}`,
      description: `Mission ${missionId} description`,
      achievers: ['cp20'],
    });
  }

  if (req.method === 'POST') {
    return res.status(200).json({ id: 'f4e39425-42c5-4a23-88ce-fa1b2ac70033' });
  }
};

export default handler;
