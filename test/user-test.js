import { expect } from 'chai';
import User from '../src/classes/user-class';

describe('user', () => {
    let user1;
    let bookingsData;
    let roomsData;
    beforeEach(() => {
        bookingsData = [
            {id: '5fwrgu4i7k55hl6sz', userID: 9, date: '2022/04/22', roomNumber: 15},
            {id: '5fwrgu4i7k55hl6t5', userID: 43, date: '2022/01/24', roomNumber: 24},
            {id: '5fwrgu4i7k55hl6t6', userID: 13, date: '2022/01/10', roomNumber: 12},
            {id: '5fwrgu4i7k55hl6t7', userID: 20, date: '2022/02/16', roomNumber: 7},
            {id: '5fwrgu4i7k55hl6t8', userID: 1, date: '2022/02/05', roomNumber: 12},
            {id: '5fwrgu4i7k55hl6t9', userID: 38, date: '2022/02/14', roomNumber: 14},
            {id: '5fwrgu4i7k55hl6ta', userID: 25, date: '2022/01/11', roomNumber: 9},
            {id: '5fwrgu4i7k55hl6tb', userID: 49, date: '2022/02/06', roomNumber: 5},
            {id: '5fwrgu4i7k55hl6tc', userID: 22, date: '2022/01/30', roomNumber: 13},
            {id: '5fwrgu4i7k55hl6td', userID: 27, date: '2022/01/31', roomNumber: 20},
            {id: '5fwrgu4i7k55hl6te', userID: 44, date: '2022/01/19', roomNumber: 8}
            ]
        
        roomsData = [
            {
            bedSize: "queen",
            bidet: true,
            costPerNight: 358.4,
            numBeds: 1,
            number: 1,
            roomType: "residential suite"
            },
            {
            bedSize: "full",
            bidet: false,
            costPerNight: 477.38,
            numBeds: 2,
            number: 2,
            roomType: "suite"
            },
            {
            bedSize: "king",
            bidet: false,
            costPerNight: 491.14,
            numBeds: 1,
            number: 3,
            roomType: "single room"
            },
            {
            bedSize: "queen",
            bidet: false,
            costPerNight: 429.44,
            numBeds: 1,
            number: 4,
            roomType: "single room"
            },
            {
            bedSize: "queen",
            bidet: true,
            costPerNight: 340.17,
            numBeds: 2,
            number: 5,
            roomType: "single room"
            },
            {
            bedSize: "queen",
            bidet: true,
            costPerNight: 397.02,
            numBeds: 1,
            number: 6,
            roomType: "junior suite"
            },
            {
            bedSize: "queen",
            bidet: false,
            costPerNight: 231.46,
            numBeds: 2,
            number: 7,
            roomType: "single room",
            },
            {
            bedSize: "king",
            bidet: false,
            costPerNight: 261.26,
            numBeds: 1,
            number: 8,
            roomType: "junior suite"
            },
            {
            bedSize: "queen",
            bidet: true,
            costPerNight: 200.39,
            numBeds: 1,
            number: 9,
            roomType: "single room"
            },
            {
            bedSize: "twin",
            bidet: false,
            costPerNight: 497.64,
            numBeds: 1,
            number: 10,
            roomType: "suite"
            },
            {
            bedSize: "twin",
            bidet: true,
            costPerNight: 207.24,
            numBeds: 2,
            number: 11,
            roomType: "single room"
            },
            {
            bedSize: "twin",
            bidet: false,
            costPerNight: 172.09,
            numBeds: 2,
            number: 12,
            roomType: "single room"
            },
            {
            bedSize: "queen",
            bidet: false,
            costPerNight: 423.92,
            numBeds: 2,
            number: 13,
            roomType: "single room"
            },
            {
            bedSize: "twin",
            bidet: false,
            costPerNight: 457.88,
            numBeds: 1,
            number: 14,
            roomType: "residential suite"
            },
            {
            bedSize: "full",
            bidet: false,
            costPerNight: 294.56,
            numBeds: 1,
            number: 15,
            roomType: "residential suite"
            },
            {
            bedSize: "full",
            bidet: false,
            costPerNight: 325.6,
            numBeds: 2,
            number: 16,
            roomType: "single room"
            },
            {
            bedSize: "twin",
            bidet: false,
            costPerNight: 328.15,
            numBeds: 2,
            number: 17,
            roomType: "junior suite"
            },
            {
            bedSize: "king",
            bidet: false,
            costPerNight: 496.41,
            numBeds: 2,
            number: 18,
            roomType: "junior suite"
            },
            {
            bedSize: "queen",
            bidet: false,
            costPerNight: 374.67,
            numBeds: 1,
            number: 19,
            roomType: "single room"
            },
            {
            bedSize: "queen",
            bidet: false,
            costPerNight: 343.95,
            numBeds: 1,
            number: 20,
            roomType: "residential suite"
            },
            {
            bedSize: "full",
            bidet: false,
            costPerNight: 429.32,
            numBeds: 2,
            number: 21,
            roomType: "single room"
            },
            {
            bedSize: "full",
            bidet: false,
            costPerNight: 350.31,
            numBeds: 2,
            number: 22,
            roomType: "single room"
            },
            {
            bedSize: "queen",
            bidet: false,
            costPerNight: 176.36,
            numBeds: 2,
            number: 23,
            roomType: "residential suite"
            },
            {
            bedSize: "queen",
            bidet: false,
            costPerNight: 327.24,
            numBeds: 1,
            number: 24,
            roomType: "suite"
            },
            {
            bedSize: "queen",
            bidet: true,
            costPerNight: 305.85,
            numBeds: 1,
            number: 25,
            roomType: "single room"
            }
            ]

        const userSample = {id: 1, name: 'Leatha Ullrich'}
 
        user1 = new User(userSample)
    })