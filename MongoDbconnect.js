mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/lab_Iek6'
//const MONG_URI= 'mongodb+srv://nhq:hhqazi2906@cd5006.438bk.mongodb.net/labIek7?retryWrites=true&w=majority'
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection;
db.on('error', function (err) {
     console.log('Error occured' + err)
})
db.once('connected', function () {
     console.log('connection is successful to' + url)
})
module.exports = db
