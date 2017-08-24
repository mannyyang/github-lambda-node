const axios = require("axios"); // Include the axios lib - run npm install axios

exports.handler = (event, context, callback) => {
    // TODO: pass username as an argument
    const username = 'mannyyang';
    
    return axios.get(`https://api.github.com/users/${username}/repos?sort=updated`)
        .then(response => {
            callback(null, response.data);
        })
        .catch(err => {
            callback(err);
        });
};