import createPage from './src/page/create.js';

export const handler = async function () {
  const result = await createPage();
  return {
    status: 200,
    body: JSON.stringify(result),
  };
};
