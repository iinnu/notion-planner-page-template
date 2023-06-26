import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';

dayjs.extend(utc);
dayjs.extend(timezone);

const emoji = ['❤️', '🧡', '💛', '💚', '💙', '💜', '🤎'];
const tz = 'Asia/Seoul';

export const getEmoji = () => {
  const day = new Date().getDay();
  return emoji[day];
};

export const getTitle = () => {
  const now = dayjs().tz(tz);
  return now.format('YYYY.MM.DD (ddd)');
};

export const blank = (count) => {
  return Array(count).fill({
    object: 'block',
    paragraph: {
      rich_text: [{ text: { content: '' } }],
    },
  });
};
