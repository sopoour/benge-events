import { Awareness, Events, Lexikon } from "@app/services/graphql/types"

export type Homepage = {
    generalContent: {
        homepageSubtitle: string
    }
    eventsCollection: { 
        items: Events []
    }
}

export type EventsPage = {
    generalContent: {
        eventsHeadline: string,
        eventsDescription: string
    }
    eventsCollection: { 
        items: Events []
    }
}

export type LexikonPage = {
    generalContent: {
        lexikonHeadline: string,
        lexikonDescription: string
    }
    lexikonCollection: { 
        items: Lexikon []
    }
}

export type AwarenessPage = {
    generalContent: {
        awarenessHeadline: string,
        awarenessDescription: string
    }
    awarenessCollection: { 
        items: Awareness []
    }
}

export type IconLink = {
  type: 'tiktok' | 'spotify' | 'email' | 'instagram' | 'appleMusic' | 'youtube' | 'bandcamp' | 'link';
  id?: string;
  link?: string;
};