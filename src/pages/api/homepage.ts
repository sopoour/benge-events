import { fetchGraphQL } from '@app/lib/api';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getHomepage(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await fetchGraphQL(
      `query {
            generalContent(id: "2jtBnER7xiNejTl3cAwSlk") {
              homepageSubtitle
            }
            eventsCollection(limit: 4) {
              items {
                datum
                venue
                workshopTitel
                konzertTitel
                djTitel
                ticketLink
              }
            }
        }`,
    );

    res.status(200).json(data.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
