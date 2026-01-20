import { fetchGraphQL } from '@app/lib/api';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getEvents(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await fetchGraphQL(
      `query lexikon {
            generalContent(id: "2jtBnER7xiNejTl3cAwSlk") {
                lexikonHeadline
                lexikonDescription
            }
            lexikonCollection(limit: 1000) {
              items {
                kategorie
                titel
                beschreibung
              }
            }
          }`,
    );

    res.status(200).json(data.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
