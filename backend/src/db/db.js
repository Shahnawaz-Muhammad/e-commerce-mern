const mongoose = require('mongoose')

module.exports = function() {
    const db = 'mongodb://shahnawaz:admin1122@ac-k0wjpox-shard-00-00.kgkgyzw.mongodb.net:27017,ac-k0wjpox-shard-00-01.kgkgyzw.mongodb.net:27017,ac-k0wjpox-shard-00-02.kgkgyzw.mongodb.net:27017/test?replicaSet=atlas-1l1vlk-shard-0&ssl=true&authSource=admin'
    mongoose.set('strictQuery', false)

    mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    mongoose.connection.on("connected", function() {
        console.log("Mongoose connected successfully to " + db)

    })

    mongoose.connection.on("error", function(err) {
        console.log("Mongoose connection error on " + err)
    })
    
    mongoose.connection.on("disconnected", function() {
        console.log("Mongoose disconnected")
    })


}