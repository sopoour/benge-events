import Section from '@app/components/layout/Section';
import MarkdownConfig from '@app/components/MarkdownConfig/MarkdownConfig';
import MaxWidthContainer from '@app/components/MaxWidthContainer';
import Typography from '@app/components/Typography/Typography';
import { fetcher } from '@app/hooks/fetch/useFetch';
import { GeneralContent } from '@app/services/graphql/types';
import { FC } from 'react';
import useSWR from 'swr';

const UeberUns: FC = () => {
  const { data, isLoading } = useSWR<GeneralContent | null>('/api/generalContent', fetcher);

  return (
    <Section id="about">
      <>
        <Typography as="h1" fontSize="48px">
          {data?.aboutHeadline}
        </Typography>
        <MarkdownConfig content={data?.aboutText as string} />
      </>
    </Section>
  );
};

export default UeberUns;
