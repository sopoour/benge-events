import { Events } from "@app/services/graphql/types"

export type Homepage = {
    generalContent: {
        homepageSubtitle: string
    }
    eventsCollection: Events []
}