'use strict';
//TODO: Set mongodb-core to start with differnet test db server

module.exports = {
    env: 'production',
    db: 'mongodb://localhost/projectTestDB',
    port: process.env.PORT || 4100,
}