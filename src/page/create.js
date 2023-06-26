import { notion, databaseId } from '../client.js';
import { getEmoji, getTitle } from '../utils.js';

export default async function createPage() {
  try {
    const response = await notion.pages.create({
      icon: {
        type: 'emoji',
        emoji: getEmoji(),
      },
      parent: { database_id: databaseId },
      properties: {
        title: {
          title: [
            {
              text: {
                content: getTitle(),
              },
            },
          ],
        },
      },
    });
  } catch {}
}
