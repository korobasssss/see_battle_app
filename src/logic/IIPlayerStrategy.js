import RandomPlacement from "./elements/field/randomPlacement";
import Coordinate from "./elements/coordinate";
import Field from "./elements/field/field";

let coordinatesCount = Field.SIZE * Field.SIZE - 1

let setVariations = () => {
    let arr = []
    for (let row = 0; row < Field.SIZE; row++) {
        for (let col = 0; col < Field.SIZE; col++) {
            arr.push([row, col])
        }
    }
    return arr
}

let arrVariantAttack = setVariations()

export let getCoordinate = () => {

    let rndIndex = RandomPlacement.random(coordinatesCount)

    console.log(rndIndex)
    let coordinate = new Coordinate(arrVariantAttack[rndIndex][0], arrVariantAttack[rndIndex][1])
    console.log(coordinate)

    arrVariantAttack.splice(rndIndex, 1)
    coordinatesCount--

    return coordinate;
}