import { website } from './website.config';
import { sections } from "./sections/sections.config";
import { mainEvent } from "./sections/mainEvent.config";
import { events } from "./sections/events/events.config";
import { personalVows } from "./sections/highlights/personalVows.config";
import { videos } from "./sections/highlights/videos.config";
import { locations } from "./sections/locations.config";
import { WeddingConfig } from "../types/weddingConfig.types";

export const weddingConfig: WeddingConfig = {
    sections: { ...sections },
    mainEvent: { ...mainEvent },
    events: { ...events },
    locations: { ...locations },
    highlights: {
        personalVows: { ...personalVows },
        videos: [...videos]
    },
    website: {...website}
}
