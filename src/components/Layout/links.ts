import { IconCrown, IconHome, IconTargetArrow } from '@tabler/icons-react';

export const links = [
  { Icon: IconHome, link: '/dashboard', label: 'DashBoard' },
  { Icon: IconTargetArrow, link: '/missions', label: 'Missions' },
  { Icon: IconCrown, link: 'ranking', label: 'Ranking' },
] as const;
