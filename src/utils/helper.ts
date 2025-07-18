import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import utc from 'dayjs/plugin/utc'
import ObjectSupport from 'dayjs/plugin/objectSupport'
dayjs.extend(customParseFormat)
dayjs.extend(utc)
dayjs.extend(ObjectSupport)

export const formatDate = ({ date, month, year }) => {
    const inputDate = `${year}/${month}/${date}`
    const parsedDate = dayjs(inputDate, 'YYYY/M/D',)
    const formattedDate = parsedDate.format('ddd, D MMM, YYYY')
    return `${formattedDate}`
}

export const formatTime = ({ hour, minute, second }) => {
    const inputTime = `${hour}:${minute}:${second}`
    return dayjs(inputTime, 'h:m:s').format('h a')
}

export const generateGoogleCalendarLink = ({
    eventName,
    date,
    startTime,
    endTime,
    location,
    description,
}) => {
    const payloadDate = {
        year: date.year,
        month: date.month - 1,  // zero-based
        day: date.date,         
    }
    const startDateAndTime = dayjs({ ...payloadDate, ...startTime }).utc().local().format('YYYYMMDDTHHmmss')
    const endDateAndTime = dayjs({ ...payloadDate, ...endTime }).utc().local().format('YYYYMMDDTHHmmss')
    console.log(startDateAndTime, endDateAndTime)
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        eventName,
    )}&dates=${startDateAndTime}/${endDateAndTime}&details=${encodeURIComponent(
        description,
    )}&location=${encodeURIComponent(location)}`
}

export const isDateMatchedWithToday = ({ date, month, year }) => {
    const inputDate = dayjs(new Date(year, month - 1, date))
    return inputDate.isSame(dayjs(), 'day')
}

export const formatDateToUnixMS = ({ date, month, year }, { hour, minute, second }) => {
    return dayjs(`${year}-${month}-${date} ${hour}:${minute}:${second}`).valueOf()
}