import Ship from "../ship";
import Coordinate from "../coordinate";
import Player from "../player";

class RandomPlacement {
    static random = (max) => {
        return Math.floor(Math.random() * max);
    }

    static _makeRandomField = (coord1, coord1Or, coord2, coord2Or,
                               coord3, coord3Or, coord4, coord4Or,
                               coord5, coord5Or, coord6, coord6Or,
                               coord7, coord7Or, coord8, coord8Or,
                               coord9, coord9Or, coord10, coord10Or) => {

        let ships = [];
        ships.push(new Ship(coord1, Ship.SHIP_TYPE.FOURTH_CELLS, coord1Or, Ship.STATUS.ALIVE));
        ships.push(new Ship(coord2, Ship.SHIP_TYPE.THREE_CELLS, coord2Or, Ship.STATUS.ALIVE));
        ships.push(new Ship(coord3, Ship.SHIP_TYPE.THREE_CELLS, coord3Or, Ship.STATUS.ALIVE));
        ships.push(new Ship(coord4, Ship.SHIP_TYPE.TWO_CELLS, coord4Or, Ship.STATUS.ALIVE));
        ships.push(new Ship(coord5, Ship.SHIP_TYPE.TWO_CELLS, coord5Or, Ship.STATUS.ALIVE));
        ships.push(new Ship(coord6, Ship.SHIP_TYPE.TWO_CELLS, coord6Or, Ship.STATUS.ALIVE));
        ships.push(new Ship(coord7, Ship.SHIP_TYPE.ONE_CELL, coord7Or, Ship.STATUS.ALIVE));
        ships.push(new Ship(coord8, Ship.SHIP_TYPE.ONE_CELL, coord8Or, Ship.STATUS.ALIVE));
        ships.push(new Ship(coord9, Ship.SHIP_TYPE.ONE_CELL, coord9Or, Ship.STATUS.ALIVE));
        ships.push(new Ship(coord10, Ship.SHIP_TYPE.ONE_CELL, coord10Or, Ship.STATUS.ALIVE));
        return ships
    }

    static _randomField1 = this._makeRandomField(
        new Coordinate(7, 1), Ship.ORIENTATION.HORIZONTAL, new Coordinate(0, 2), Ship.ORIENTATION.VERTICAL,
        new Coordinate(0, 6), Ship.ORIENTATION.HORIZONTAL, new Coordinate(4, 0), Ship.ORIENTATION.VERTICAL,
        new Coordinate(2, 4), Ship.ORIENTATION.HORIZONTAL, new Coordinate(7, 6), Ship.ORIENTATION.HORIZONTAL,
        new Coordinate(6, 9), Ship.ORIENTATION.VERTICAL, new Coordinate(2, 9), Ship.ORIENTATION.VERTICAL,
        new Coordinate(9, 5), Ship.ORIENTATION.VERTICAL, new Coordinate(4, 4), Ship.ORIENTATION.VERTICAL)
    static _randomField2 = this._makeRandomField(
        new Coordinate(9, 1), Ship.ORIENTATION.HORIZONTAL, new Coordinate(5, 7), Ship.ORIENTATION.HORIZONTAL,
        new Coordinate(1, 1), Ship.ORIENTATION.VERTICAL, new Coordinate(1, 8), Ship.ORIENTATION.HORIZONTAL,
        new Coordinate(9, 8), Ship.ORIENTATION.HORIZONTAL, new Coordinate(5, 2), Ship.ORIENTATION.VERTICAL,
        new Coordinate(2, 4), Ship.ORIENTATION.VERTICAL, new Coordinate(3, 9), Ship.ORIENTATION.VERTICAL,
        new Coordinate(7, 6), Ship.ORIENTATION.VERTICAL, new Coordinate(6, 4), Ship.ORIENTATION.VERTICAL)
    static _randomField3 = this._makeRandomField(
        new Coordinate(1, 2), Ship.ORIENTATION.VERTICAL, new Coordinate(3, 0), Ship.ORIENTATION.VERTICAL,
        new Coordinate(1, 6), Ship.ORIENTATION.HORIZONTAL, new Coordinate(3, 4), Ship.ORIENTATION.VERTICAL,
        new Coordinate(8, 7), Ship.ORIENTATION.VERTICAL, new Coordinate(8, 9), Ship.ORIENTATION.VERTICAL,
        new Coordinate(4, 9), Ship.ORIENTATION.VERTICAL, new Coordinate(6, 8), Ship.ORIENTATION.VERTICAL,
        new Coordinate(9, 3), Ship.ORIENTATION.VERTICAL, new Coordinate(9, 0), Ship.ORIENTATION.VERTICAL)
    static _randomField4 = this._makeRandomField(
        new Coordinate(1, 5), Ship.ORIENTATION.HORIZONTAL, new Coordinate(9, 3), Ship.ORIENTATION.HORIZONTAL,
        new Coordinate(4, 7), Ship.ORIENTATION.VERTICAL, new Coordinate(0, 2), Ship.ORIENTATION.HORIZONTAL,
        new Coordinate(3, 3), Ship.ORIENTATION.VERTICAL, new Coordinate(4, 5), Ship.ORIENTATION.VERTICAL,
        new Coordinate(1, 0), Ship.ORIENTATION.VERTICAL, new Coordinate(6, 1), Ship.ORIENTATION.VERTICAL,
        new Coordinate(9, 7), Ship.ORIENTATION.VERTICAL, new Coordinate(4, 9),  Ship.ORIENTATION.VERTICAL)
    static _randomField5 = this._makeRandomField(
        new Coordinate(0, 0), Ship.ORIENTATION.VERTICAL, new Coordinate(0, 3), Ship.ORIENTATION.VERTICAL,
        new Coordinate(4, 5), Ship.ORIENTATION.HORIZONTAL, new Coordinate(9, 0), Ship.ORIENTATION.HORIZONTAL,
        new Coordinate(7, 5), Ship.ORIENTATION.VERTICAL, new Coordinate(5, 2), Ship.ORIENTATION.HORIZONTAL,
        new Coordinate(0, 9), Ship.ORIENTATION.VERTICAL, new Coordinate(8, 8), Ship.ORIENTATION.VERTICAL,
        new Coordinate(0, 5), Ship.ORIENTATION.VERTICAL, new Coordinate(2, 5), Ship.ORIENTATION.VERTICAL)


    static getRandomField(player) {


        if (player.ships.length > 0) {
            player.field.clearField(player)
        }


        switch (RandomPlacement.random(5)) {
            case 0 :
                player.setShips(this._randomField1);
                break
            case 1 :
                player.setShips(this._randomField2);
                break
            case 2 :
                player.setShips(this._randomField3);
                break
            case 3 :
                player.setShips(this._randomField4);
                break
            case 4 :
                player.setShips(this._randomField5);
                break
            default:
        }
    }
}

export default RandomPlacement