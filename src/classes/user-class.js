class User {
    constructor(userDetails) {
        this.id = userDetails.id
        this.name = userDetails.name
        this.username = `customer${this.id}`
        this.bookingRoomDetails = []
        this.roomsBooked = []
        this.expenses = 0
    }
    renderAvailableRooms(date, bookingData, roomData) {
        let numberOfBookedRooms = bookingData.reduce((arr, booking) => {
          if(booking.date === date) {
            arr.push(booking.roomNumber)
          }
          return arr
        }, [])
        let availableRooms = roomData.reduce((arr, room) => {
          if(!numberOfBookedRooms.includes(room.number)) {
            arr.push(room)
          }
          return arr
        }, [])
        return availableRooms
      }
}