let mongoose = require('mongoose');
var StarSchema = new mongoose.Schema ({
    name: {type: String, required: [true, "Enter a name"], minlength: [3, "Name cannot be less than 3 characters"]},
    star: {type: Number, required: [true, "Enter a starring"], min: [1, "Starring cannot be less than 1"], 
    max:[5,"Starring cannot be greater than 5"]},
    review: {type: String, required: [true, "Enter a review"], minlength: 
    [3, "Review cannot be less than 3 characters"]}
}, {timestamps: true});

mongoose.model("Star", StarSchema);

var VacationSchema = new mongoose.Schema({
    vacation: {type: String, required: [true, "Vacation cannot be empty"], minlength: [3, "Vacation cannot be less than 3 characters"]},
    activity: {type: String, required: [true, "Activity cannot be empty"], minlength: [3, "Activity cannot be less than 3 characters"]},
    starrings: [StarSchema]
}, {timestamps: true});
mongoose.model("Vacation", VacationSchema);

// For test change name of schemas
// Change variable names in controller
//One to Many above