import Cell from "./elements/cell";
import Ship from "./elements/ship";
import RandomPlacement from "./elements/field/randomPlacement"
import {whoseWin} from "../redux/constants";
class LocalGame {
    static WHO = {
        FIRST_PLAYER: "FIRST_PLAYER",
        SECOND_PLAYER: "SECOND_PLAYER"
    }

    static START_GAME = {
        START : "START",
        STOP: "STOP",
        PAUSE: "PAUSE"
    }

    static TYPE = {
        QUEUE: "QUEUE",
        MISS: "MISS"
    }

    _who;
    _startGame = LocalGame.START_GAME.STOP;
    _player1;
    _player2;

    _gameType
    _score

    _flagOfStayPlayer = false;
    _flag_forChange = false
    _getLastCellStatus = Cell.STATIC.EMPTY;
    _getLastShipStatus = Ship.STATUS.NOTHING;

    #randomTurn = () => {
        if (this._startGame === LocalGame.START_GAME.START) {
            if (RandomPlacement.random(2) === 0) {
                return LocalGame.WHO.FIRST_PLAYER
            } else {
                return LocalGame.WHO.SECOND_PLAYER
            }
        } else return LocalGame.WHO.FIRST_PLAYER

    }
    constructor(player1, player2) {
        this._player1 = player1
        this._who = LocalGame.WHO.FIRST_PLAYER
        this._player2 = player2;

        this._gameType = LocalGame.TYPE.QUEUE
        this._score = 0
    }

    _player() {
        if (this._who === LocalGame.WHO.FIRST_PLAYER) return this._player1;
        return this._player2;
    }
    _changeTurn() {
        if (this._who === LocalGame.WHO.FIRST_PLAYER) {
            this._who = LocalGame.WHO.SECOND_PLAYER;
        }
        else if (this._who === LocalGame.WHO.SECOND_PLAYER) {
            this._who = LocalGame.WHO.FIRST_PLAYER;
        }
    }

    randomShipsOnField = (player) => {
        RandomPlacement.getRandomField(player);
    }
    attacks() {
        let result = false
        switch (this._who) {
            case LocalGame.WHO.FIRST_PLAYER : {
                result = this._moveOnTheOpponent(this._player1, this._player2);

                break
            }
            case LocalGame.WHO.SECOND_PLAYER:  {
                result = this._moveOnTheOpponent(this._player2, this._player1);

                break
            }
            default:
        }
        if (this._gameType === LocalGame.TYPE.QUEUE) {
            if (!result) {
                if (!this._flag_forChange) {
                    this._changeTurn();
                } else {
                    this._flag_forChange = false
                }
            }
            return result
        }
        if (this._flagOfStayPlayer) {
            this._flagOfStayPlayer = false;
        }
        else if (this._getLastCellStatus !== Cell.STATIC.SHIP &&
            this._getLastCellStatus !== Cell.STATIC.MARKED &&
            this._getLastCellStatus !== Cell.STATIC.SHIP_MARKED) {
            this._changeTurn();
        }
        return result
    }

    _moveOnTheOpponent(player, playerAttacked) {
        this._statusAttacks(playerAttacked.field.getCellStatus(player.getCurrCoordinate()), player.getCurrCoordinate(), player, playerAttacked);
        return this.finish();
    }

    _statusAttacks(cellStatus, coordinate, player, playerAttacked) {
        switch (cellStatus) {
            case Cell.STATIC.SHIP : {
                this._getLastCellStatus = Cell.STATIC.SHIP;
                playerAttacked.field.setCellStatus(coordinate, Cell.STATIC.SHIP_MARKED);

                if (!player.field.hurtOrKill(playerAttacked.field, playerAttacked.field.findShip(playerAttacked,
                                             coordinate.getVertical(), coordinate.getHorizontal()))) {
                    this._getLastShipStatus = Ship.STATUS.INJURED;
                    if (this._who === LocalGame.WHO.FIRST_PLAYER) {
                        this._score += 10
                    }

                } else {
                    this._getLastShipStatus = Ship.STATUS.KILLED;
                    playerAttacked.setCountLiveShips()
                    if (this._who === LocalGame.WHO.FIRST_PLAYER) {
                        this._score += 20
                    }
                }
                break
            }
            case Cell.STATIC.EMPTY : {
                this._getLastCellStatus = Cell.STATIC.EMPTY;
                this._getLastShipStatus = Ship.STATUS.NOTHING;

                playerAttacked.field.setCellStatus(coordinate, Cell.STATIC.MARKED);
                break
            }
            case Cell.STATIC.MARKED : {
                this._getLastCellStatus = Cell.STATIC.MARKED;
                this._getLastShipStatus = Ship.STATUS.NOTHING;
                this._flagOfStayPlayer = true;
                this._flag_forChange = true
                break
            }
            case Cell.STATIC.SHIP_MARKED : {
                this._getLastCellStatus = Cell.STATIC.SHIP_MARKED;
                this._getLastShipStatus = Ship.STATUS.NOTHING;
                this._flagOfStayPlayer = true;
                this._flag_forChange = true
                break
            }
            default: return 0
        }
    }

    finish() {
        return this._player1.getCountLiveShips() === 0 || this._player2.getCountLiveShips() === 0;
    }

    get player1() {
        return this._player1;
    }

    get player2() {
        return this._player2;
    }

    get flagOfStayPlayer() {
        return this._flagOfStayPlayer;
    }

    set flagOfStayPlayer(flagOfStayPlayer) {
        this._flagOfStayPlayer = flagOfStayPlayer;
    }

    get getLastCellStatus() {
        return this._getLastCellStatus;
    }

    getReadyToGame() {
        return this._readyToGame;
    }

    setStartGame() {
        this._startGame = LocalGame.START_GAME.START ;
        this._who = this.#randomTurn()
    }



    getWho() {
        return this._who;
    }

    setWho(who) {
        this._who = who;
    }

    setGameType(type) {
        this._gameType = type
    }

    getScore() {
        return this._score
    }
}

export default LocalGame