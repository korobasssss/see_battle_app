import Coordinate from "./coordinate";
import Field from "./field/field";

class Player {
    _currCoordinate = new Coordinate(0, 0)
    _field
    //_opponentField
    _ships

    _countLiveShips

    constructor() {
        this._field = new Field();
        this._ships = [];
        this._countLiveShips = 10
    }

    get field() {
        return this._field
    }
    get ships() {
        return this._ships
    }
    setShips(ships) {
        this._ships = ships
        //ships.map(ship => this._field.setShipOnField(ship))
        for (let i = 0; i < ships.length; i++) {
            this._field.setShipOnField(ships[i])
        }
    }
    setShip(ship) {
        this._ships.push(ship)

    }

    getShip(index) {
        return this._ships[index]

    }

    getCurrCoordinate() {
        return this._currCoordinate
    }


    setCurrCoordinate(currCoordinate) {
        this._currCoordinate = currCoordinate
    }

    setCurrCoordinateRC(row, col) {
        this._currCoordinate = new Coordinate(row, col)
    }

    // get opponentField() {
    //     return this._opponentField
    // }

    getCountLiveShips() {
        return this._countLiveShips
    }

    setCountLiveShips() {
        this._countLiveShips--
    }
}

export default Player