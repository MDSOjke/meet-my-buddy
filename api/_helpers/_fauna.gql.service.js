import { axiosCall } from './_axios-helpers.js'

const BASE_URL = 'https://graphql.fauna.com/graphql';

//Calls and options
// All events
const allEventsOptions = {
    url: BASE_URL,
    method: 'post',
    data: {
        query: `{
            allEvents {
                data {
                    _id
                    title
                    datetime
                    status
                    place
                    participants {
                        data {
                            username
                        }
                    }
                }
            }
        }`
    },
    headers: {
        'authorization': `Basic ${process.env.A_KEY}`
    }
}

export async function fetchAllEvents () {
    const eventsCall = await axiosCall(allEventsOptions, (data) => {
        const dataRoot = data.data.allEvents.data;
        return dataRoot.map(function (event) {
            return Object.assign(event, {
                id: event._id
            })
        });
    })
    return eventsCall
}

// Specific events

export async function fetchEvent (id) {
    const eventsCall = await axiosCall({
        url: BASE_URL,
        method: 'post',
        data: {
            query: `{
                findEventByID(id: ${id}) {
                    _id
                    title
                    datetime
                    status
                    place
                    participants {
                        data {
                            username,
                            avatar
                        }
                    }
                }
            }`
        },
        headers: {
            'authorization': `Basic ${process.env.A_KEY}`
        }
    }, (data) => {
            return data.data.findEventByID
        })
    return eventsCall
}

