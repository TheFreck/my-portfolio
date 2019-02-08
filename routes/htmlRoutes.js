module.exports = function(app) {
    console.log("++++++++++++++htmlRoutes++++++++++++++");

    // var db = require("./models");
    
    app.get("/", function(req, res){
        // console.log("/profile");
        res.render("index", { stuff: "anything you want" });
    });
    
    app.get("/index", function(req, res) {
        // console.log("/index");
        res.render("index",{data: "mush"});
    });
    
};