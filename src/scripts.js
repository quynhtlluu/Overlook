// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


import './css/styles.css';
//imported classes
import Bookings from './classes/bookings.js'
import Rooms from './classes/rooms.js'
import User from './classes/user.js'

//login-page querySelectors
const loginPage = document.querySelector('.login-page')
const username = document.querySelector('#userLoginValue')
const password = document.querySelector('#userPassLoginValue')
const loginButton = document.querySelector('.login-button')
const incorrentLoginText = document.querySelector('.incorrect-login-text')
//user-page querySelectors
const userMainPage = document.querySelector('.user-main-page')
const userLogOut = document.querySelector('.user-logout-button')
const welcomeUserMessage = document.querySelector('.welcome-user')
const userExpenseMessage = document.querySelector('.user-expenses')
const calenderInput = document.querySelector('#calenderInput')
const searchBookingsButton = document.querySelector('.search-button-date')
const filterBookingsButton = document.querySelector('.filter-button-room')
const errorMessage = document.querySelector('.error-message')
const availableRoomsContainer = document.querySelector('.rooms-container')
const pastAndUpcomingBookingContainer = document.querySelector(".user-bookings-container")
const roomTypeSelection = document.querySelector('#user-roomtype-options')
//manager-page querySelectors
const managerPage = document.querySelector('.manager-page')
const managerLogOut = document.querySelector('.manager-logout-button')
const todaysDate = document.querySelector('.today-stats')
const occupiedRoomsStats = document.querySelector('#occupiedRooms')
const revenueStats = document.querySelector('#totalRevenue')
const roomsAvailableStats = document.querySelector('#roomsAvailable')
const findGuestInput = document.querySelector('#findGuestInput')
const findGuestSubmitButton = document.querySelector('.search-guest-button')
const guestAvailableRoomsContainer = document.querySelector('.guest-rooms-container')
const guestPastAndUpcomingBookingContainer = document.querySelector('.guest-bookings-container')
const guestExpenseMessage = document.querySelector('.guest-expenses')
const managerSearchRoomDateButton = document.querySelector('.search-button-date2')
const managerFilterRoomButton = document.querySelector('.filter-button-room2')
const guestRoomTypeOptions = document.querySelector('#guest-roomtype-options')
const managerCalenderInput = document.querySelector('#managerCalenderInput')
const managerErrorMessage = document.querySelector('.manager-error-message')

//global variables
let allCustomersData;
let clients = []
let currentClient;
let allRoomsData;
let allBookingsData;
let selectedDate;
let roomNumber;
let availableRoomsonDate;
let currentDay;
let roomsBookedOnDay = []
let roomIdFromPost;
let year;
let month;
let day;
let bookedDateNumbers;


//fetch functions
function allCustomersFetch() {
    fetch(`http://localhost:3001/api/v1/customers`)
    .then(response => response.json())
    .then(data => {
        allCustomersData = data.customers
        clientGenerator()
    })
}

function roomsFetch() {
    fetch(`http://localhost:3001/api/v1/rooms`)
    .then(response => response.json())
    .then(data => {
        allRoomsData = data.rooms
    })
}

function bookingsFetch() {
    return fetch(`http://localhost:3001/api/v1/bookings`)
    .then(response => response.json())
    .then(data => {
        allBookingsData = data.bookings
    })
}

function addBookingsPost() {
    return fetch(`http://localhost:3001/api/v1/bookings`, {
        method:'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ 
            userID: currentClient.id, 
            date: selectedDate,
            roomNumber: roomNumber 
        })
    })
    .then(response => { 
        if (!response.ok) {
          throw new Error('there was an error booking your reservation, Try again')
        } else {
            clearErrorMessages()
            return response.json()
        }
    })
    .then(newBooking => roomIdFromPost = newBooking.newBooking.id)
    .then(() => bookingsFetch())
    .catch(err => {
        errorMessage.innerText = `${err.message}`
        managerErrorMessage.innerText = `${err.message}`
    })

    function deleteBookingsFetch(bookingId) {
        return fetch(`http://localhost:3001/api/v1/bookings/${bookingId}`, {
            method:'DELETE',
            headers: {"Content-Type": "application/json"},
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('There was an error removing a reservation, try again')
            } else {
                managerErrorMessage.innerHTML = ''
                return response.json()
            }
        })
        .then(() => bookingsFetch())
        .catch(err => {
          managerErrorMessage.innerHTML = `${err.message}`
      })
    }
}

//event handlers
function clientGenerator() {
    return allCustomersData.forEach(customer => {
        clients.push(new User(customer))
    })
}

function changeBookingData(bookingsData, roomsData) {
    const changeBookingDetails = clients.forEach(client => {
        client.determineBookingRoomType(bookingsData, roomsData)
    })
    return changeBookingDetails
}

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


console.log('This is the JavaScript entry file - your code begins here.');
