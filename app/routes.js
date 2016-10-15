module.exports = function(app) {
    var api = require('./api.js');
    app.get('/', function (req, res){
        console.log("from /");
        res.render('index');
    });
    app.get('/partials/:name', function (req, res) {
            var name = req.params.name;
            console.log("Name [" + name + "]");
            res.render('partials/' + name);

    });

};
