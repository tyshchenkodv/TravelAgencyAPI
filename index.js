const app = require('./app');

const listen = app.listen(3000, () => {
    console.log('App server is running!');
});