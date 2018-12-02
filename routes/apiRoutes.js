module.exports = function(app){
    app.get("/profile", function(req, res){
        console.log("/profile");
        res.render("profile", { stuff: "anything you want" });
    });
};