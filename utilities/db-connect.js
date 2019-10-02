const mongoose = require('mongoose')

const database  = 'user-template'
const appPort   = 27017
const dbConnection = `mongodb://127.0.0.1:${appPort}/${database}`

mongoose.connect(dbConnection, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

