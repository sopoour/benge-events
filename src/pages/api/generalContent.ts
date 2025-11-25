import { fetchGraphQL } from '@app/lib/api';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getGeneralContent(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await fetchGraphQL(
      `query {
        generalContent(id: "2jtBnER7xiNejTl3cAwSlk") {
            homepageSubtitle
            aboutHeadline
            aboutText
            awarenessHeadline
            awarenessDescription
            lexikonHeadline
            lexikonDescription
            eventsHeadline
            eventsDescription
            feedbackHeadline
            feedbackDescription
            bewerbungHeadline
            bewerbungDescription
        }
      }`,
    );

    res.status(200).json(data.data.generalContent);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
