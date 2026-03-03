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

const Event: FC = () => {
  const lang = useLang();
  const { data, isLoading } = useSWR<EventsPage | null>(`/api/eventsPage?lang=${lang}`, fetcher);
  const router = useRouter();
  const { slug } = router.query;

  const event = data?.eventsCollection.items.find((e) => e?.datum.split('T')[0] === slug);
  const eventDetails = eventDetailsArray(event);

  if (isLoading) {
    return <LoadingSkeletonGeneral />;
  }
  return (
    <>
      <SeoHead
        title={'BENGE Event am ' + ISOToDate(event?.datum, lang === 'en' ? 'en-US' : 'de-De')}
      />
      <Section id={'event' + event?.datum}>
        <>
          <Typography as="h1" fontSize="36px" fontSizeSm="48px" style={{ marginBottom: '24px' }}>
            {lang === 'en' ? 'Event on' : 'Event am'}{' '}
            {event?.datum ? ISOToDate(event.datum, lang === 'en' ? 'en-US' : 'de-De') : ''}
          </Typography>
          <Flex
            justify={'space-between'}
            style={{ marginBottom: '32px' }}
            direction={{ base: 'column', sm: 'row' }}
            gap="md"
          >
            <Typography fontSize="28px" fontSizeSm="32px">
              Venue:{' '}
              <StyledLink href={event?.venueLink || ''} target="_blank">
                {event?.venue}
              </StyledLink>
            </Typography>
            {event?.ticketLink && (
              <Button
                href={event?.ticketLink}
                newTab
                width="25%"
                hoverColor={theme.colors.bg.default}
                text={lang === 'en' ? 'Reserve a ticket' : 'Ticket reservieren'}
              />
            )}
          </Flex>
          {eventDetails.map((event, index) => (
            <span key={event.title + 'detailsContainer' + index}>
              <Typography fontSize="24px" fontSizeSm="28px">
                {lang === 'en' ? event.titleEn : event.title}: {event.detail}
              </Typography>
              <MarkdownConfig content={event.description as string} />
            </span>
          ))}
        </>
      </Section>
    </>
  );
};

export default Event;
