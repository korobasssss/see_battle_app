
import Player from "../elements/player";
import LocalGame from "../localGame";

export class GameState {
    #player1
    #player2

    #game

    constructor() {
        this.#player1 = new Player()
        this.#player2 = new Player()

        this.#game = new LocalGame(this.#player1, this.#player2)
        this.#game.randomShipsOnField(this.#player2)
    }

    _returnCellStatus = (arr) => {
        console.log(arr)
        let newArr = []
        for (let i = 0; i < arr.length; i++) {
            let min_arr = []
            for (let j = 0; j < arr.length; j++) {
                min_arr.push(arr[i][j]._status)
            }
            newArr.push(min_arr)
        }
        return newArr
    }

    getRandomPlacement = () => {
        if (this.#game.getWho() === LocalGame.WHO.FIRST_PLAYER) {
            this.#game.randomShipsOnField(this.#player1)
        } else {
            this.#game.randomShipsOnField(this.#player2)
        }
    }

    getRandomPlacementBoth = () => {
        this.#game.randomShipsOnField(this.#player1)
        this.#game.randomShipsOnField(this.#player2)
    }

    getPlayerField = () => {
       return this._returnCellStatus(this.#player1.field.field)
    }

    getOpponentField = () => {
        return this._returnCellStatus(this.#player2.field.field)
    }

    getWhoseTurn = () => {
        return this.#game.getWho()
    }

    setWhoseTurn = (who) => {
        this.#game.setWho(who)
    }

    setStartGame = () => {
        this.#game.setStartGame()
    }

    getPlayerCountLiveShips = () => {
        return this.#player1.getCountLiveShips()
    }

    getOpponentCountLiveShips = () => {
        return this.#player2.getCountLiveShips()
    }

    getTurnField = () => {
        if (this.#game.getWho() === LocalGame.WHO.FIRST_PLAYER) {
            return this._returnCellStatus(this.#player1.field.field)
        } else {
            return this._returnCellStatus(this.#player2.field.field)
        }
    }

    getNotTurnField = () => {
        if (this.getWhoseTurn() === LocalGame.WHO.FIRST_PLAYER) {
            return this._returnCellStatus(this.#player2.field.field)
        } else {
            return this._returnCellStatus(this.#player1.field.field)
        }
    }

    getPlayer = () => {
        return this.#player1
    }

    getOpponent = () => {
        return this.#player2
    }

    getGame = () => {
        return this.#game
    }

    setTypeGame = (type) => {
        this.#game.setGameType(type)
    }
}