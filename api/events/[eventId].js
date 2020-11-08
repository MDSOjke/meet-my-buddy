import { fetchEvent } from '../_helpers/_fauna.gql.service.js'

module.exports = async (req, res) => {
    const eventResponse = await fetchEvent(req.query.eventId);
    if (eventResponse.result === "Error") {
        console.log('Database error');
    }
    res.json(eventResponse);
}