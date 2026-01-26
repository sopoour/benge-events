import { fetchGraphQL } from '@app/lib/api';
import { getLocaleFromRequest } from '@app/lib/getLocalFromRequest';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function getLexikon(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const locale = getLocaleFromRequest(req);

    const data = await fetchGraphQL(
      `query lexikon($locale: String!) {
        generalContent(id: "2jtBnER7xiNejTl3cAwSlk", locale: $locale) {
          lexikonHeadline
          lexikonDescription
        }
        lexikonCollection(limit: 1000, locale: $locale) {
          items {
            kategorie
            titel
            beschreibung
            orderNumber
          }
        }
      }
      `,
      { locale }
    );

    res.status(200).json(data.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
