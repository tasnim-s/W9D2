const Game = require("./game.js");

function GameView(ctx){
    this.ctx = ctx
    this.game = new Game()
}

GameView.prototype.start = function(){
    setInterval(this.game.moveObjects(this.ctx), 20)
    setInterval(this.game.draw(this.ctx), 20)
}

module.exports = GameView;