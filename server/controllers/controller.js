var mongoose = require("mongoose");
var Vacation = mongoose.model("Vacation");//change for test
var Star = mongoose.model("Star");
//change for test variable names below
module.exports = {
    show: function (req, res) {
        Vacation.find({}, function (err, vacations){//change for test
            if (err) {
                console.log("Error:", err);
                res.json(err);
            }
            else{
                res.json(vacations);//change for test
            }
      });
    },
    create : function (req, res) {
        console.log("Are you going", req.body);
        Vacation.create({ vacation: req.body.vacation, activity: req.body.activity, review:
        req.body.review, star: req.body.star}, function(err, vacation){
            if (err){
                console.log("Error:", err);
                res.json(err);
            }
            else{
                res.json({success: "Successfully submitted"});
            }
        });
    },
    showone: function (req, res) {
        Vacation.findOne({ _id: req.params.id}, function (err, vacation){
            if (err) {
                console.log("Error:", err);
                res.json(err);
            } else {
                console.log("It worked!");
                res.json(vacation);
            }
        })
    },
    update: function (req, res) {
        Vacation.update({ _id: req.params.id },{
            vacation:req.body.vacation,
            activity: req.body.activity,
            runValidators: true}, (err) => {
            if(err){
                res.json(err);
            }
            else {
                res.json({success: "Successfully updated"});
            }
        });
    },
    newReview: function (req, res) {
        Star.create({name: req.body.name, star: req.body.star, 
                review: req.body.review},
            function (err, starring) {
            if (err) {
                res.json(err);
            }else {
                console.log(starring);
                Vacation.update({_id: req.params.id}, {$push: {starrings: starring}, runValidators: true},
                function(err) {
                    if(err) {
                        res.json(err);
                    }else{
                        res.json({success: "New review/star added successfully"})
                    }
                });
            }
        });
    },

    getweather: function(req, res) {
        var weather = {
            request: req.get('http:api.openweathermap.org/data/2.5/forecast?id=524901&APPID=10375097e4fd8f7738a7a8e9dff62252')
        }
        console.log(weather)
        var weather2 = {
            request: req.get('http:api.openweathermap.org/data/2.5/weather?q=London')
        }
        res.json(weather.request)
    },

    delete: function (req, res){
        console.log(req.params.id);
        Vacation.findByIdAndDelete(req.params.id, function (err){
            if (err){
                console.log("Error:", err);
                res.json(err);
            }
            else{
                console.log("Vacation has been deleted!");
                res.json({success: "Vacation has been deleted"});
            }
        });
    },
};
