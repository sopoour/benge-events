import { fetchGraphQL } from '@app/lib/api';
import { getLocaleFromRequest } from '@app/lib/getLocalFromRequest';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getGeneralContent(req: NextApiRequest, res: NextApiResponse) {
  try {
    const locale = getLocaleFromRequest(req);
    const data = await fetchGraphQL(
      `query generalContent($locale: String!) {
        generalContent(id: "2jtBnER7xiNejTl3cAwSlk", locale: $locale) {
            aboutHeadline
            aboutText
            feedbackHeadline
            feedbackDescription
            bewerbungHeadline
            bewerbungDescription
        }
      }`,
      { locale }
    );

    res.status(200).json(data.data.generalContent);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
