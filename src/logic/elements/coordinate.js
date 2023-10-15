class Coordinate {
    _vertical
    _horizontal

    constructor(vertical, horizontal) {
        this._vertical = vertical
        this._horizontal = horizontal
    }
    getVertical() {
        return this._vertical
    }
    getHorizontal() {
        return this._horizontal
    }
    setVertical(v) {
        this._vertical = v
    }
    setHorizontal(h) {
        this._horizontal = h
    }
}

export default Coordinate