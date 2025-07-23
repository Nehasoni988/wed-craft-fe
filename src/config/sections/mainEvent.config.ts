import { TMainEvent } from "../../types/sections/mainEvent.types";

export const mainEvent: TMainEvent = {
    date: {
        date: 18,
        month: 1,
        year: 2025
    },
    time: {
        hour: 19,
        minute: 0,
        second: 0
    },
    venue: {
        name: 'Ramsnehi Vatika',
        city: 'Bhilwara',
        state: 'Rajasthan',
        googleMapLink: 'https://www.google.com/maps/place/Ramdwara+Ramsnehi/@25.3495197,74.6402191,17z/data=!3m1!4b1!4m6!3m5!1s0x3968c3b47d3322c5:0xe8bef2b12fadffff!8m2!3d25.3495149!4d74.642794!16s%2Fg%2F11_1qqy9w?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
        googleMapImage: ''
    },
    couple: {
        her: {
            name: 'Neha',
            designation: 'Code Whisperer',
            parents: {
                mother: {
                    name: 'Shobha Soni'
                },
                father: {
                    name: 'Nand Kishor Soni'
                }
            },
        },
        his: {
            name: 'Nihal',
            designation: 'Code Whisperer',
            parents: {
                mother: {
                    name: 'Sudha Soni'
                },
                father: {
                    name: 'Ninendra Soni'
                }
            },
        },
    }
}