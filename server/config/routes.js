var mongoose = require('mongoose')
var Vacation = mongoose.model('Vacation')
var vacations = require('../controllers/controller.js')
var path = require('path');
module.exports = (app) => {
    //All CRUD
    app.get('/vacations', vacations.show); //display all vacations

    app.post('/vacations', vacations.create); //create new

    app.get('/vacations/:id', vacations.showone); //show or read one

    app.put('/vacations/:id', vacations.update); //update

    app.put('/vacations/:id/review', vacations.newReview); //updates vacation with new review

    app.get('/weather/', vacations.getweather);//api
    
    app.delete('/vacations/:id', vacations.delete) //delete

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}