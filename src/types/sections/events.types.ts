import { TDate, TLocation, TTime } from "../common.types"

export type TCalendarLink = {
    eventName: string,
    date: TDate,
    startTime: TTime,
    endTime: TTime,
    location: string,
    description: string
}

export type TEvent = {
    name: string,
    guestTheme: string,
    date: TDate,
    time: TTime,
    venue: TLocation,
    image: string,
    calendarLink: TCalendarLink
}

export type TEventGroups = {
    herEvents: Array<TEvent>,
    hisEvents: Array<TEvent>,
    collectiveEvents: Array<TEvent>
}
