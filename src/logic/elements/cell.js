class Cell {
    _status
    _coordinate

    static STATIC = {
        SHIP: "SHIP",
        MARKED: "MARKED",
        SHIP_MARKED: "SHIP_MARKED",
        EMPTY: "EMPTY",
        UNKNOWN: "UNKNOWN"
    }

    constructor(status, coordinate) {
        this._coordinate = coordinate;
        this._status = status;
    }

    getStatus() {
        return this._status
    }
    setStatus(status) {
        this._status = status
    }
    get coordinate() {
        return this._coordinate
    }
}

export default Cell