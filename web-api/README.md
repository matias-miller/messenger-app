# API Documentation

This document provides information about the endpoints available in the API.

## Table of Contents

- [Create User](#create-user)
- [Update User](#update-user)

## Create User

**Endpoint:** `POST /api/create-user`

**Description:** Creates a new user in the system.

**Additional Info**

**Request Body:**
- `username` (string): The username of the new user.
- `email` (string): The email address of the new user.
- `password` (string): The password of the new user.

**Response:**
- `201 Created`: If the user is created successfully.
- `400 Bad Request`: If a user with the provided email already exists.
- `500 Internal Server Error`: If an unexpected error occurs.

## Update User

**Endpoint:** `PUT /api/update-user/:userId`

**Description:** Updates an existing user's information.

**Additional Info**

**Parameters:**
- `userId` (string): The ID of the user to update.

**Request Body (Optional):**
- `username` (string): The new username of the user.
- `email` (string): The new email address of the user.
- `password` (string): The new password of the user.

**Response:**
- `200 OK`: If the user is updated successfully.
- `404 Not Found`: If the user with the provided ID does not exist.
- `500 Internal Server Error`: If an unexpected error occurs.
