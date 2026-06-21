import { fetchGraphQL } from '@app/lib/api';
import { getLocaleFromRequest } from '@app/lib/getLocalFromRequest';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getHomepage(req: NextApiRequest, res: NextApiResponse) {
  try {
    const locale = getLocaleFromRequest(req);
    const data = await fetchGraphQL(
      `query homePage($locale: String!) {
            generalContent(id: "2jtBnER7xiNejTl3cAwSlk", locale: $locale) {
              homepageSubtitle
            }
            eventsCollection(limit: 10, locale: $locale) {
              items {
                datum
                datumFallback
                venue
                workshopTitel
                workshopZeit
                konzertTitel
                konzertZeit
                konzert2Titel
                konzert2Zeit
                djTitel
                djZeit
                dj2Titel
                dj2Zeit
                dj3Titel
                dj3Zeit
                ticketLink
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
