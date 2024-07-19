const mongoose = require('mongoose');
const { ATLAS_DB_URL, NODE_ENV } = require('./serverConfig');


async function connectToDB() {

    try {
        if(NODE_ENV == "development") {
            await mongoose.connect(ATLAS_DB_URL);
            console.log("Mongodb connected")
        } 
    } catch(error) {
        console.log('Unable to connect to the DB server');
        console.log(error);
    }

}

module.exports = connectToDB;