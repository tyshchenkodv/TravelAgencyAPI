const app = require('./app');

const listen = app.listen(3001, () => {
    console.log('App server is running!');
});