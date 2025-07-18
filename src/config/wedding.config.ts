import type { WeddingConfig } from "../types/WeddingConfig";

export const weddingConfig: WeddingConfig = {
    sections: {
        countDown: {
            enable: true,
        },
        mainInvitation: {
            heading: 'message.sections.mainInvitation.heading',
            subHeading: 'message.sections.mainInvitation.subHeading',
            locationCTA: "message.sections.mainInvitation.locationCTA",
            herParentLine: "message.sections.mainInvitation.herParentLine",
            hisParentLine: "message.sections.mainInvitation.hisParentLine"
        },
        events: {
            enable: true,
            herEvents: {
                heading: 'message.sections.events.herEvents.heading',
                subHeading: 'message.sections.events.herEvents.subHeading'
            },
            hisEvents: {
                heading: 'message.sections.events.hisEvents.heading',
                subHeading: 'message.sections.events.hisEvents.subHeading'
            },
            collectiveEvents: {
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
            personalVows: {
                enable: true,
                heading: 'message.sections.highlights.personalVows.heading',
                subHeading: 'message.sections.highlights.personalVows.subHeading',
                herLeftPageTitle: 'message.sections.highlights.personalVows.herLeftPageTitle',
                hisLeftPageTitle: 'message.sections.highlights.personalVows.hisLeftPageTitle',
            },
            videos: {
                enable: true
            }
        },
        rsvpScan: {
            enable: true
        }
    },
    mainEvent: {
        weddingDate: {
            date: 18,
            month: 1,
            year: 2025
        },
        weddingTime: {
            hour: 19,
            minute: 0,
            second: 0
        },
        weddingVenue: {
            name: 'Ramsnehi Vatika',
            city: 'Bhilwara',
            state: 'Rajasthan',
            googleMapLink: 'https://www.google.com/maps/place/Ramdwara+Ramsnehi/@25.3495197,74.6402191,17z/data=!3m1!4b1!4m6!3m5!1s0x3968c3b47d3322c5:0xe8bef2b12fadffff!8m2!3d25.3495149!4d74.642794!16s%2Fg%2F11_1qqy9w?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'
        }
    },
    couple: {
        bride: {
            name: 'Neha',
            address: {
                home: {
                    name: 'Bheru Nath Bhawan',
                    city: 'Bhilwara',
                    state: 'Rajasthan',
                    googleMapLink: ''
                },
                venue: {
                    name: 'Ramsnehi Vatika',
                    city: 'Bhilwara',
                    state: 'Rajasthan',
                    googleMapLink: 'https://www.google.com/maps/place/Ramdwara+Ramsnehi/@25.3495197,74.6402191,17z/data=!3m1!4b1!4m6!3m5!1s0x3968c3b47d3322c5:0xe8bef2b12fadffff!8m2!3d25.3495149!4d74.642794!16s%2Fg%2F11_1qqy9w?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'
                }
            },
            designation: {
                title: 'Code Whisperer'
            },
            parents: {
                mother: {
                    name: 'Shobha Soni'
                },
                father: {
                    name: 'Nand Kishor Soni'
                }
            },
        },
        groom: {
            name: 'Nihal',
            address: {
                home: {
                    name: 'Bheru Nath Bhawan',
                    city: 'Jaipur',
                    state: 'Rajasthan',
                    googleMapLink: ''
                },
                venue: {
                    name: 'Bheru Baag Marriage Garden',
                    city: 'Jaipur',
                    state: 'Rajasthan',
                    googleMapLink: 'https://www.google.com/maps/place/Bheru+Bagh/@26.9378645,75.7284188,17z/data=!4m6!3m5!1s0x396db3f4c223ac4d:0x810ba2faf293c3e6!8m2!3d26.9383093!4d75.7303178!16s%2Fg%2F11smm785sj?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'
                }
            },
            designation: {
                title: 'Code Whisperer'
            },
            parents: {
                mother: {
                    name: 'Sudha Soni'
                },
                father: {
                    name: 'Ninendra Soni'
                }
            },
        },
    },
    events: {
        brideEvents: [
            {
                name: 'Ganapati Sthapana',
                guestTheme: 'Red outfit',
                date: {
                    date: 14,
                    month: 1,
                    year: 2025
                },
                time: {
                    hour: 10,
                    minute: 15,
                    second: 0
                },
                venue: {
                    name: 'Home',
                    city: 'Bhilwara',
                    state: 'Rajasthan',
                },
                image: 'https://ik.imagekit.io/zpxvtauqo/nehanaalnihal/red-ganesha.png?updatedAt=1752149915794',
                calendarLinkObject: {
                    eventName: "Neha's Ganapati Sthapana",
                    date: {
                        date: 14,
                        month: 1,
                        year: 2025
                    },
                    startTime: {
                        hour: 10,
                        minute: 15,
                        second: 0
                    },
                    endTime: {
                        hour: 12,
                        minute: 15,
                        second: 0
                    },
                    location: 'Home, Bhilwara (Raj)',
                    description: 'Dress in red and join us for the Ganapati Sthapana ceremony!',
                },
            },
            {
                name: 'Mehandi',
                guestTheme: 'Green outfit',
                date: {
                    date: 16,
                    month: 1,
                    year: 2025
                },
                time: {
                    hour: 12,
                    minute: 15,
                    second: 0
                },
                venue: {
                    name: 'Home',
                    city: 'Bhilwara',
                    state: 'Rajasthan',
                }, image: 'https://ik.imagekit.io/zpxvtauqo/nehanaalnihal/bride-mehandi.png?updatedAt=1752149915865',
                calendarLinkObject: {
                    eventName: "Neha's Mehandi",
                    date: {
                        date: 16,
                        month: 1,
                        year: 2025
                    },
                    startTime: {
                        hour: 12,
                        minute: 15,
                        second: 0
                    },
                    endTime: {
                        hour: 14,
                        minute: 15,
                        second: 0
                    },
                    location: 'Home, Bhilwara (Raj)',
                    description: 'Green outfits and Mehendi designs await you!'
                }
            },
            {
                name: 'Kalash',
                guestTheme: 'Rajasthani look',
                date: {
                    date: 17,
                    month: 1,
                    year: 2025
                },
                time: {
                    hour: 9,
                    minute: 15,
                    second: 0
                },
                venue: {
                    name: 'Home',
                    city: 'Bhilwara',
                    state: 'Rajasthan',
                }, image: 'https://ik.imagekit.io/zpxvtauqo/nehanaalnihal/rajasthani-bride.png?updatedAt=1752149916017',
                calendarLinkObject: {
                    eventName: "Neha's Kalash",
                    date: {
                        date: 17,
                        month: 1,
                        year: 2025
                    },
                    startTime: {
                        hour: 9,
                        minute: 15,
                        second: 0
                    },
                    endTime: {
                        hour: 11,
                        minute: 15,
                        second: 0
                    },
                    location: 'Home, Bhilwara (Raj)',
                    description: 'Dress in your best Rajasthani look for this beautiful ceremony!'
                }
            },
            {
                name: 'Haldi',
                guestTheme: 'Yellow outfit',
                date: {
                    date: 17,
                    month: 1,
                    year: 2025
                },
                time: {
                    hour: 12,
                    minute: 15,
                    second: 0
                },
                venue: {
                    name: 'Venue',
                    city: 'Bhilwara',
                    state: 'Rajasthan',
                }, image: 'https://ik.imagekit.io/zpxvtauqo/nehanaalnihal/haldi-bride.png?updatedAt=1752149915862',
                calendarLinkObject: {
                    eventName: "Neha's Haldi",
                    date: {
                        date: 17,
                        month: 1,
                        year: 2025
                    },
                    startTime: {
                        hour: 12,
                        minute: 15,
                        second: 0
                    },
                    endTime: {
                        hour: 14,
                        minute: 15,
                        second: 0
                    },
                    location: 'Venue, Bhilwara (Raj)',
                    description: 'Brighten up the Haldi function in yellow!'
                }
            },
            {
                name: 'Mayra',
                guestTheme: 'Off-white outfit',
                date: {
                    date: 17,
                    month: 1,
                    year: 2025
                },
                time: {
                    hour: 16,
                    minute: 15,
                    second: 0
                },
                venue: {
                    name: 'Home',
                    city: 'Bhilwara',
                    state: 'Rajasthan',
                }, image: 'https://ik.imagekit.io/zpxvtauqo/nehanaalnihal/mayra-bride.png?updatedAt=1752149915870',
                calendarLinkObject: {
                    eventName: "Neha's Mayra",
                    date: {
                        date: 17,
                        month: 1,
                        year: 2025
                    },
                    startTime: {
                        hour: 16,
                        minute: 15,
                        second: 0
                    },
                    endTime: {
                        hour: 18,
                        minute: 15,
                        second: 0
                    },
                    location: 'Venue, Bhilwara (Raj)',
                    description: 'Celebrate the Mayra ceremony with us in off-white attire!'
                }
            },
            {
                name: 'Sangeet',
                guestTheme: 'Glitter outfit',
                date: {
                    date: 17,
                    month: 1,
                    year: 2025
                },
                time: {
                    hour: 19,
                    minute: 15,
                    second: 0
                },
                venue: {
                    name: 'Ramsnehi Vatika',
                    city: 'Bhilwara',
                    state: 'Rajasthan',
                },
                image: 'https://ik.imagekit.io/zpxvtauqo/nehanaalnihal/sangeet-bride.png?updatedAt=1752149915881',
                calendarLinkObject: {
                    eventName: "Neha's Sangeet",
                    date: {
                        date: 17,
                        month: 1,
                        year: 2025
                    },
                    startTime: {
                        hour: 19,
                        minute: 15,
                        second: 0
                    },
                    endTime: {
                        hour: 21,
                        minute: 15,
                        second: 0
                    },
                    location: 'Venue, Bhilwara (Raj)',
                    description: 'Dance the night away at the Sangeet! Wear glitter!'
                }
            }
        ],
        groomEvents: [
            {
                name: 'Ganapati Sthapana',
                guestTheme: 'Red outfit',
                date: { date: 10, month: 1, year: 2025 },
                time: { hour: 9, minute: 15, second: 0 },
                venue: {
                    name: 'Home',
                    city: 'Jaipur',
                    state: 'Rajasthan',
                },
                image: 'https://ik.imagekit.io/zpxvtauqo/nehanaalnihal/red-ganesha.png?updatedAt=1752149915794',
                calendarLinkObject: {
                    eventName: "Nihal's Ganapati Sthapana",
                    date: { date: 10, month: 1, year: 2025 },
                    startTime: { hour: 9, minute: 15, second: 0 },
                    endTime: { hour: 10, minute: 15, second: 0 },
                    location: 'Home, Jaipur (Raj)',
                    description: 'Dress in red and join us for the Ganapati Sthapana ceremony!'
                }
            },
            {
                name: 'Baan Saakndi',
                guestTheme: 'Yellow outfit',
                date: { date: 16, month: 1, year: 2025 },
                time: { hour: 11, minute: 18, second: 0 },
                venue: {
                    name: 'Home',
                    city: 'Jaipur',
                    state: 'Rajasthan',
                },
                image: 'https://ik.imagekit.io/zpxvtauqo/nehanaalnihal/baan.png?updatedAt=1752149915839',
                calendarLinkObject: {
                    eventName: "Nihal's Baan Saakndi",
                    date: { date: 16, month: 1, year: 2025 },
                    startTime: { hour: 11, minute: 18, second: 0 },
                    endTime: { hour: 12, minute: 18, second: 0 },
                    location: 'Home, Jaipur (Raj)',
                    description: 'Dress in yellow for the Baan Saakndi ceremony!'
                }
            },
            {
                name: 'Haldi',
                guestTheme: 'Yellow outfit',
                date: { date: 17, month: 1, year: 2025 },
                time: { hour: 11, minute: 0, second: 0 },
                venue: {
                    name: 'Home',
                    city: 'Jaipur',
                    state: 'Rajasthan',
                }, image: 'https://ik.imagekit.io/zpxvtauqo/nehanaalnihal/haldi-groom.png?updatedAt=1752149915859',
                calendarLinkObject: {
                    eventName: "Nihal's Haldi",
                    date: { date: 17, month: 1, year: 2025 },
                    startTime: { hour: 11, minute: 0, second: 0 },
                    endTime: { hour: 12, minute: 0, second: 0 },
                    location: 'Home, Jaipur (Raj)',
                    description: 'Dress in yellow and join us for the Haldi ceremony!'
                }
            },
            {
                name: 'Mehandi',
                guestTheme: 'Green outfit',
                date: { date: 17, month: 1, year: 2025 },
                time: { hour: 12, minute: 0, second: 0 },
                venue: {
                    name: 'Home',
                    city: 'Jaipur',
                    state: 'Rajasthan',
                },
                image: 'https://ik.imagekit.io/zpxvtauqo/nehanaalnihal/mehandi-groom.png?updatedAt=1752149915895',
                calendarLinkObject: {
                    eventName: "Nihal's Mehandi",
                    date: { date: 17, month: 1, year: 2025 },
                    startTime: { hour: 12, minute: 0, second: 0 },
                    endTime: { hour: 13, minute: 0, second: 0 },
                    location: 'Home, Jaipur (Raj)',
                    description: 'Dress in green and enjoy the Mehandi ceremony!'
                }
            },
            {
                name: 'Bhaat',
                guestTheme: 'Anything you love',
                date: { date: 17, month: 1, year: 2025 },
                time: { hour: 14, minute: 0, second: 0 },
                venue: {
                    name: 'Home',
                    city: 'Jaipur',
                    state: 'Rajasthan',
                },
                image: 'https://ik.imagekit.io/zpxvtauqo/nehanaalnihal/mayra-bride.png?updatedAt=1752149915870',
                calendarLinkObject: {
                    eventName: "Nihal's Bhaat",
                    date: { date: 17, month: 1, year: 2025 },
                    startTime: { hour: 14, minute: 0, second: 0 },
                    endTime: { hour: 15, minute: 0, second: 0 },
                    location: 'Home, Jaipur (Raj)',
                    description: 'Anything you love! Join us for the Bhaat ceremony!'
                }
            },
            {
                name: 'Chaak Poojan',
                guestTheme: 'Anything you love',
                date: { date: 17, month: 1, year: 2025 },
                time: { hour: 16, minute: 0, second: 0 },
                venue: {
                    name: 'Home',
                    city: 'Jaipur',
                    state: 'Rajasthan',
                },
                image: 'https://ik.imagekit.io/zpxvtauqo/nehanaalnihal/chaak.png?updatedAt=1752149915887',
                calendarLinkObject: {
                    eventName: "Nihal's Chaak Poojan",
                    date: { date: 17, month: 1, year: 2025 },
                    startTime: { hour: 16, minute: 0, second: 0 },
                    endTime: { hour: 17, minute: 0, second: 0 },
                    location: 'Home, Jaipur (Raj)',
                    description: 'Anything you love! Join us for the Chaak Poojan!'
                }
            },
            {
                name: 'Var Nikasi',
                guestTheme: 'Anything you love',
                date: { date: 17, month: 1, year: 2025 },
                time: { hour: 20, minute: 0, second: 0 },
                venue: {
                    name: 'Home',
                    city: 'Jaipur',
                    state: 'Rajasthan',
                },
                image: 'https://ik.imagekit.io/zpxvtauqo/nehanaalnihal/nikasi.png?updatedAt=1752149915873',
                calendarLinkObject: {
                    eventName: "Nihal's Var Nikasi",
                    date: { date: 17, month: 1, year: 2025 },
                    startTime: { hour: 20, minute: 0, second: 0 },
                    endTime: { hour: 21, minute: 0, second: 0 },
                    location: 'Home, Jaipur (Raj)',
                    description: 'Anything you love! Join us for the Var Nikasi ceremony!'
                }
            },
            {
                name: 'Wedding Reception',
                guestTheme: 'Saree and Tuxedo',
                date: { date: 20, month: 1, year: 2025 },
                time: { hour: 18, minute: 0, second: 0 },
                venue: {
                    name: 'Bheru Baag Marriage Garden',
                    city: 'Jaipur',
                    state: 'Rajasthan',
                },
                image: 'https://ik.imagekit.io/zpxvtauqo/nehanaalnihal/reception.png?updatedAt=1752149915836',
                calendarLinkObject: {
                    eventName: "Nihal's Wedding Reception",
                    date: { date: 20, month: 1, year: 2025 },
                    startTime: { hour: 18, minute: 0, second: 0 },
                    endTime: { hour: 19, minute: 0, second: 0 },
                    location: 'Bheru Baag Marriage Garden, Jaipur (Raj)',
                    description: 'Dress in Saree or Tuxedo for the Wedding Reception!'
                }
            }
        ],
        collectiveEvents: [
            {
                name: 'Engagement Ceremony',
                guestTheme: 'Pink outfit',
                date: { date: 18, month: 1, year: 2025 },
                time: { hour: 12, minute: 15, second: 0 },
                venue: {
                    name: 'Ramsnehi Vatika',
                    city: 'Bhilwara',
                    state: 'Rajasthan',
                },
                image: 'https://ik.imagekit.io/zpxvtauqo/nehanaalnihal/engagement.png?updatedAt=1752149915941',
                calendarLinkObject: {
                    eventName: "Neha & Nihal's Engagement Ceremony",
                    date: { date: 18, month: 1, year: 2025 },
                    startTime: { hour: 12, minute: 15, second: 0 },
                    endTime: { hour: 13, minute: 15, second: 0 },
                    location: 'Venue, Bhilwara (Raj)',
                    description: 'Dress in pink for the Engagement Ceremony!'
                }
            },
            {
                name: 'Toran & Baraat Welcome',
                guestTheme: 'Saree and Tuxedo',
                date: { date: 18, month: 1, year: 2025 },
                time: { hour: 16, minute: 0, second: 0 },
                venue: {
                    name: 'Ramsnehi Vatika',
                    city: 'Bhilwara',
                    state: 'Rajasthan',
                },
                image: 'https://ik.imagekit.io/zpxvtauqo/nehanaalnihal/toran.png?updatedAt=1752149915877',
                calendarLinkObject: {
                    eventName: "Neha & Nihal's Toran & Baraat Welcome",
                    date: { date: 18, month: 1, year: 2025 },
                    startTime: { hour: 16, minute: 0, second: 0 },
                    endTime: { hour: 17, minute: 0, second: 0 },
                    location: 'Home, Bhilwara (Raj)',
                    description: 'Dress in Saree or Tuxedo for the Toran & Baraat Welcome!'
                }
            },
            {
                name: 'Reception & Dinner',
                guestTheme: 'Saree and Tuxedo',
                date: { date: 18, month: 1, year: 2025 },
                time: { hour: 19, minute: 0, second: 0 },
                venue: {
                    name: 'Ramsnehi Vatika',
                    city: 'Bhilwara',
                    state: 'Rajasthan',
                },
                image: 'https://ik.imagekit.io/zpxvtauqo/nehanaalnihal/varmala.png?updatedAt=1752149915984',
                calendarLinkObject: {
                    eventName: "Neha & Nihal's Reception & Dinner",
                    date: { date: 18, month: 1, year: 2025 },
                    startTime: { hour: 19, minute: 0, second: 0 },
                    endTime: { hour: 20, minute: 0, second: 0 },
                    location: 'Venue, Bhilwara (Raj)',
                    description: 'Dress in Saree or Tuxedo for the Reception & Dinner!'
                }
            },
            {
                name: 'Pheras',
                guestTheme: 'Anything you want',
                date: { date: 19, month: 1, year: 2025 },
                time: { hour: 2, minute: 51, second: 0 },
                venue: {
                    name: 'Ramsnehi Vatika',
                    city: 'Bhilwara',
                    state: 'Rajasthan',
                },
                image: 'https://ik.imagekit.io/zpxvtauqo/nehanaalnihal/phera.png?updatedAt=1752149915967',
                calendarLinkObject: {
                    eventName: "Neha & Nihal's Pheras",
                    date: { date: 19, month: 1, year: 2025 },
                    startTime: { hour: 2, minute: 51, second: 0 },
                    endTime: { hour: 3, minute: 51, second: 0 },
                    location: 'Home, Bhilwara (Raj)',
                    description: 'Anything you want for the Pheras ceremony!'
                }
            }
        ]
    },
    highlights: {
        personalVows: {
            her: {
                title: 'नेहा की कलम से',
                description: `<p>
                    बीता <b>"भीलवाड़ा"</b> के आँगन में, जहां मेरा बचपन, <br />यहाँ की गलियों में घुमा
                    मेरा चंचल मन।
                  </p>
                  <p>
                    छोटी-छोटी बातों पर मैं इतराई, आँखे भी दिखाई,
                    <br />मेरे <b>पापा</b> ने फिर भी मुझे, प्यार से मनाया।
                  </p>
                  <p>
                    मेरी हर जीत का, परिवार ने उत्सव मनाया,
                    <br />
                    <b>मम्मी</b> ने बहुत प्यार से, खिलाया-पिलाया।
                  </p>
                  <p>
                    दिए बचपन से, <b>दादा-दादी</b> जी ने संस्कार,
                    <br />
                    <b>नाना-नानी</b> जी ने भी, लुटाया ढेर सारा प्यार।
                  </p>
                  <p>
                    <b>भुआ-फूफा</b> से मिला अपनापन, <br /><b>चाची</b> ने सजने में, खूब हाथ बटाया।
                    <br />
                    <b> चाचाओं</b> ने बचपन से, मंदिरों में खूब घुमाया,
                  </p>
                  <p>
                    छोटे <b>भाई-बहनों</b> से रिश्ता है बहुत गहरा।
                    <br />
                    चाहे जैसा समय हो, हमेशा साथ दिया मेरा।
                  </p>
                  <p>
                    अब <b>"जयपुर"</b> की गलियों को शुरू से याद करना है, <br />बढ़ानी है ससुराल की
                    शोभा।
                  </p>
                  <p>आशा है, चमकाती रहूंगी हमेशा, दोनों कुलों की आभा।</p>
                  <p>जितना प्यार मुझे दिया, उतना <b>"निहाल"</b> पर भी लुटाते रहना,</p>
                  <p>और अपनी इस नादान सी <b>"बिटिया"</b> को, हमेशा लाड़ लड़ाते रहना।</p>
                  <p></p>
                  <p></p>
                  <h6></h6>`
            },
            his: {
                title: 'The New Beginning',
                description: `<p>You've arrived to bring us cheer</p>
                  <p>Filling each moment with colors so clear.</p>
                  <p></p>
                  <p class="mt-4">This home is yours, your new space,</p>
                  <p>With your presence, it's filled with grace.</p>
                  <p>You are the queen of hearts, our home's pride,</p>
                  <p>With you, every morning and evening feels bright</p>
                  <p>We'll walk with you, your dreams we'll fullfill,</p>
                  <p>Together we'll face every joy and every hill</p>
                  <p></p>
                  <p class="mt-4">Neha, you're welcome with open arms,</p>
                  <p>The heartbeat of this family, bringing endless charms.</p>`
            }
        },
        videos: [
            {
                title: 'The Teaser',
                link: 'https://www.youtube.com/embed/hInsIoe3zMY?si=cMw9HwpThOWOYhq_',
            },
            {
                title: 'Timeless elegance at Temple',
                link: 'https://www.youtube.com/embed/vMwSLdLU5_c?si=xISmX3PxvJ1MH3zQ',
            },
            {
                title: 'Majestic Hilltops: Drone Shoot',
                link: 'https://www.youtube.com/embed/klKpxFy25fc?si=tXP7h6EToO3ZTPJ6',
            },
            {
                title: 'Blush and bloom at lakes',
                link: 'https://www.youtube.com/embed/bI-sLhqs0ow?si=7nQ929VHlLgopLZb',
            },
            {
                title: 'Royal tales at Rajputi Hues',
                link: 'https://www.youtube.com/embed/EPdmhJSg4kc?si=N1DJHJnijoywh0XB',
            },
            {
                title: 'Lavender dreams at hills',
                link: 'https://www.youtube.com/embed/iuUn7dWJezc?si=CxanHJtj_AuQWStk',
            },
            {
                title: 'Soothing View: Drone Shoot',
                link: 'https://www.youtube.com/embed/om2scemS0Hk?si=abA22v7wgFY_JRzY',
            },
            {
                title: 'The Movie',
                link: 'https://www.youtube.com/embed/8TNwmc5-de4?si=Bed3__uEeM9_PbwQ',
            },
        ]
    }
}
