import { FC, useRef, useState } from 'react';
import Typography from '../Typography/Typography';
import {
  ColTitle,
  EventBoxContent,
  EventCol,
  EventTable,
  EventTitle,
  VenueBox,
  Date,
  EventButton,
  DetailsContainer,
  OverviewContainer,
  MarkDownEvent,
  Details,
} from './styles';
import { Events } from '@app/services/graphql/types';
import { ISOToDate } from '@app/utils/formatDate';
import LoadingSkeleton from './elements/LoadingSkeleton';
import useClickOutside from '@app/hooks/useClickOutside';

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

  const eventDetails = [
    { title: 'Workshop', detail: event?.workshopTitel, description: event?.workshopBeschreibung },
    { title: 'Konzert', detail: event?.konzertTitel, description: event?.konzertBeschreibung },
    { title: 'DJ', detail: event?.djTitel, description: event?.djBeschreibung },
  ];

  const showDescriptionContent = () => showDescription && setView((prev) => !prev);

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
        <VenueBox $tba /* ={event?.venue?.includes('tba')} */ onClick={showDescriptionContent}>
          {event?.venue?.includes('tba') ? (
            <>
              <Typography $textalign="center" fontSize="16px" fontSizeSm="20px" lineHeight="1.25">
                hier könnte deine
              </Typography>
              <Typography $textalign="center" fontSize="24px" fontSizeSm="36px" fontWeight={900}>
                VENUE
              </Typography>
              <Typography $textalign="center" fontSize="16px" fontSizeSm="20px" lineHeight="1.25">
                stehen
              </Typography>
            </>
          ) : (
            <Typography $textalign="center" fontSize="20px" fontSizeSm="28px" fontWeight={900}>
              {event?.venue}
            </Typography>
          )}
        </VenueBox>
        <EventTable>
          {eventDetails.map((event) => (
            <EventCol key={event.title} onClick={showDescriptionContent}>
              <ColTitle>{event.title}</ColTitle>
              <EventTitle fontSize="14px" fontSizeSm="16px">
                {event.detail}
              </EventTitle>
            </EventCol>
          ))}
        </EventTable>
        {event?.ticketLink && (
          <EventButton href={event?.ticketLink} target="_blank">
            Ticket reservieren
          </EventButton>
        )}
      </OverviewContainer>
      <DetailsContainer style={{ display: !showDescription ? 'none' : 'flex' }}>
        <Details onClick={showDescriptionContent}>
          {eventDetails.map((event) => (
            <>
              <Typography fontSize="18px">
                {event.title}: {event.detail}
              </Typography>
              {event.description && <MarkDownEvent content={event.description} />}
            </>
          ))}
        </Details>

        {event?.ticketLink && (
          <EventButton href={event?.ticketLink} target="_blank">
            Ticket reservieren
          </EventButton>
        )}
      </DetailsContainer>
    </EventBoxContent>
  );
};

export default EventBox;
