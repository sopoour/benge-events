import Section from '@app/components/layout/Section';
import LoadingSkeletonGeneral from '@app/components/LoadingSkeletonGeneral.tsx';
import MarkdownConfig from '@app/components/MarkdownConfig/MarkdownConfig';
import Typography from '@app/components/Typography/Typography';
import { fetcher } from '@app/hooks/fetch/useFetch';
import { GeneralContent } from '@app/services/graphql/types';
import { EventsPage } from '@app/types';
import { FC } from 'react';
import useSWR from 'swr';

const UeberUns: FC = () => {
  const { data, isLoading } = useSWR<EventsPage | null>('/api/eventsPage', fetcher);

  if (isLoading) {
    return <LoadingSkeletonGeneral />;
  }

  return (
    <Section id="events">
      <>
        <Typography as="h1" fontSize="48px">
          {data?.generalContent.eventsHeadline}
        </Typography>
        <MarkdownConfig content={data?.generalContent.eventsDescription as string} />
      </>
    </Section>
  );
};

export default UeberUns;
