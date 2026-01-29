import { FC, useMemo, useRef, useState } from 'react';
import Typography from '../Typography/Typography';
import {
  ColTitle,
  EventBoxContent,
  EventCol,
  EventTable,
  EventTitle,
  VenueBox,
  Date,
  DetailsContainer,
  OverviewContainer,
  MarkDownEvent,
  Details,
} from './styles';
import { Events } from '@app/services/graphql/types';
import { ISOToDate } from '@app/utils/formatDate';
import LoadingSkeleton from './elements/LoadingSkeleton';
import useClickOutside from '@app/hooks/useClickOutside';
import useLang from '@app/hooks/useLang';
import Button from '../Button';
import theme from '@app/styles/theme';

type Props = {
  subTitle?: string;
  loadingSubTitle?: boolean;
  event?: Events;
  loading?: boolean;
  className?: string;
  showDescription?: boolean;
};

const EventBox: FC<Props> = ({
  subTitle,
  event,
  loading,
  loadingSubTitle,
  className,
  showDescription = true,
}) => {
  const [view, setView] = useState<boolean>(false);
  const ref = useRef<HTMLButtonElement>(null);
  useClickOutside(ref, () => setView(false));

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
    () => (!loading ? `/events/${event?.datum.split('T')[0]}` : ''),
    [event, loading],
  );

  if (loading) {
    return <LoadingSkeleton hasSubTitle={loadingSubTitle} />;
  }

  return (
    <EventBoxContent
      as={showDescription ? 'button' : 'div'}
      className={className}
      $viewDetails={view}
      ref={ref}
    >
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
        <EventTable gridNumber={eventDetails.filter((item) => item.detail).length}>
          {eventDetails.map((event, index) => (
            <>
              {event.detail && (
                <EventCol key={event.title + index} href={showDescriptionContent} target="_blank">
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
      {/*  <DetailsContainer style={{ display: !showDescription ? 'none' : 'flex' }}>
        <Details onClick={showDescriptionContent}>
          {eventDetails.map((event, index) => (
            <span key={event.title + 'detailsContainer' + index}>
              <Typography fontSize="18px">
                {lang === 'en' ? event.titleEn : event.title}: {event.detail}
              </Typography>
              {event.description && <MarkDownEvent content={event.description} />}
            </span>
          ))}
        </Details>

        {event?.ticketLink && (
          <Button
            href={event?.ticketLink}
            newTab
            text={lang === 'en' ? 'Reserve a ticket' : 'Ticket reservieren'}
          />
        )}
      </DetailsContainer> */}
    </EventBoxContent>
  );
};

export default EventBox;
