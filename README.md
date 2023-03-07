# Overlook

## Table of Contents

  * [Abstract](#abstract)
  * [Set-Up Instructions](#set-up-instructions)
  * [Developers](#developers)
  * [Goals](#goals)
  * [Demonstration](#demonstration)
  * [Technologies Used](#technologies-used)
  * [Reflections](#reflections)
    + [Challenges](#challenges)
    + [Wins](#wins)
  * [Future Considerations](#future-considerations)
  * [Acknowledgements](#acknowledgements)

## Abstract
**Overlook** is a web application designed to allow for users to check into hotel rooms. It is as application that has a dashboard that allows for a user to keep track of expenses as they look through hotel rooms. They are able to filter out an array of bookings by date and by the type of room they are looking to book. A user is also able to look through a list of bookings as they make their decisions as well.

If a user has manager permissions, they are able to look at a variety of information that includes the following:
- Total Rooms Available for today’s date
- Total revenue for today’s date
- Percentage of rooms occupied for today’s date

This application makes it convenient for people to keep track of data as they are looking to make a multitude of purchases.

## Set-Up Instructions
1. Copy the following SSH link: `git@github.com:quynhtlluu/Overlook.git`
2. After determining one's desired installation location, open one's command line interpreter and run the following text into one's command line interpreter: `git clone git@github.com:quynhtlluu/Overlook.git`
3. Install NPM packages:
  i. Run `npm install` to install project dependencies.
  ii. Run `npm start` through the command line interpreter to see the HTML page.
4. Clone down the local API server by following the instructions listed [here](https://github.com/turingschool-examples/overlook-api).
5. Enter `https://localhost:8080` in your web browser to view the web application.
  i. To stop the web application from running on one's local server, enter `CTRL + C` into one's command line interpreter.

## Developer
- [Quynh Luu](https://github.com/quynhtlluu)

## Code Reviewer
- [Amber Shipley](https://github.com/EspressoGoddess)

## Goals
- Use OOP to drive the design of the application and the code
- Work with an API to send and receive data
- Solidify the code review process
- Create a robust test suite that thoroughly tests all functionality of a client-side application
- Create a dashboard that is easy to use and displays information in an accessible way for users
- Write code that follows SRP (Single Responsibility Principle).
- Use TDD to implement robust testing suites
- Make network requests to retrieve data using `.fetch()` and other methods

*More information can be found on [the official project specifications document](https://frontend.turing.edu/projects/overlook.html).*

## Demonstration
Upon loading the web application's main interface, a user is able to login with personal information. They are able to filter hotel room bookings by a given date. They are also able to filter a hotel room booking by a given type of room. They can then book a room of their choosing. If a user were to log out and then log back in as a manager, they would be able to a whole list of information about rooms.

https://user-images.githubusercontent.com/103916293/223342657-0e1661d9-6fc9-476a-9f6f-62da75640cd6.mov


## Technologies Used
- Javascript (ES5, ES6)
- [Node.js](https://nodejs.org/en/)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)

## Reflections
### Challenges
- I had to learn how to get certain API calls to work when they weren't able to at a given time.
- I also had to learn to work with asynchronous Javascript for the first time and that took a great amount of review lessons.
- Making changes to make my website more accessible was also a task that I learned to do more with this project with making design choices that I did not apply on past projects.

### Wins
- I was able to get the needed data I wanted to to display successfully.
- Have the application work with asynchronous Javascript for the first time.

### Future Extensions
- Implement a more accessible website layout with more dynamic element sizing
- Refine some of the stylistic choices of the application for a neater, more "professional" look
- Make any personal informationt hat gets inputted remain hidden

## Acknowledgements
- Icons from [Icons8](https://icons8.com/) and [Flaticon](https://www.flaticon.com/)
- Background Images from [Unsplash](https://unsplash.com/)
