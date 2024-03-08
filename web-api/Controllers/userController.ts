import { Request, Response } from 'express';
import Users from '../Models/Users/Users';

// Function to create a new user
export const createUser = async (req: Request, res: Response) => {
    try {
        // Extract username, email, and password from the request body
        const { username, email, password } = req.body;

        // Check if the user already exists
        const existingUser = await Users.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Create a new user document
        const newUser = new Users({
            username,
            password,
            email
        });

        // Save the new user to the database
        await newUser.save();

        // Respond with success message
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Function to update a user
export const updateUser = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params; // Assuming you pass userId in URL parameters
        const { username, email, password } = req.body;

        // Find the user by ID
        let user = await Users.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Update user fields
        if (username) user.username = username;
        if (email) user.email = email;
        if (password) user.password = password;

        // Save the updated user
        user = await user.save();

        res.json({ message: 'User updated successfully', user });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

