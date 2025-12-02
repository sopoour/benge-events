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
} from './styles';
import { Events } from '@app/services/graphql/types';
import { ISOToDate } from '@app/utils/formatDate';
import LoadingSkeleton from './LoadingSkeleton';

type Props = {
  subTitle?: string;
  loadingSubTitle?: boolean;
  event?: Events;
  loading?: boolean;
};

const EventBox: FC<Props> = ({ subTitle, event, loading, loadingSubTitle }) => {
  const eventDetails = [
    { title: 'Workshop', detail: event?.workshopTitel },
    { title: 'Konzert', detail: event?.konzertTitel },
    { title: 'DJ', detail: event?.djTitel },
  ];

  if (loading) {
    return <LoadingSkeleton hasSubTitle={loadingSubTitle} />;
  }

  return (
    <EventBoxContent>
      {subTitle && (
        <Typography fontSize="16px" fontSizeSm="18px">
          {subTitle}
        </Typography>
      )}
      <Date>{event?.datum ? ISOToDate(event?.datum) : ''}</Date>
      <VenueBox>
        <Typography $textalign="center" fontSize="16px" fontSizeSm="20px" lineHeight="1.25">
          hier könnte deine
        </Typography>
        <Typography $textalign="center" fontSize="28px" fontSizeSm="36px" fontWeight={900}>
          VENUE
        </Typography>
        <Typography $textalign="center" fontSize="16px" fontSizeSm="20px" lineHeight="1.25">
          stehen
        </Typography>
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
    </EventBoxContent>
  );
};

export default EventBox;
