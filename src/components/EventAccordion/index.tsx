import { Events } from '@app/services/graphql/types';
import { FC, useState } from 'react';
import Typography from '../Typography/Typography';
import { ISOToDate } from '@app/utils/formatDate';
import { useMedia } from '@app/hooks/useMedia';
import { Breakpoints } from '@app/styles/media';
import useLang from '@app/hooks/useLang';
import eventDetailsArray from '@app/utils/eventdetails';
import {
  ButtonContainer,
  Details,
  DetailsContainer,
  Header,
  MobileAccordion,
  ReadMoreButton,
  StyledLink,
  TicketButton,
} from './styles';

type Props = {
  className?: string;
  event?: Events;
  loading?: boolean;
  showDescription?: boolean;
  hasDetailsHeader?: boolean;
};

const EventAccordion: FC<Props> = ({
  event,
  className,
  loading,
  showDescription = true,
  hasDetailsHeader,
}) => {
  const lang = useLang();
  const eventDetails = eventDetailsArray(event);
  const [open, setOpen] = useState<boolean>(false);
  const isDesktop = useMedia(Breakpoints.sm);

  const subpage = `/events/${event?.datum.split('T')[0]}${lang === 'en' ? '?lang=en' : ''}`;

  return (
    <MobileAccordion
      className={className}
      open={open}
      hasChevron
      hasAnimation
      setOpen={setOpen}
      header={
        <Header $hasDetailsHeader={hasDetailsHeader}>
          <Typography fontSize="16px" fontSizeSm="20px">
            {event?.datum ? ISOToDate(event?.datum, lang === 'en' ? 'en-US' : 'de-De') : ''}
          </Typography>
          <Typography fontSize="16px" fontSizeSm="20px">
            {event?.venue?.includes('tba')
              ? lang === 'en'
                ? 'Your VENUE could be here'
                : 'hier könnte deine VENUE stehen'
              : event?.venue}
          </Typography>
          {hasDetailsHeader && isDesktop && (
            <Details>
              {eventDetails.map((event) => (
                <>
                  {event.detail && (
                    <Typography
                      key={event.title + 'pastEventsDetails'}
                      fontSize="16px"
                      fontSizeSm="18px"
                    >
                      {lang === 'en' ? event.titleEn : event.title}: {event.detail}
                    </Typography>
                  )}
                </>
              ))}
            </Details>
          )}
        </Header>
      }
    >
      <DetailsContainer style={{ display: !showDescription ? 'none' : 'flex' }}>
        {event?.optionaleNotiz && (
          <Typography
            fontSize="16px"
            fontSizeSm="18px"
            style={{ marginBottom: '16px', fontStyle: 'italic' }}
          >
            {event?.optionaleNotiz}
          </Typography>
        )}
        {eventDetails.map((event) => (
          <>
            {event.detail && (
              <Typography fontSize="16px" fontSizeSm="18px">
                {lang === 'en' ? event.titleEn : event.title}:{' '}
                <StyledLink href={subpage} target="_blank">
                  {event.detail}
                </StyledLink>
              </Typography>
            )}
          </>
        ))}
        <ButtonContainer>
          <ReadMoreButton
            href={subpage}
            text={lang === 'en' ? 'Find out more' : 'Erfahre mehr'}
            newTab
          />
          {event?.ticketLink && <TicketButton href={event?.ticketLink} newTab />}
        </ButtonContainer>
      </DetailsContainer>
    </MobileAccordion>
  );
};

export default EventAccordion;
