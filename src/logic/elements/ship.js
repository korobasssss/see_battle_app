class Ship {
    _position
    _type
    _orientation
    _status

    static ORIENTATION = {
        VERTICAL: "VERTICAL",
        HORIZONTAL: "HORIZONTAL"
    }
    static SHIP_TYPE = {
        ONE_CELL: "1",
        TWO_CELLS: "2",
        THREE_CELLS: "3",
        FOURTH_CELLS: "4"
    }
    static STATUS = {
        ALIVE: "ALIVE",
        KILLED: "KILLED",
        NOTHING: "NOTHING",
        INJURED: "INJURED"
    }

    constructor(startingPosition, shipType, orientation, status) {
        this._position = startingPosition;
        this._type = shipType;
        this._orientation = orientation;
        this._status = status;
    }

    getPosition() {
        return this._position
    }
    setPosition(position) {
        this._position = position
    }
    get type() {
        return this._type
    }
    set type(type) {
        this._type = type
    }
    getOrientation() {
        return this._orientation
    }
    setOrientation(orientation) {
        this._orientation = orientation
    }
    getStatus() {
        return this._status
    }
    setStatus(status) {
        this._status = status
    }

}

export default Ship