import { TEventGroups } from "../../../types/sections/events.types";
import { collectiveEvents } from "./collectiveEvents.config";
import { herEvents } from "./herEvents.config";
import { hisEvents } from "./hisEvents.config";

export const events: TEventGroups = {
    herEvents: [...herEvents],
    hisEvents: [...hisEvents],
    collectiveEvents: [...collectiveEvents]
}