import Section from '@app/components/layout/Section';
import LoadingSkeletonGeneral from '@app/components/LoadingSkeletonGeneral.tsx';
import MarkdownConfig from '@app/components/MarkdownConfig/MarkdownConfig';
import Typography from '@app/components/Typography/Typography';
import { fetcher } from '@app/hooks/fetch/useFetch';
import { GeneralContent } from '@app/services/graphql/types';
import { FC } from 'react';
import useSWR from 'swr';

const Lexikon: FC = () => {
  const { data, isLoading } = useSWR<GeneralContent | null>('/api/generalContent', fetcher);

  if (isLoading) {
    return <LoadingSkeletonGeneral />;
  }

  return (
    <Section id="lexikon">
      <>
        <Typography as="h1" fontSize="48px">
          {data?.lexikonHeadline}
        </Typography>
        <MarkdownConfig content={data?.lexikonDescription as string} />
      </>
    </Section>
  );
};

export default Lexikon;
