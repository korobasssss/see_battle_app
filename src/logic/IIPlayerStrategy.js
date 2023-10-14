import RandomPlacement from "./elements/field/randomPlacement";
import Coordinate from "./elements/coordinate";
import Field from "./elements/field/field";

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
    console.log("2, get a coordinate")
    // console.log("ii take coord")
    let rndIndex = RandomPlacement.random(Field.SIZE * Field.SIZE)
    while (arrVariantAttack[rndIndex] === "") {
        rndIndex = RandomPlacement.random(Field.SIZE * Field.SIZE)
    }
    let coord = new Coordinate(arrVariantAttack[rndIndex][0], arrVariantAttack[rndIndex][1])
    arrVariantAttack[rndIndex] = ""
    return coord;
}