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
                venueLink
                venueMapLink
                venueAddress
                ticketLink
                workshopTitel
                workshopZeit
                workshopLink
                workshopHost
                workshopBeschreibung
                konzertTitel
                konzertZeit
                konzertLink
                konzertBeschreibung
                 konzert2Titel
                konzert2Zeit
                konzert2Link
                konzert2Beschreibung
                djTitel
                djZeit
                djLink
                djBeschreibung
                dj2Titel
                dj2Zeit
                dj2Link
                dj2Beschreibung
                dj3Titel
                dj3Zeit
                dj3Link
                dj3Beschreibung
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
