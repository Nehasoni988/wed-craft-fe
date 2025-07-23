import dayjs from "dayjs";
import { weddingConfig } from "../../../config/wedding.config";
import { TDate } from "../../../types/common.types";

export const isHerEventsAvailable = weddingConfig.sections.events.herEvents.enable && weddingConfig.events.herEvents.length
export const herEvents = weddingConfig.events.herEvents

export const isHisEventsAvailable = weddingConfig.sections.events.hisEvents.enable && weddingConfig.events.hisEvents.length
export const hisEvents = weddingConfig.events.hisEvents

export const isCollectiveEventsAvailable = weddingConfig.sections.events.collectiveEvents.enable && weddingConfig.events.collectiveEvents.length
export const collectiveEvents = weddingConfig.events.collectiveEvents

export const isEventToday = (payload: TDate) => {
    const { date, month, year } = payload
    const inputDate = dayjs(new Date(year, month - 1, date))
    return inputDate.isSame(dayjs(), 'day')
}