export const getRankSuffix = (rank: number) => {
  if (rank === 1) {
    return 'st';
  }
  if (rank === 2) {
    return 'nd';
  }
  if (rank === 3) {
    return 'rd';
  }
  return 'th';
};
