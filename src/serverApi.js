/*
Keep in .env file
CLIENT_ID=your_client_id
CLIENT_SECRET=your_client_secret
TOKEN_URL=https://auth.example.com/oauth/token
API_URL=https://api.example.com/users*/

const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

async function getAccessToken() {
    const response = await axios.post(
        process.env.TOKEN_URL,
        new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET
        }),
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    );

    return response.data.access_token;
}

app.get('/users', async (req, res) => {
    try {
        const token = await getAccessToken();

        const response = await axios.get(
            process.env.API_URL,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        res.json(response.data);
    } catch (err) {
        res.status(500).json({
            error: err.response?.data || err.message
        });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});