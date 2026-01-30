import { FC, useMemo } from 'react';
import Typography from '../Typography/Typography';
import {
  ColTitle,
  EventBoxContent,
  EventCol,
  EventTable,
  EventTitle,
  VenueBox,
  Date,
  OverviewContainer,
} from './styles';
import { Events } from '@app/services/graphql/types';
import { ISOToDate } from '@app/utils/formatDate';
import LoadingSkeleton from './elements/LoadingSkeleton';
import useLang from '@app/hooks/useLang';
import Button from '../Button';
import theme from '@app/styles/theme';

type Props = {
  subTitle?: string;
  loadingSubTitle?: boolean;
  event?: Events;
  loading?: boolean;
  className?: string;
};

const EventBox: FC<Props> = ({ subTitle, event, loading, loadingSubTitle, className }) => {
  const lang = useLang();

  const eventDetails = [
    {
      title: 'Workshop',
      titleEn: 'Workshop',
      detail: event?.workshopTitel,
      description: event?.workshopBeschreibung,
    },
    {
      title: 'Konzert',
      titleEn: 'Concert',
      detail: event?.konzertTitel,
      description: event?.konzertBeschreibung,
    },
    { title: 'DJ', titleEn: 'DJ', detail: event?.djTitel, description: event?.djBeschreibung },
  ];

  const showDescriptionContent = useMemo(
    () =>
      !loading ? `/events/${event?.datum.split('T')[0]}${lang === 'en' ? '?lang=en' : ''}` : '',
    [event, loading],
  );

  if (loading) {
    return <LoadingSkeleton hasSubTitle={loadingSubTitle} />;
  }

  return (
    <EventBoxContent className={className}>
      <OverviewContainer>
        {subTitle && (
          <Typography fontSize="16px" fontSizeSm="18px">
            {subTitle}
          </Typography>
        )}
        <Date>{event?.datum ? ISOToDate(event?.datum) : ''}</Date>
        {event?.optionaleNotiz && (
          <Typography fontSize="16px" fontSizeSm="18px" style={{ marginTop: '-12px' }}>
            {event?.optionaleNotiz}
          </Typography>
        )}
        <VenueBox
          $tba={event?.venue?.includes('tba')}
          href={showDescriptionContent}
          target="_blank"
        >
          {event?.venue?.includes('tba') ? (
            <>
              <Typography $textalign="center" fontSize="16px" fontSizeSm="20px" lineHeight="1.25">
                {lang === 'en' ? 'Your' : 'hier könnte deine'}
              </Typography>
              <Typography $textalign="center" fontSize="24px" fontSizeSm="36px" fontWeight={900}>
                VENUE
              </Typography>
              <Typography $textalign="center" fontSize="16px" fontSizeSm="20px" lineHeight="1.25">
                {lang === 'en' ? 'could be here' : 'stehen'}
              </Typography>
            </>
          ) : (
            <Typography $textalign="center" fontSize="20px" fontSizeSm="28px" fontWeight={900}>
              {event?.venue}
            </Typography>
          )}
        </VenueBox>
        <EventTable gridnumber={eventDetails.filter((item) => item.detail).length}>
          {eventDetails.map((event, index) => (
            <>
              {event.detail && (
                <EventCol
                  key={event.title + event.titleEn + index}
                  href={showDescriptionContent}
                  target="_blank"
                >
                  <ColTitle>{lang === 'en' ? event.titleEn : event.title}</ColTitle>
                  <EventTitle fontSize="14px" fontSizeSm="16px">
                    {event.detail}
                  </EventTitle>
                </EventCol>
              )}
            </>
          ))}
        </EventTable>
        {event?.ticketLink && (
          <Button
            href={event?.ticketLink}
            newTab
            hoverColor={theme.colors.bg.default}
            text={lang === 'en' ? 'Reserve a ticket' : 'Ticket reservieren'}
          />
        )}
      </OverviewContainer>
    </EventBoxContent>
  );
};

export default EventBox;
