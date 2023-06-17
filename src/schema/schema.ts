// TODO: 後で消す
/* eslint-disable @typescript-eslint/no-unused-vars */

type GetUserResponse = {
  id: string;
  ranking: number;
  achieves: string[];
};

type GetUsersResponse = GetUserResponse[];

type PatchUserMissionRequest = {
  clear: boolean;
  clearedAt: Date;
};

type GetMissionResponse = {
  id: string;
  name: string;
  description: string;
  achievers: string[];
};

type GetMissionsResponse = GetMissionResponse[];

type PostMissionRequest = {
  name: string;
  description: string;
};

type PostMissionResponse = {
  id: string;
};

type GetRankingResponse = {
  ranking: string[];
};
