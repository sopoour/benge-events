import { fetchGraphQL } from '@app/lib/api';
import { getLocaleFromRequest } from '@app/lib/getLocalFromRequest';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getEvents(req: NextApiRequest, res: NextApiResponse) {
  try {
    const locale = getLocaleFromRequest(req);
    const data = await fetchGraphQL(
      `query eventsPage($locale: String!) {
            generalContent(id: "2jtBnER7xiNejTl3cAwSlk", locale: $locale) {
                eventsHeadline
                eventsDescription
            }
            eventsCollection(limit: 1000, locale: $locale) {
              items {
                datum
                optionaleNotiz
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
          { locale }
    );

    res.status(200).json(data.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
