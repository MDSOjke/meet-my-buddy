import { fetchAllEvents } from '../_helpers/_fauna.gql.service.js'

module.exports = async (req, res) => {
    const allEventsResponse = await fetchAllEvents();
    if (allEventsResponse.result === "Error") {
        console.log('Database error');
    }
    res.json(allEventsResponse);
}