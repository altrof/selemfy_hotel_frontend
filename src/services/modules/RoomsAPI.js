import api from '../api'

export default {
    getAllRooms() {
        return api()
            .get('/api/rooms')
    }
}