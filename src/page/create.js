import { notion, databaseId } from '../client.js';
import { getEmoji, getTitle, blank } from '../utils.js';

export default async function createPage() {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      icon: {
        type: 'emoji',
        emoji: getEmoji(),
      },
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
      children: [
        {
          object: 'block',
          heading_1: {
            rich_text: [
              {
                text: {
                  content: '✅ TODO',
                },
              },
            ],
            color: 'brown_background',
          },
        },
        {
          object: 'block',
          to_do: {
            rich_text: [
              {
                text: {
                  content: '알고리즘 1문제',
                },
              },
            ],
          },
        },
        ...blank(4),
        {
          object: 'block',
          heading_1: {
            rich_text: [
              {
                text: {
                  content: '✏️ TODO',
                },
              },
            ],
            color: 'yellow_background',
          },
        },
        ...blank(4),
        {
          object: 'block',
          heading_1: {
            rich_text: [
              {
                text: {
                  content: '🤔 RETRO',
                },
              },
            ],
            color: 'pink_background',
          },
        },
        ...blank(4),
      ],
    });
    console.log(response);
    console.log('Success! Entry added.');
  } catch (err) {
    console.err(err);
  }
}
