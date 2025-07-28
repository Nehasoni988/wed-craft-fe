export type TTime = {
    hour: number,
    minute: number,
    second: number
}

export type TDate = {
    date: number,
    month: number,
    year: number
}

export type TLocation = {
    name: string,
    city: string,
    state: string,
    googleMapLink: string
    googleMapImage: string
}

export type TPeople = {
    mother: TPerson,
    father: TPerson,
}

export type TPerson = {
    name: String,
    designation?: string,
    parents?: TPeople
}