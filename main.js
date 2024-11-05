const cron = require('node-cron');
require('dotenv').config()

// cron syntax to perform at 7AM everyday.
cron.schedule('0 7 * * *', () => {
    console.log('daily running')
});

// cron syntax to perform at 7AM every Tues.
cron.schedule('0 7 * * Tues', () => {
    console.log('weekly running')
});



// cron.schedule('*/5 * * * * *', () => {
//     console.log('running every 5 seconds')
// });

// cron.schedule('*/15 * * * * *', () => {
//     console.log('running every 15 seconds')
// })