import { TSections } from "../../types/sections/sections.types";

export const sections: TSections = {
    countDown: {
        enable: false,
        heading: '',
        subHeading: ''
    },
    mainInvitation: {
        enable: true,
        heading: 'message.sections.mainInvitation.heading',
        subHeading: 'message.sections.mainInvitation.subHeading',
        locationCTA: "message.sections.mainInvitation.locationCTA",
        herParentLine: "message.sections.mainInvitation.herParentLine",
        hisParentLine: "message.sections.mainInvitation.hisParentLine"
    },
    events: {
        enable: true,
        heading: '',
        subHeading: '',
        herEvents: {
            enable: true,
            heading: 'message.sections.events.herEvents.heading',
            subHeading: 'message.sections.events.herEvents.subHeading'
        },
        hisEvents: {
            enable: true,
            heading: 'message.sections.events.hisEvents.heading',
            subHeading: 'message.sections.events.hisEvents.subHeading'
        },
        collectiveEvents: {
            enable: true,
            heading: 'message.sections.events.collectiveEvents.heading',
            subHeading: 'message.sections.events.collectiveEvents.subHeading'
        }
    },
    locations: {
        enable: true,
        heading: 'message.sections.locations.heading',
        subHeading: 'message.sections.locations.subHeading',
        herSideVenueLine: 'message.sections.locations.herSideVenueLine',
        herSideVenueValue: 'message.sections.locations.herSideVenueValue',
        hisSideVenueLine: 'message.sections.locations.hisSideVenueLine',
        hisSideVenueValue: 'message.sections.locations.hisSideVenueValue'
    },
    highlights: {
        enable: true,
        heading: '',
        subHeading: '',
        personalVows: {
            enable: true,
            heading: 'message.sections.highlights.personalVows.heading',
            subHeading: 'message.sections.highlights.personalVows.subHeading',
            herLeftPageTitle: 'message.sections.highlights.personalVows.herLeftPageTitle',
            hisLeftPageTitle: 'message.sections.highlights.personalVows.hisLeftPageTitle',
        },
        videos: {
            enable: true,
            heading: '',
            subHeading: '',
        }
    }
}