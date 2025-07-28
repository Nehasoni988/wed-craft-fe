import dayjs from "dayjs";
import { weddingConfig } from "../../../config/wedding.config";
import { TDate } from "../../../types/common.types";
import { TCalendarLink } from "../../../types/sections/events.types";

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

export const generateGoogleCalendarLink = (payload: TCalendarLink) => {
    const {
        eventName,
        date,
        startTime,
        endTime,
        location,
        description,
    } = payload
    const payloadDate = {
        year: date.year,
        month: date.month - 1,  // zero-based
        day: date.date,
    }
    const startDateAndTime = dayjs({ ...payloadDate, ...startTime }).utc().local().format('YYYYMMDDTHHmmss')
    const endDateAndTime = dayjs({ ...payloadDate, ...endTime }).utc().local().format('YYYYMMDDTHHmmss')
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        eventName,
    )}&dates=${startDateAndTime}/${endDateAndTime}&details=${encodeURIComponent(
        description,
    )}&location=${encodeURIComponent(location)}`
}