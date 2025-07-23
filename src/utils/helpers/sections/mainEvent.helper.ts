import { weddingConfig } from "../../../config/wedding.config";
import { formatDate, formatTime } from "../helper";

export const herInfo = weddingConfig.mainEvent.couple.her

export const hisInfo = weddingConfig.mainEvent.couple.his

export const mainEventDate = formatDate(weddingConfig.mainEvent.date)

export const mainEventTime = formatTime(weddingConfig.mainEvent.time)

export const mainEventVenue = `${weddingConfig.mainEvent.venue.city}, ${weddingConfig.mainEvent.venue.city} (${weddingConfig.mainEvent.venue.city})`