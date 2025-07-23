import { createI18n } from 'vue-i18n'

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      message: {
        sections: {
          mainInvitation: {
            heading: 'Wedding invitation',
            subHeading: 'We request the pleasure of your company on the auspicious occasion of our Wedding Ceremony',
            locationCTA: "Where's the event? The locations are below! 📍",
            herParentLine: "D/O Mr. {herFatherName} & Mrs. {herMotherName}",
            hisParentLine: "S/O Mr. {hisFatherName} & Mrs. {hisMotherName}",
          },
          events: {
            herEvents: {
              heading: 'If you are from the Bride side, join us',
              subHeading: '📍 At {venue}'
            },
            hisEvents: {
              heading: 'If you are from the Groom side, join us',
              subHeading: '📍 At {venue}'
            },
            collectiveEvents: {
              heading: 'Together we are celebrating',
              subHeading: '📍 At {venue}'
            }
          },
          locations: {
            heading: "If you are having trouble finding us",
            subHeading: "Google says we're here and So Do We",
            herSideVenueLine: '📍 Bride side venue',
            herSideVenueValue: '{venueName} is here',
            hisSideVenueLine: '📍 Groom side venue',
            hisSideVenueValue: '{venueName} is here'
          },
          highlights: {
            personalVows: {
              heading: 'In Our Own Words',
              subHeading: 'Tears, Smiles, and Too Many Rewrites',
              herLeftPageTitle: 'From her pen ~',
              hisLeftPageTitle: 'From his heart ~',
            }
          }
        }
      },
    },
  },
})
