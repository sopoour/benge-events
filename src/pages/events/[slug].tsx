import Section from '@app/components/layout/Section';
import LoadingSkeletonGeneral from '@app/components/LoadingSkeletonGeneral.tsx';
import MarkdownConfig from '@app/components/MarkdownConfig/MarkdownConfig';
import Typography from '@app/components/Typography/Typography';
import { fetcher } from '@app/hooks/fetch/useFetch';
import useLang from '@app/hooks/useLang';
import { EventsPage } from '@app/types';
import { ISOToDate } from '@app/utils/formatDate';
import { useRouter } from 'next/router';
import { FC } from 'react';
import useSWR from 'swr';
import Button from '@app/components/Button';
import theme from '@app/styles/theme';
import { Flex } from '@mantine/core';
import styled from 'styled-components';
import Link from 'next/link';
import { header } from '@app/styles/fonts';
import eventDetailsArray from '@app/utils/eventdetails';
import SeoHead from '@app/components/SeoHead';
import { Bubble } from '@app/components/Landing/styles';
import useBubbleAnimation from '@app/hooks/useBubbleAnimation';
import { useMedia } from '@app/hooks/useMedia';
import { Breakpoints } from '@app/styles/media';

const StyledLink = styled(Link)`
  font-size: 28px;
  font-family: ${header.style.fontFamily};
  font-weight: 700;
  ${({ theme }) => theme.media('sm')`
    font-size: 32px;
  `}

  &:hover {
    text-decoration: underline;
  }
`;

const EventSection = styled(Section)`
  gap: 48px;

  ${({ theme }) => theme.media('sm')`
    gap: 120px;
  `}
`;

const Event: FC = () => {
  const lang = useLang();
  const { data, isLoading } = useSWR<EventsPage | null>(`/api/eventsPage?lang=${lang}`, fetcher);
  const router = useRouter();
  const { slug } = router.query;
  const isDesktop = useMedia(Breakpoints.md);

  const event = data?.eventsCollection.items.find((e) => e?.datum.split('T')[0] === slug);
  const eventDetails = eventDetailsArray(event);

  useBubbleAnimation(true);

  if (isLoading) {
    return <LoadingSkeletonGeneral />;
  }
  return (
    <>
      <SeoHead
        title={`BENGE Event am ${
          event?.datum && ISOToDate(event?.datum, lang === 'en' ? 'en-US' : 'de-De')
        }`}
      />
      <EventSection id={'event' + event?.datum}>
        <>
          <Flex direction={'column'} gap={'sm'}>
            <Typography as="h1" fontSize="36px" fontSizeSm="48px">
              {lang === 'en' ? 'Event on' : 'Event am'}{' '}
              {event?.datum ? ISOToDate(event.datum, lang === 'en' ? 'en-US' : 'de-De') : ''}
            </Typography>

            <Typography fontSize="28px" fontSizeSm="32px">
              Venue:{' '}
              <StyledLink href={event?.venueLink || ''} target="_blank">
                {event?.venue}
              </StyledLink>
            </Typography>

            <StyledLink
              href={event?.venueMapLink || ''}
              target="_blank"
              style={{
                fontSize: '18px',

                marginTop: '-16px',
                width: 'max-content',
              }}
            >
              {event?.venueAddress}
            </StyledLink>
            {isDesktop ? (
              <Bubble
                href={event?.ticketLink || ''}
                target="_blank"
                className="bubble"
                style={{
                  top: '0px',
                  right: '0px',
                  width: '400px',
                  height: '400px',
                  opacity: 1,
                }}
              >
                <Typography fontSize="64px">Ticket</Typography>
              </Bubble>
            ) : (
              <Button newTab href={event?.ticketLink || ''} text="Ticket" />
            )}
          </Flex>
          <Flex direction={'column'} gap={'48px'}>
            {eventDetails.map((event, index) => (
              <span key={event.title + 'detailsContainer' + index}>
                <Typography fontSize="24px" fontSizeSm="28px">
                  {lang === 'en' ? event.titleEn : event.title}: {event.detail}
                </Typography>
                {event.time && (
                  <Typography fontSize="18px" fontSizeSm="20px">
                    {event.time}
                  </Typography>
                )}
                <MarkdownConfig content={event.description as string} />
              </span>
            ))}
          </Flex>
        </>
      </EventSection>
    </>
  );
};

export default Event;
