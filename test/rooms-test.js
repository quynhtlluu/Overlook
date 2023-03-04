describe('rooms', () => {
    let room1;
    beforeEach(() => {
        const roomSample = {
            bedSize: "queen",
            bidet: true,
            costPerNight: 358.4,
            numBeds: 1,
            number: 1,
            roomType: "residential suite"
            }
 
        room1 = new Rooms(roomSample)
    })

    it('should be a function', () => {
        expect(Rooms).to.be.a('function')
    })
})