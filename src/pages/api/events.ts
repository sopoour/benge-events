import { fetchGraphQL } from '@app/lib/api';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getEvents(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await fetchGraphQL(
      `query {
            eventsCollection(limit: 1000) {
              items {
                datum
                venue
                ticketLink
                workshopTitel
                workshopBeschreibung
                konzertTitel
                konzertBeschreibung
                djTitel
                djBeschreibung
              }
            }
          }`,
    );

    res.status(200).json(data.data.eventsCollection.items);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
