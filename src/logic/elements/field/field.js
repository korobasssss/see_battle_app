import Coordinate from "../coordinate";
import Cell from "../cell";
import Ship from "../ship";
import ship from "../ship";

class Field {
    static SIZE = 10
    fillCell = (field) => {
        for (let row = 0; row < field.length; row++) {
            for (let col = 0; col < field[0].length; col++) {
                field[row][col] = new Cell(Cell.STATIC.EMPTY, new Coordinate(row, col));
            }

        }
        return field;
    }
    _field = this.fillCell(Array.from(Array(Field.SIZE), () => new Array(Field.SIZE)))
    setShipOnField = (ship) => {
        if (ship.getOrientation() === Ship.ORIENTATION.VERTICAL) {
            this.#setVerticalShipOnField(ship)
        }
        else {
            this.#setHorizontalShipOnField(ship)
        }
    }
    #setVerticalShipOnField = (ship) => {
        let coordinate = new Coordinate(0, ship.getPosition().getHorizontal());
        for (let row = ship.getPosition().getVertical(); row < ship.getPosition().getVertical() + Number.parseInt(ship.type); row++) {
            coordinate.setVertical(row);
            this.setCellStatus(coordinate, Cell.STATIC.SHIP);
        }
    }
    #setHorizontalShipOnField = (ship) => {
        let coordinate = new Coordinate(ship.getPosition().getVertical(), 0);
        for (let col = ship.getPosition().getHorizontal(); col < ship.getPosition().getHorizontal() + Number.parseInt(ship.type); col++) {
            coordinate.setHorizontal(col);
            this.setCellStatus(coordinate, Cell.STATIC.SHIP);
        }
    }

    hurtOrKill(opponentsField, ship) {
        if (ship.getOrientation() === Ship.ORIENTATION.VERTICAL) {
            let coordinate = new Coordinate(0, ship.getPosition().getHorizontal());
            for (let row = ship.getPosition().getVertical(); row < ship.getPosition().getVertical() + Number.parseInt(ship.type); row++) {
                coordinate.setVertical(row);
                if (opponentsField.getCellStatus(coordinate) === Cell.STATIC.SHIP) return false; //ранил
            }
            ship.setStatus(Ship.STATUS.KILLED);
            this.markCloseCellsAroundKilledShip(opponentsField, ship)
            return true; //убил
        } else {
            if (ship.getOrientation() === Ship.ORIENTATION.HORIZONTAL) {
                let coordinate = new Coordinate(ship.getPosition().getVertical(), 0);
                for (let col = ship.getPosition().getHorizontal(); col < ship.getPosition().getHorizontal() + Number.parseInt(ship.type);col++){
                    coordinate.setHorizontal(col);
                    if (opponentsField.getCellStatus(coordinate) === Cell.STATIC.SHIP) return false; //ранил
                }
                ship.setStatus(Ship.STATUS.KILLED);
                this.markCloseCellsAroundKilledShip(opponentsField, ship)
                return true; //убил
            }
        }
        return false
    }
    findShip(player, row, col) {
        if (player.ships.length !== 0) {
            for (let i = 0; i < player.ships.length; i++) {
                if (player.getShip(i).getOrientation() === Ship.ORIENTATION.VERTICAL) {
                    for (let r = player.getShip(i).getPosition().getVertical(); r <= player.getShip(i).getPosition().getVertical() + Number.parseInt(player.getShip(i).type); r++) {
                        if (r === row && col === player.getShip(i).getPosition().getHorizontal()) {
                            return player.getShip(i);
                        }
                    }
                } else {
                    for (let c = player.getShip(i).getPosition().getHorizontal(); c <= player.getShip(i).getPosition().getHorizontal() + Number.parseInt(player.getShip(i).type); c++) {
                        if (c === col && row === player.getShip(i).getPosition().getVertical()) {
                            return player.getShip(i);
                        }
                    }
                }
            }
        }
    }

    clearField(player) {
        for (let i = 0; i < player.ships.length; i++) {
            this.deleteFigure(player, player.ships[i])
        }
    }
    deleteFigure(player, ship) {
        for (let i = 0; i < player.ships.length; i++) {
            if (player.ships[i].length > 0 ) {
                if (player.ships[i].getPosition() === ship.getPosition()) {
                    player.ships[i] = [];
                    break
                }
            }
        }

        if (ship.getOrientation() === Ship.ORIENTATION.VERTICAL) {
            for (let r = ship.getPosition().getVertical(); r < ship.getPosition().getVertical() + Number.parseInt(ship.type); r++){
                this.setCellStatusRowCol(r, ship.getPosition().getHorizontal(), Cell.STATIC.EMPTY);
            }
        } else {
            for (let c = ship.getPosition().getHorizontal(); c < ship.getPosition().getHorizontal() + Number.parseInt(ship.type); c++){
                this.setCellStatusRowCol(ship.getPosition().getVertical(), c, Cell.STATIC.EMPTY);
            }
        }
    }

    canMakeShipOrNot(ship) {
        if (ship.getOrientation() === Ship.ORIENTATION.VERTICAL) {
            return this.canVerticalMakeShipOrNot(ship);
        }
        else {
            return this.canMakeHorizontalShipOrNot(ship);
        }
    }

    canVerticalMakeShipOrNot(ship) {
        let row = ship.getPosition().getVertical();
        if (row > 0) row = ship.getPosition().getVertical() - 1;
        let col = ship.getPosition().getHorizontal();
        let colCopy;

        let coordinate = new Coordinate(-1, -1);
        while(row <= ship.getPosition().getVertical() + Number.parseInt(ship.type)) {
            if (row  >= 0 && row < this._field.length) {
                if (col > 0) colCopy = ship.getPosition().getHorizontal() - 1;
                else colCopy = 0;
                while (colCopy <= ship.getPosition().getHorizontal() + 1) {
                    if (colCopy  >= 0 && colCopy < this._field.length) {
                        coordinate.setVertical(row); coordinate.getHorizontal(colCopy);
                        if (this.getCellStatus(coordinate) === Cell.STATIC.SHIP) return false;
                    }
                    colCopy++;
                }
                row++;
            } else break;
        }
        if (ship.type !== Ship.SHIP_TYPE.ONE_CELL && ship.getPosition().getVertical()
            + Number.parseInt(ship.type) - 1 > this._field.length - 1) {
            return false;
        }
        return coordinate.getVertical() !== -1;
    }

    canMakeHorizontalShipOrNot(ship) {
        let row = ship.getPosition().getVertical();
        let rowCopy;
        let col = ship.getPosition().getHorizontal();
        if (col > 0) col = ship.getPosition().getHorizontal() - 1;

        let coordinate = new Coordinate(-1, -1);
        while(col <= ship.getPosition().getHorizontal() + Number.parseInt(ship.type)) {
            if (col  >= 0 && col < this._field.length) {
                if (row > 0) rowCopy = ship.getPosition().getVertical() - 1;
                else rowCopy = 0;
                while (rowCopy <= ship.getPosition().getVertical + 1) {
                    if (rowCopy  >= 0 && rowCopy < this._field.length) {
                        coordinate.setVertical(row); coordinate.setHorizontal(rowCopy);
                        if (this.getCellStatus(coordinate) === Cell.STATIC.SHIP) return false;
                    }
                    rowCopy++;
                }
                col++;
            } else break;
        }
        if (ship.type !== Ship.SHIP_TYPE.ONE_CELL && ship.getPosition().getHorizontal()
            + Number.parseInt(ship.type) - 1 > this._field.length - 1) {
            return false;
        }
        return coordinate.getVertical() !== -1;
    }

    markCloseCellsAroundKilledShip = (opponentsField, ship) => {
        if (ship.getOrientation() === Ship.ORIENTATION.VERTICAL) {
            this.#markCloseCellsAroundKilledVShip(opponentsField, ship)
        } else {
            this.#markCloseCellsAroundKilledHShip(opponentsField, ship)
        }
    }

    #markCloseCellsAroundKilledVShip(opponentsField, ship) {
        let row = ship.getPosition().getVertical();
        if (row > 0) row = ship.getPosition().getVertical() - 1;
        let col = ship.getPosition().getHorizontal();
        let colCopy;

        let coordinate = new Coordinate(-1, -1);
        while(row <= ship.getPosition().getVertical() + Number.parseInt(ship.type)) {
            if (row  >= 0 && row < opponentsField.length()) {
                if (col > 0) colCopy = ship.getPosition().getHorizontal() - 1;
                else colCopy = 0;
                while (colCopy <= ship.getPosition().getHorizontal() + 1) {
                    if (colCopy  >= 0 && colCopy < opponentsField.length()) {
                        coordinate.setVertical(row); coordinate.setHorizontal(colCopy);
                        if (opponentsField.getCellStatus(coordinate) !== Cell.STATIC.SHIP_MARKED) {
                            opponentsField.setCellStatus(coordinate, Cell.STATIC.MARKED);
                        }
                    }
                    colCopy++;
                }
                row++;
            } else break;
        }
    }

    #markCloseCellsAroundKilledHShip(opponentsField, ship) {
        let row = ship.getPosition().getVertical();
        let rowCopy;
        let col = ship.getPosition().getHorizontal();
        if (col > 0) col = ship.getPosition().getHorizontal() - 1;

        let coordinate = new Coordinate(-1, -1);
        while(col <= ship.getPosition().getHorizontal() + Number.parseInt(ship.type)) {
            if (col  >= 0 && col < opponentsField.length()) {
                if (row > 0) rowCopy = ship.getPosition().getVertical() - 1;
                else rowCopy = 0;
                while (rowCopy <= ship.getPosition().getVertical() + 1) {
                    if (rowCopy  >= 0 && rowCopy < opponentsField.length()) {
                        coordinate.setVertical(rowCopy); coordinate.setHorizontal(col);
                        if (opponentsField.getCellStatus(coordinate) !== Cell.STATIC.SHIP_MARKED) {
                            opponentsField.setCellStatus(coordinate, Cell.STATIC.MARKED);
                        }
                    }
                    rowCopy++;
                }
                col++;
            } else break;
        }
    }


    setCellStatus(coordinate, status) {
        this._field[coordinate.getVertical()][coordinate.getHorizontal()].setStatus(status);
    }

    setCellStatusRowCol(row, col, status) {
        this._field[row][col].setStatus(status);
    }

    getCellStatus(coordinate) {
        return this._field[coordinate.getVertical()][coordinate.getHorizontal()].getStatus();
    }

    length() {
        return this._field.length;
    }

    get field() {
        return this._field;
    }

    set field(field) {
        this._field = field;
    }
}


export default Field