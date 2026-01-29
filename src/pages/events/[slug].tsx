import Section from '@app/components/layout/Section';
import LoadingSkeletonGeneral from '@app/components/LoadingSkeletonGeneral.tsx';
import MarkdownConfig from '@app/components/MarkdownConfig/MarkdownConfig';
import Typography from '@app/components/Typography/Typography';
import { fetcher } from '@app/hooks/fetch/useFetch';
import useLang from '@app/hooks/useLang';
import { EventsPage } from '@app/types';
import { useRouter } from 'next/router';
import { FC } from 'react';
import useSWR from 'swr';

const Event: FC = () => {
  const lang = useLang();
  const { data, isLoading } = useSWR<EventsPage | null>(`/api/eventsPage?lang=${lang}`, fetcher);
  const router = useRouter();
  const { eventSlug } = router.query;

  const event = data?.eventsCollection.items.find((e) => e?.datum.split('T')[0] === eventSlug);
  console.log(event);
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

  if (isLoading) {
    return <LoadingSkeletonGeneral />;
  }
  return (
    <Section id={'event' + event?.datum}>
      <>
        {eventDetails.map((event, index) => (
          <span key={event.title + 'detailsContainer' + index}>
            <Typography fontSize="18px">
              {lang === 'en' ? event.titleEn : event.title}: {event.detail}
            </Typography>
            <MarkdownConfig content={event.description as string} />
          </span>
        ))}
      </>
    </Section>
  );
};

export default Event;
