import { expect } from 'chai';
import Bookings from '../src/classes/bookings';

describe('bookings', () => {
    let booking1;
    beforeEach(() => {
        const bookingSample = {id: '5fwrgu4i7k55hl6sz', 
            userID: 9, 
            date: '2022/04/22', 
            roomNumber: 15}
 
        booking1 = new Bookings(bookingSample)
    })

    it('should be a function', () => {
        expect(Bookings).to.be.a('function')
    })

    it('should be an instance of Bookings', () => {
        expect(booking1).to.be.an.instanceof(Bookings)
    })
})