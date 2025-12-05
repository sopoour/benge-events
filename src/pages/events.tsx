import EventBox from '@app/components/EventBox';
import Section from '@app/components/layout/Section';
import MarkdownConfig from '@app/components/MarkdownConfig/MarkdownConfig';
import Typography from '@app/components/Typography/Typography';
import { fetcher } from '@app/hooks/fetch/useFetch';
import { flexColumn } from '@app/styles/mixins';
import { EventsPage } from '@app/types';
import { normalizeDate } from '@app/utils/formatDate';
import { FC } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import EventAccordion from '@app/components/EventAccordion';
import LoadingSkeleton from '@app/components/EventBox/elements/LoadingSkeleton';
import Skeleton from 'react-loading-skeleton';
import { useMedia } from '@app/hooks/useMedia';
import { Breakpoints } from '@app/styles/media';
import LoadingSkeletonMobile from '@app/components/EventAccordion/LoadingSkeleton';

const EventSection = styled.div`
  ${flexColumn};
  gap: 20px;
  width: 100%;
`;

const EventBoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  width: 100%;

  ${({ theme }) => theme.media('sm')`
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  `}
`;

const EventAccordionPast = styled(EventAccordion)`
  display: flex !important;
`;

const SkeletonContent = styled.div`
  ${flexColumn};
  gap: 16px;
`;

const Events: FC = () => {
  const { data, isLoading } = useSWR<EventsPage | null>('/api/eventsPage', fetcher);
  const today = new Date();
  const isDesktop = useMedia(Breakpoints.sm);

  today.setHours(0, 0, 0, 0); // Strip time from today

  const upcomingEvents = data?.eventsCollection.items
    ?.filter((event) => normalizeDate(event.datum) >= today)
    ?.sort((a, b) => normalizeDate(a.datum).getTime() - normalizeDate(b.datum).getTime());

  const pastEvents = data?.eventsCollection.items
    ?.filter((event) => normalizeDate(event.datum) < today)
    ?.sort((a, b) => normalizeDate(b.datum).getTime() - normalizeDate(a.datum).getTime());

  if (isLoading) {
    return (
      <Section>
        <>
          <Skeleton height={40} width={300} style={{ margin: '28px 0' }} />
          <SkeletonContent>
            <Skeleton height={20} width="80%" />
            <Skeleton height={20} width="100%" />
            <Skeleton height={30} width="75%" style={{ marginTop: '24px' }} />
          </SkeletonContent>
          {isDesktop ? (
            <EventBoxContainer>
              <LoadingSkeleton />
              <LoadingSkeleton />
            </EventBoxContainer>
          ) : (
            <EventBoxContainer>
              <LoadingSkeletonMobile />
              <LoadingSkeletonMobile />
              <LoadingSkeletonMobile />
            </EventBoxContainer>
          )}
        </>
      </Section>
    );
  }

  return (
    <Section id="events">
      <>
        <Typography as="h1" fontSize="48px">
          {data?.generalContent.eventsHeadline}
        </Typography>
        <MarkdownConfig content={data?.generalContent.eventsDescription as string} />
        <EventSection>
          <Typography as="h2" fontSizeSm="40px" fontSize="32px">
            Kommende Events
          </Typography>
          <EventBoxContainer>
            {upcomingEvents?.map((event) => (
              <EventBox key={event.datum} event={event} loading={isLoading} />
            ))}
            {upcomingEvents?.map((event) => (
              <EventAccordion key={event.datum + 'mobile'} event={event} loading={isLoading} />
            ))}
          </EventBoxContainer>
        </EventSection>
        {pastEvents && pastEvents?.length > 0 && (
          <EventSection>
            <Typography as="h2" fontSizeSm="40px" fontSize="32px">
              Vergangene Events
            </Typography>
            <EventBoxContainer style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {pastEvents?.map((event) => (
                <EventAccordionPast
                  key={event.datum + 'past'}
                  event={event}
                  loading={isLoading}
                  hasDetailsHeader
                />
              ))}
            </EventBoxContainer>
          </EventSection>
        )}
      </>
    </Section>
  );
};

export default Events;
