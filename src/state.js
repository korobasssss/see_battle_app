import {GameState} from "./logic/ui/connectionWithUI";
import {renderer} from "./render";
import LocalGame from "./logic/localGame";
import {getCoordinate} from "./logic/IIPlayerStrategy";

const state = {
    player: {
        name: "",
        field: []
    },
    game: {
        gameState: " ",
        turnField: [],
        notTurnField: [],
        status: {
            arrange: false,
            game: "NOT_START"
        },
        TYPE: "QUEUE",
        OPPONENT: "II",
        statistic: []
    },
    opponent: {
        name: "ИГРОК 2",
        field: []
    }
}

export let setPlayerName = (name) => {
    state.player.name = name

    renderer(state)
}

export let getPlayerName = () => {
    return state.player.name
}

export let setOpponentName = (name) => {
    state.opponent.name = name

    renderer(state)
}

export let getOpponentName = () => {
    return state.opponent.name
}

export let arrangePlayer = () => {

    if (state.game.status.arrange === false) {
        state.game.status.arrange = true

        console.log("new game hehe")
        state.game.gameState = new GameState()
        state.game.gameState.setTypeGame(state.game.TYPE)

        if (getGameTypeOpponent() === "II") {
            state.game.gameState.getRandomPlacement()
        } else {
            state.game.gameState.getRandomPlacementBoth()
        }

        updateTables()
        getUIField()

    }
}

export let repeatRandomPlacement = () => {
    state.game.gameState.getRandomPlacement()

    updateTables()

}

let getUIField = () => {
    updateTables()


    if (state.game.OPPONENT === "II") {
        state.game.turnField = state.player.field
        state.game.notTurnField = state.opponent.field
    } else {
        state.game.turnField = state.game.gameState.getTurnField()
        state.game.notTurnField = state.game.gameState.getNotTurnField()
    }
    updateTables()
}


export let whoOpponent = () => {
    if (state.game.OPPONENT === "II") {
        return state.opponent.field
    } else {
        if (state.game.gameState.getWhoseTurn() === LocalGame.WHO.FIRST_PLAYER) {
            return state.opponent.field
        } else {
            return state.player.field
        }
    }
}

export let checkTurn = () => {
    console.log("pass on button")
    if (state.game.gameState.getWhoseTurn() === LocalGame.WHO.FIRST_PLAYER) {
        state.game.gameState.setWhoseTurn(LocalGame.WHO.SECOND_PLAYER)
    } else {
        state.game.gameState.setWhoseTurn(LocalGame.WHO.FIRST_PLAYER)
    }
    getUIField()
}

export let startGame = () => {
    if (state.game.status.game === "NOT_START") {
        state.game.status.game = "GAME"
        state.game.gameState.setStartGame()
    }
}

export let newGame = () => {
    state.game.status.game = "NOT_START"
    state.game.status.arrange = false
}

export let attack = (e) => {
    if (state.game.status.game === "GAME") {
            let cell = e.target

            let col = cell.cellIndex
            let row = cell.parentNode.rowIndex

        if (state.game.gameState.getWhoseTurn() === LocalGame.WHO.FIRST_PLAYER) {
            state.game.gameState.getPlayer().setCurrCoordinateRC(row, col);
        } else {
            state.game.gameState.getOpponent().setCurrCoordinateRC(row, col);
        }

    }
    if (state.game.gameState.getGame().attacks()) {
        state.game.status.game = "FINISH"
        //соо
    }
    getUIField()
}


export let attackII = () => {

    if (state.game.status.game === "GAME" && state.game.OPPONENT === "II") {
        if (state.game.gameState.getWhoseTurn() === LocalGame.WHO.SECOND_PLAYER) {

            // setTimeout(() => {
            //     state.game.gameState.getOpponent().setCurrCoordinate(getCoordinate());
            //     if (state.game.gameState.getGame().attacks()) {
            //         state.game.status.game = "FINISH"
            //         state.game.statistic.push(statistic())
            //     }
            // }, 2000)

            state.game.gameState.getOpponent().setCurrCoordinate(getCoordinate());
            if (state.game.gameState.getGame().attacks()) {
                state.game.status.game = "FINISH"
                state.game.statistic.push(statistic())
            }
            updateTables()
        }
    }
}

let statistic = () => {
    let currentDate = new Date();

    let data = currentDate.getFullYear() + '/' + currentDate.getMonth() + 1 + '/' + currentDate.getDate() +
        ' ' + currentDate.getHours() + ':' + currentDate.getMinutes()

    let status = ""
    if (state.game.gameState.getPlayerCountLiveShips() !== 0) {
        status = "ПОБЕДА"
    } else {
        status = "ПОРАЖЕНИЕ"
    }

    return [data, status]
}

export let textMessagesForGame = {
    turnLiveShips: () => {
        if (state.game.OPPONENT === "II") {
            return state.game.gameState.getPlayerCountLiveShips()
        } else {
            if (state.game.gameState.getWhoseTurn() === LocalGame.WHO.FIRST_PLAYER) {
                return state.game.gameState.getPlayerCountLiveShips()
            } else {
                return state.game.gameState.getOpponentCountLiveShips()
            }
        }
    },
    opponentLiveShips: () => {
        if (state.game.OPPONENT === "II") {
            return state.game.gameState.getOpponentCountLiveShips()
        } else {
            if (state.game.gameState.getWhoseTurn() === LocalGame.WHO.FIRST_PLAYER) {
                return state.game.gameState.getOpponentCountLiveShips()
            } else {
                return state.game.gameState.getPlayerCountLiveShips()
            }
        }
    },
    nameWhoseTurn: () => {
        if (state.game.gameState.getWhoseTurn() === LocalGame.WHO.FIRST_PLAYER) {
            return state.player.name
        } else {
            return state.opponent.name
        }
    },
    nameWhoseOpponent: () => {
        if (state.game.gameState.getWhoseTurn() === LocalGame.WHO.FIRST_PLAYER) {
            return state.opponent.name
        } else {
            return state.player.name
        }
    }
}

export let rerender = () => {
    renderer(state)
}

let updateTables = () => {
    state.player.field = state.game.gameState.getPlayerField()
    state.opponent.field = state.game.gameState.getOpponentField()
    rerender()
}

export let getTurnField = () => {
    return state.game.turnField
}

export let getNotTurnField = () => {
    return state.game.notTurnField
}

export let getGameTypeOpponent = () => {
    return state.game.OPPONENT
}

export let setGameTypeOpponent = (type) => {
    state.game.OPPONENT = type
}

export let getGameTypeShoot = () => {
    return state.game.TYPE
}

export let setGameType = (type) => {
    state.game.TYPE = type
}

export let getGame = () => {
    return state.game
}

export let statusGame = () => {
    return state.game.status.game
}

export let whoseWin = () => {
    if (state.game.status.game === "FINISH") {
        if (state.game.gameState.getPlayerCountLiveShips() !== 0) {
            console.log("win " + state.player.name)
            return state.player.name
        } else {
            console.log("win " + state.opponent.name)
            return state.opponent.name
        }
    }
}

export let nameWinner

export default state