let redis = require('redis');
let client = redis.createClient();

client.on('connect', () => {
     console.log('Redis client connected');
});

client.on('error', (err) => {
     console.log(`Something went wrong ${err}`);
});

module.exports = client;