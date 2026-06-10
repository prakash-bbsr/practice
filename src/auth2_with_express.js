const express = require('express');
const axios = require('axios');

const app = express();

app.get('/users', async (req, res) => {
    try {
        const token = await getAccessToken();

        const response = await axios.get(
            'https://api.example.com/users',
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        res.json(response.data);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

app.listen(3000);