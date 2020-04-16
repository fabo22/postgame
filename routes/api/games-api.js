const router = require('express').Router();
const request = require('request');

const options = {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "ebaf9c6b31mshf2bbf5af2c580f1p1bfb70jsn6c756e512fa4"
    }
};

router.get('/games', function (req, res) {
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.json().body;
    });
});

module.exports = router;