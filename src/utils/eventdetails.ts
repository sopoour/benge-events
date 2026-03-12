import { Events } from "@app/services/graphql/types";

const eventDetailsArray = (event?: Events) =>  [
    {
      title: 'Workshop',
      titleEn: 'Workshop',
      time: event?.workshopZeit,
      detail: event?.workshopTitel,
      description: event?.workshopBeschreibung,
    },
    {
      title: 'Konzert',
      titleEn: 'Concert',
      time: event?.konzertZeit,
      detail: event?.konzertTitel,
      description: event?.konzertBeschreibung,
    },
    { title: 'DJ', titleEn: 'DJ', time: event?.djZeit, detail: event?.djTitel, description: event?.djBeschreibung },
  ];

  export default eventDetailsArray;