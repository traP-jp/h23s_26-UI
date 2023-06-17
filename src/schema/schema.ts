export type GetUserResponse = {
  id: string;
  ranking: number;
  achieves: string[];
};

export type GetUsersResponse = GetUserResponse[];

export type PatchUserMissionRequest = {
  clear: boolean;
  clearedAt: Date;
};

export type GetMissionResponse = {
  id: string;
  name: string;
  description: string;
  achievers: string[];
};

export type GetMissionsResponse = GetMissionResponse[];

export type PostMissionRequest = {
  name: string;
  description: string;
};

export type PostMissionResponse = {
  id: string;
};

export type GetRankingResponse = {
  ranking: string[];
};
