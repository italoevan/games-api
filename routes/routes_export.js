const games = require('./games_route');

class RoutesExports {

    constructor(expressInstance){
        this.expressInstance = expressInstance;
    }

    callAllRoutes(){
        this.expressInstance.use(games);
    }

}

module.exports = RoutesExports;