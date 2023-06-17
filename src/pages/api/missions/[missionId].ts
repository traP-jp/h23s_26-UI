import type { NextApiHandler } from 'next';

const handler: NextApiHandler = (req, res) => {
  if (req.method === 'GET') {
    const { missionId } = req.query;

    res.status(200).json({
      id: missionId,
      name: `Mission ${missionId}`,
      description: `Mission ${missionId} description`,
      points: 10,
    });
  }

  if (req.method === 'POST') {
    return res.status(200).json({ success: true });
  }
};

export default handler;
