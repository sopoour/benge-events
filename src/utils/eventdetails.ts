import { Events } from "@app/services/graphql/types";

const eventDetailsArray = (event?: Events) =>  [
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

  export default eventDetailsArray;