module.exports = function(app,serverInfo) {
    var api = require('./api.js')();
    var home_api = require('./homeAPI.js')();
    app.get('/', function (req, res){
        console.log("from /");
        res.render('index');
    });
    app.get('/partials/:name', function (req, res) {
            var name = req.params.name;
            console.log("Route  [" + name + "]");
            res.render('partials/' + name);

    });
    app.get('/partials/auth/:name', function (req, res) {
        var name = req.params.name;
        console.log("Route [" + name + "]");
        res.render('partials/auth/' + name);

    });
    app.get('/api/home', home_api.listUsres);
};
