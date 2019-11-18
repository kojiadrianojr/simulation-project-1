# Simulation Project 1

## Project Overview

For this project we'll be simulating building a small application which requires
a set of specified features. There will be no specified steps to implementing
the required features, only an acceptance criteria for what the applications
should be able to accomplish.

You are required to use **React.js** as the frontend web application UI library.
Please do not mix things such as JQuery or raw DOM manipulation within this
project, use React.js for all UI code.

Please follow the instructions below to get started with this project.

## Project Setup

This project uses a development API that you'll need to utilize and make
requests to. There are a few steps to get this API setup and running properly.

### System Requirements

`nodejs` is required to be installed on your system.

### Install Project Dependencies

Run `npm install` from project root directory.

### Populate development API database

Run `npm run init:db` from project root directory.

Wait for the initialization process to stop. You now have a bunch of fake users
setup for you to use while building this project. You can inspect the users data
by looking at the [db.json](db.json) file located at the root directory of the
project.

### Run development API

Run `npm start` from project root directory.

This will start a development API server which can be queried at
`localhost:3000`.

This API is very simple and only has one resource, the users we just created at
`http://localhost:3000/users`. This endpoint supports all of the typical HTTP
methods (GET, POST, PUT, PATCH, DELETE).

## Project Requirements

### Pages

This application will consist of three pages.

- Registration Page - `/register`
- Login Page - `/login`
- User management page - `/manage-users`

### Registration Page:

Users require a page to sign-up for this application. We will call this the
registration page. The registration page needs to be able to accept the
following data from a user.

- email address
- username
- firstName
- lastName
- password

All of the above fields are **required**.

Users should be required to confirm their password by entering it twice before
they can submit it to the server.

Validation should be added to ensure a submission cannot be made until all
required data has been entered.

**Important:** When sending data to the `/register` endpoint add an `active`
property with the value of `true` to the registration object. This value will be
used later on.

The data needs to be sent to the `/register` endpoint of the API server. If
registration is successful, redirect the user to the `/login` page to have them
login to their account.

If an error occurs, display a helpful message to the user.

### Login Page:

This page is going to be used by existing users to login to the application.
Login will simply be an `email` address along with the user's `password`. There
should be a link to the registration page so users that are not register yet can
register.

Again the data for logging in will simply be:

- email
- password

This data will then be passed to the `/login` API endpoint.

This endpoint will return an `authorizationToken`. You'll need to utilize this
token when making subsequent requests for resources that require authorization
to be queried. You can use things such as `localStorage` to store this
information in the web browser and reuse it for subsequent requests.

When a user is logged in successfully they should be redirected to the
`manage-users` page.

If there is an error when logging in, please display a relevant error message to
the user.

### Manage Users Page:

**Important:** Users should not be able to navigate to this page unless they are
authorized. If an unauthorized user attempts to navigate to this page they
should be shown or redirected to the login page.

This pages should display a table populated with all of the users queried from
the API. You can query users at the `/users` endpoint of the API.

There should be table columns for the following user fields.

- username
- email
- firstName
- lastName
- active

The `active` column should have a green dot indicating an active value of `true`
and a red dot for an `active` value of `false`.

There should be an **edit** button for each row in the table. When clicked it
should allow the user data to be edited. Only allow editing of `firstName`,
`lastName`, `username`, `active`, `email`. If a user changes their mind about
editing, they should be able to safely exit from the editing UI.

**Note:** To make requests for individual items through the API you need to
utilize the object's `id` in the url. For example `GET /users/1`, will make
return the user object with `id` 1. This also works for other HTTP methods.

There should be a search input that allows for filtering users by `username`.
This filtering should be done client-side (in the react application).

There should be a toggle that allows the user list to be filtered by **active**
or **inactive** users.
