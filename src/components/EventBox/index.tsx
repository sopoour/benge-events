import { FC } from 'react';
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
} from './styles';
import { Events } from '@app/services/graphql/types';
import { ISOToDate } from '@app/utils/formatDate';
import LoadingSkeleton from './LoadingSkeleton';

type Props = {
  subTitle?: string;
  loadingSubTitle?: boolean;
  event?: Events;
  loading?: boolean;
  className?: string;
};

const EventBox: FC<Props> = ({ subTitle, event, loading, loadingSubTitle, className }) => {
  const eventDetails = [
    { title: 'Workshop', detail: event?.workshopTitel },
    { title: 'Konzert', detail: event?.konzertTitel },
    { title: 'DJ', detail: event?.djTitel },
  ];

  if (loading) {
    return <LoadingSkeleton hasSubTitle={loadingSubTitle} />;
  }

  return (
    <EventBoxContent className={className}>
      {subTitle && (
        <Typography fontSize="16px" fontSizeSm="18px">
          {subTitle}
        </Typography>
      )}
      <Date>{event?.datum ? ISOToDate(event?.datum) : ''}</Date>
      <VenueBox $tba /* ={event?.venue?.includes('tba')} */>
        {event?.venue?.includes('tba') ? (
          <>
            <Typography $textalign="center" fontSize="16px" fontSizeSm="20px" lineHeight="1.25">
              hier könnte deine
            </Typography>
            <Typography $textalign="center" fontSize="28px" fontSizeSm="36px" fontWeight={900}>
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
          <EventCol key={event.title}>
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
    </EventBoxContent>
  );
};

export default EventBox;
