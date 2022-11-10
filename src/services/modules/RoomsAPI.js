import api from '../api'

export default {
    getAllRooms() {
        // return api()
        //     .get('/api/rooms')
        return [{
                    roomType: 'REGULAR',
                    price: 100,
                    size: 10,
                    numberOfBeds: 2
                },
                {
                    roomType: 'DELUX',
                    price: 1000,
                    size: 100,
                    numberOfBeds: 20,
                },
                {
                    roomType: 'ECONOMY',
                    price: 1,
                    size: 1,
                    numberOfBeds: 1,
                },
                {
                    roomType: 'KING',
                    price: 400,
                    size: 50,
                    numberOfBeds: 10,
                }
            ]
    }
}