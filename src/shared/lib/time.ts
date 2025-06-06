import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const getTimeAgo = (date: string) => {
  const timeAgo = dayjs(date).fromNow();

  return timeAgo;
};
