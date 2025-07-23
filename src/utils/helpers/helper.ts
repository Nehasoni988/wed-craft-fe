import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import utc from 'dayjs/plugin/utc'
import ObjectSupport from 'dayjs/plugin/objectSupport'
import { TCalendarLink } from '../../types/sections/events.types'
import { TDate, TTime } from '../../types/common.types'
dayjs.extend(customParseFormat)
dayjs.extend(utc)
dayjs.extend(ObjectSupport)

export const formatDate = (payload: TDate) => {
    const { date, month, year } = payload
    const inputDate = `${year}/${month}/${date}`
    const parsedDate = dayjs(inputDate, 'YYYY/M/D',)
    const formattedDate = parsedDate.format('ddd, D MMM, YYYY')
    return `${formattedDate}`
}

export const formatTime = (payload: TTime) => {
    const { hour, minute, second } = payload
    const inputTime = `${hour}:${minute}:${second}`
    return dayjs(inputTime, 'h:m:s').format('h a')
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

export const formatDateToUnixMS = (payloadDate: TDate, payloadtime: TTime) => {
    const { date, month, year } = payloadDate
    const { hour, minute, second } = payloadtime
    return dayjs(`${year}-${month}-${date} ${hour}:${minute}:${second}`).valueOf()
}