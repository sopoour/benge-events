import { Events } from "@app/services/graphql/types";

const eventDetailsArray = (event?: Events) =>  [
    {
      title: 'Workshop',
      titleEn: 'Workshop',
      time: event?.workshopZeit,
      host: event?.workshopHost,
      link: event?.workshopLink,
      detail: event?.workshopTitel,
      description: event?.workshopBeschreibung,
    },
    {
      title: 'Konzert',
      titleEn: 'Concert',
      time: event?.konzertZeit,
      link: event?.konzertLink,
      detail: event?.konzertTitel,
      description: event?.konzertBeschreibung,
    },
    { title: 'DJ', titleEn: 'DJ', time: event?.djZeit, link: event?.djLink, detail: event?.djTitel, description: event?.djBeschreibung },
  ];

  export default eventDetailsArray;