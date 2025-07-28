import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import utc from 'dayjs/plugin/utc'
import ObjectSupport from 'dayjs/plugin/objectSupport'
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

export const formatDateToUnixMS = (payloadDate: TDate, payloadtime: TTime) => {
    const { date, month, year } = payloadDate
    const { hour, minute, second } = payloadtime
    return dayjs(`${year}-${month}-${date} ${hour}:${minute}:${second}`).valueOf()
}

export const openNewWindow = (url: string) => {

}

