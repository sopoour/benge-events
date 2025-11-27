import { fetchGraphQL } from '@app/lib/api';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function legalPages(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await fetchGraphQL(
      `query {
        legalPages(id: "3gTLFQAIVT2W2uxreQXieK") {
            impressum
            datenschutz
        }
      }`,
    );

    res.status(200).json(data.data.legalPages);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
