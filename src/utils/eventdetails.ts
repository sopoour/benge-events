import { Events } from '@app/services/graphql/types';

const eventDetailsArray = (event?: Events) => [
  {
    title: 'Workshop',
    titleEn: 'Workshop',
    elements: [
      {
        time: event?.workshopZeit,
        host: event?.workshopHost,
        link: event?.workshopLink,
        detail: event?.workshopTitel,
        description: event?.workshopBeschreibung,
      },
    ],
  },
  {
    title: 'Konzert',
    titleEn: 'Concert',
    elements: [
      {
        time: event?.konzertZeit,
        host: null,
        link: event?.konzertLink,
        detail: event?.konzertTitel,
        description: event?.konzertBeschreibung,
      },
      event?.konzert2Titel ? {
        time: event?.konzert2Zeit,
        host: null,
        link: event?.konzert2Link,
        detail: event?.konzert2Titel,
        description: event?.konzert2Beschreibung,
      } : null,
    ],
  },
  {
    title: 'DJ',
    titleEn: 'DJ',
    elements: [
      {
        time: event?.djZeit,
        host: null,
        link: event?.djLink,
        detail: event?.djTitel,
        description: event?.djBeschreibung,
      },
      event?.dj2Titel ? {
        time: event?.dj2Zeit,
        host: null,
        link: event?.dj2Link,
        detail: event?.dj2Titel,
        description: event?.dj2Beschreibung,
      }: null,
      event?.dj3Titel ? {
        time: event?.dj3Zeit,
        host: null,
        link: event?.dj3Link,
        detail: event?.dj3Titel,
        description: event?.dj3Beschreibung,
      } : null,
    ],
  },
];

export default eventDetailsArray;
