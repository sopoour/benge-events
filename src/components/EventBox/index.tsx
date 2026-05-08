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
  OverviewContainer,
  ColTime,
} from './styles';
import { Events } from '@app/services/graphql/types';
import { ISOToDate } from '@app/utils/formatDate';
import LoadingSkeleton from './elements/LoadingSkeleton';
import useLang from '@app/hooks/useLang';
import Button from '../Button';
import eventDetailsArray from '@app/utils/eventdetails';

type Props = {
  subTitle?: string;
  loadingSubTitle?: boolean;
  event?: Events;
  loading?: boolean;
  className?: string;
};

const EventBox: FC<Props> = ({ subTitle, event, loading, loadingSubTitle, className }) => {
  const lang = useLang();

  const eventDetails = eventDetailsArray(event);

  const showDescriptionContent = `/events/${event?.datum.split('T')[0]}${lang === 'en' ? '?lang=en' : ''}`;

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
        <Date>
          {event?.datum ? ISOToDate(event?.datum, lang === 'en' ? 'en-US' : 'de-De') : ''}
        </Date>
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
        <EventTable gridnumber={event?.datum === '2026-06-12T12:00:00.000Z' ? 2 : 3}>
          {eventDetails.map((event, index) => (
            <>
              {event.elements.find((e) => !!e?.detail) && (
                <EventCol
                  key={event.title + event.titleEn + index}
                  href={showDescriptionContent}
                  target="_blank"
                >
                  <ColTitle>{lang === 'en' ? event.titleEn : event.title}</ColTitle>
                  {event?.elements[0]?.time && <ColTime>{event?.elements[0]?.time}</ColTime>}
                  {event.elements.map((element) => (
                    <EventTitle fontSize="14px" fontSizeSm="16px">
                      {element?.detail}
                    </EventTitle>
                  ))}
                </EventCol>
              )}
            </>
          ))}
        </EventTable>
        {event?.ticketLink && <Button href={event?.ticketLink} newTab />}
      </OverviewContainer>
    </EventBoxContent>
  );
};

export default EventBox;
