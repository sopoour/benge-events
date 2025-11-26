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