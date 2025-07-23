import { TDate, TLocation, TPerson, TTime } from "../common.types";

export type TCoupleGroups = {
    her: TPerson,
    his: TPerson
}

export type TMainEvent = {
    date: TDate,
    time: TTime,
    venue: TLocation,
    couple: TCoupleGroups,
}