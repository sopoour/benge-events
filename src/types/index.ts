import { Events } from "@app/services/graphql/types"

export type Homepage = {
    generalContent: {
        homepageSubtitle: string
    }
    eventsCollection: Events []
}

export type EventsPage = {
    generalContent: {
        eventsHeadline: string,
        eventsDescription: string
    }
    eventsCollection: Events []
}

export type IconLink = {
  type: 'tiktok' | 'spotify' | 'email' | 'instagram' | 'appleMusic' | 'youtube' | 'bandcamp' | 'link';
  id?: string;
  link?: string;
};