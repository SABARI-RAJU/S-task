const fetch = require('node-fetch');
const getUserService = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
};

module.exports = { getUserService };