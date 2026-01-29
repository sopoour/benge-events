import Accordion from '@app/components/Accordion/Accordion';
import { Events } from '@app/services/graphql/types';
import { flexColumn, slowTransition } from '@app/styles/mixins';
import { FC, useState } from 'react';
import styled from 'styled-components';
import Typography from '../Typography/Typography';
import { ISOToDate } from '@app/utils/formatDate';
import { Details, MarkDownEvent } from '../EventBox/styles';
import { useMedia } from '@app/hooks/useMedia';
import { Breakpoints } from '@app/styles/media';
import useLang from '@app/hooks/useLang';
import Button from '../Button';

const MobileAccordion = styled(Accordion)`
  display: flex;

  ${({ theme }) => theme.media('sm')`
    display: none;
  `}
`;

export const Header = styled.div<{ $hasDetailsHeader?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 100%;

  ${({ theme, $hasDetailsHeader }) => theme.media('sm')`
    grid-template-columns: ${$hasDetailsHeader ? '1fr 1fr 1fr' : '1fr 1fr'} ;
    `}
`;

export const DetailsContainer = styled.div`
  padding: 12px 0;
  width: 100%;
  height: 100%;
  ${slowTransition};
  ${flexColumn};
  gap: 0;
  justify-content: space-between;
`;

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
  const [open, setOpen] = useState<boolean>(false);
  const isDesktop = useMedia(Breakpoints.sm);

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
            {event?.datum ? ISOToDate(event?.datum) : ''}
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
        <Details>
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
                <>
                  <Typography fontSize="16px" fontSizeSm="18px">
                    {lang === 'en' ? event.titleEn : event.title}: {event.detail}
                  </Typography>
                  {event.description && <MarkDownEvent content={event.description} />}
                </>
              )}
            </>
          ))}
        </Details>

        {event?.ticketLink && (
          <Button
            href={event?.ticketLink}
            newTab
            text={lang === 'en' ? 'Reserve a ticket' : 'Ticket reservieren'}
          />
        )}
      </DetailsContainer>
    </MobileAccordion>
  );
};

export default EventAccordion;
