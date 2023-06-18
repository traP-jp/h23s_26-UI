export const getApiBaseUrl = () => {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL ?? 'https://mission.trap.games/api/v1'
  );
};
