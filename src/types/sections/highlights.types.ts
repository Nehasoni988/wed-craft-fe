export type TPersonalVow = {
    title: string,
    description: string
}

export type TPersonalVowGroups = {
    her: TPersonalVow,
    his: TPersonalVow
}

export type TVideo = {
    title: string,
    link: string
}

export type THighlightGroups = {
    personalVows: TPersonalVowGroups,
    videos: Array<TVideo>
}