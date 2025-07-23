import { TEventGroups } from "./sections/events.types"
import { THighlightGroups } from "./sections/highlights.types"
import { TLocationGroups } from "./sections/locations.types"
import { TMainEvent } from "./sections/mainEvent.types"
import { TSections } from "./sections/sections.types"

export type WeddingConfig = {
    sections: TSections,
    mainEvent: TMainEvent,
    events: TEventGroups,
    locations: TLocationGroups,
    highlights: THighlightGroups
}