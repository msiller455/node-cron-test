const cron = require('node-cron');
const Log = require('./models/log')
require('dotenv').config()
require('./config/database')

// cron syntax to perform at 7AM everyday.
cron.schedule('0 7 * * *', () => {
    try{
        Log.create({ type: 'daily' })
            .then(log => {
                console.log(log)
            })
    } catch(err) {
        console.log(err)
    }
});

// cron syntax to perform at 7AM every Tues.
cron.schedule('0 7 * * Tues', () => {
    try{
        Log.create({ type: 'weekly' })
            .then(log => {
                console.log(log)
            })
    } catch(err) {
        console.log(err)
    }
});

// cron syntax to perform at 7AM every 5th day of the month.
cron.schedule('0 7 5 * *', () => {
    try{
        Log.create({ type: 'monthly' })
            .then(log => {
                console.log(log)
            })
    } catch(err) {
        console.log(err)
    }
});

// cron.schedule('*/5 * * * * *', () => {
//     console.log('running every 5 seconds')
// });

// cron.schedule('*/15 * * * * *', () => {
//     console.log('running every 15 seconds')
// })