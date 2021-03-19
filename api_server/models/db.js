const mongoose = require('mongoose');
const dbURI = "mongodb+srv://admin:628@cluster0.jscoj.mongodb.net/Bookstore?retryWrites=true&w=majority"
//const dbURI = "mongodb+srv://CS628team:UERjRwAMLQzLil4v@cluster0.7yjvb.mongodb.net/test";
// if (process.env.NODE_ENV === 'production') {
//     dbURI = "mongodb+srv://CS628team:xxxxxxxxx@cluster0.7yjvb.mongodb.net/test"
// }

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error: ${err}`);
})
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
})

//close the database connection based on termination events
const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected from ${msg}`);
        callback();
    });
};

//Capture the process termination events
//SIGUSR2 signal from nodemon
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

//SIGINT signal from terminal
process.on('SIGINT', () => {
    gracefulShutdown('app terminal', () => {
        process.exit(0);
    });
});

require('./books');
 


