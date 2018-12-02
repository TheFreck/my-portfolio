

module.exports = function(app) {
    console.log("++++++++++++++htmlRoutes++++++++++++++");
    app.get("/", function(req, res) {
        console.log("/");
        res.render("index",{data: "mush"});
    });

    
};