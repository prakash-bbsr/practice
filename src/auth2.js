const axios = require('axios');

async function getAccessToken() {
    const response = await axios.post(
        'https://auth.example.com/oauth/token',
        new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: 'YOUR_CLIENT_ID',
            client_secret: 'YOUR_CLIENT_SECRET'
        }),
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    );

    return response.data.access_token;
}

async function callApi() {
    try {
        const accessToken = await getAccessToken();

        const response = await axios.get(
            'https://api.example.com/users',
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }
        );

        console.log(response.data);
    } catch (error) {
        console.error(
            error.response?.data || error.message
        );
    }
}

callApi();