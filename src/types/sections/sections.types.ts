export type TSectionCommonFeatures = {
    enable: boolean,
    heading: string,
    subHeading: string
}

export type TSectionMainInvitation = TSectionCommonFeatures & {
    locationCTA: string,
    herParentLine: string,
    hisParentLine: string
}

export type TSectionEvents = TSectionCommonFeatures & {
    herEvents: TSectionCommonFeatures,
    hisEvents: TSectionCommonFeatures,
    collectiveEvents: TSectionCommonFeatures
}

export type TSectionLocations = TSectionCommonFeatures & {
    herSideVenueLine: string,
    herSideVenueValue: string,
    hisSideVenueLine: string,
    hisSideVenueValue: string
}

export type TSectionHighlightsPersonalVows = TSectionCommonFeatures & {
    herLeftPageTitle: string,
    hisLeftPageTitle: string,
}

export type TSectionHighlights = TSectionCommonFeatures & {
    personalVows: TSectionCommonFeatures & TSectionHighlightsPersonalVows,
    videos: TSectionCommonFeatures & TSectionCommonFeatures
}

export type TSections = {
    countDown: TSectionCommonFeatures,
    mainInvitation: TSectionMainInvitation,
    events: TSectionEvents,
    locations: TSectionLocations,
    highlights: TSectionHighlights,
}