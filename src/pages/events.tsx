import EventBox from '@app/components/EventBox';
import Section from '@app/components/layout/Section';
import LoadingSkeletonGeneral from '@app/components/LoadingSkeletonGeneral.tsx';
import MarkdownConfig from '@app/components/MarkdownConfig/MarkdownConfig';
import Typography from '@app/components/Typography/Typography';
import { fetcher } from '@app/hooks/fetch/useFetch';
import { flexColumn, flexRow } from '@app/styles/mixins';
import { EventsPage } from '@app/types';
import { normalizeDate } from '@app/utils/formatDate';
import { FC } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';

const EventSection = styled.div`
  ${flexColumn};
  gap: 20px;
  width: 100%;
`;

const EventBoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  width: 100%;

  ${({ theme }) => theme.media('sm')`
  grid-template-columns: 1fr 1fr;
  `}
`;

const Events: FC = () => {
  const { data, isLoading } = useSWR<EventsPage | null>('/api/eventsPage', fetcher);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Strip time from today

  const upcomingEvents = data?.eventsCollection.items
    ?.filter((event) => normalizeDate(event.datum) >= today)
    ?.sort((a, b) => normalizeDate(a.datum).getTime() - normalizeDate(b.datum).getTime());

  const pastEvents = data?.eventsCollection.items
    ?.filter((event) => normalizeDate(event.datum) < today)
    ?.sort((a, b) => normalizeDate(b.datum).getTime() - normalizeDate(a.datum).getTime());

  return (
    <Section id="events">
      <>
        {isLoading ? (
          <LoadingSkeletonGeneral />
        ) : (
          <>
            <Typography as="h1" fontSize="48px">
              {data?.generalContent.eventsHeadline}
            </Typography>
            <MarkdownConfig content={data?.generalContent.eventsDescription as string} />
          </>
        )}
        <EventSection>
          <Typography as="h2" fontSizeSm="40px" fontSize="32px">
            Kommende Events
          </Typography>
          <EventBoxContainer>
            {upcomingEvents?.map((event) => <EventBox event={event} loading={isLoading} />)}
          </EventBoxContainer>
        </EventSection>
        {pastEvents && pastEvents?.length > 0 && (
          <EventSection>
            <Typography as="h2" fontSizeSm="40px" fontSize="32px">
              Vergangene Events
            </Typography>
            <EventBoxContainer>
              {pastEvents?.map((event) => <EventBox event={event} loading={isLoading} />)}
            </EventBoxContainer>
          </EventSection>
        )}
      </>
    </Section>
  );
};

export default Events;
