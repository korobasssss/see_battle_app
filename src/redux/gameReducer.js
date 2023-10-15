import {GameState} from "../logic/ui/connectionWithUI";
import LocalGame from "../logic/localGame";
import {getCoordinate} from "../logic/IIPlayerStrategy";

const SET_GAME_TYPE = "SET_GAME_TYPE"
const SET_GAME_TYPE_OPPONENT = "SET_GAME_TYPE_OPPONENT"
const ARRANGE_PLAYER = "ARRANGE_PLAYER"
const CHECK_TURN = "CHECK_TURN"
const REPEAT_RANDOM_PLACEMENT = "REPEAT_RANDOM_PLACEMENT"
const START_GAME= "START_GAME"
const ATTACK_II = "ATTACK_II"
const ATTACK = "ATTACK"
const NEW_GAME = "NEW_GAME"
const SET_PLAYER_NAME = "SET_PLAYER_NAME"
const SET_OPPONENT_NAME = "SET_OPPONENT_NAME"


let initialState = {
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
            statistic: [],
            whoseTurnState: "",
            nameWhoseTurn: "",
            nameWhoseOpponent: "",
            turnLiveShips: "",
            opponentLiveShips: "",
            whoseWin: ""
        },
        opponent: {
            name: "ИГРОК 2",
                field: []
        }
}


const gameReducer = (state = initialState, action) => {

    let whoseWin = () => {
        if (state.game.status.game === "FINISH") {
            if (state.game.gameState.getPlayerCountLiveShips() !== 0) {
                return state.player.name
            } else {
                return state.opponent.name
            }
        }
    }

    let updateTables = () => {
        state.player.field = state.game.gameState.getPlayerField()
        state.opponent.field = state.game.gameState.getOpponentField()
    }

    let getUIField = () => {
        if (state.game.status.arrange) {
            updateTables()
            if (state.game.OPPONENT === "II") {
                state.game.turnField = state.game.gameState.getPlayerField()
                state.game.notTurnField = state.opponent.field

                state.game.turnLiveShips = state.game.gameState.getPlayerCountLiveShips()
            } else {
                state.game.turnField = state.game.gameState.getTurnField()
                state.game.notTurnField = state.game.gameState.getNotTurnField()
            }
            if (state.game.gameState.getWhoseTurn() === LocalGame.WHO.FIRST_PLAYER) {
                state.game.nameWhoseTurn = state.player.name
                state.game.nameWhoseOpponent = state.opponent.name

                state.game.turnLiveShips = state.game.gameState.getPlayerCountLiveShips()
                state.game.opponentLiveShips = state.game.gameState.getOpponentCountLiveShips()
            } else {
                state.game.nameWhoseTurn = state.opponent.name
                state.game.nameWhoseOpponent = state.player.name

                state.game.turnLiveShips = state.game.gameState.getOpponentCountLiveShips()
                state.game.opponentLiveShips = state.game.gameState.getPlayerCountLiveShips()
            }

            if (state.game.status.game === "FINISH") {
                state.game.whoseWin = whoseWin()
            }

            state.game.whoseTurnState = state.game.gameState.getWhoseTurn()

            console.log(state.game.whoseTurnState)

            updateTables()
        }

    }




    const statistic = () => {
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

    switch (action.type) {
        case SET_OPPONENT_NAME: {
            state.opponent.name = action.name
            return state
        }
        case SET_PLAYER_NAME: {
            state.player.name = action.name
            return state
        }
        case ARRANGE_PLAYER: {
            if (state.game.status.arrange === false) {
                state.game.status.arrange = true
                state.game.gameState = new GameState()
                state.game.gameState.setTypeGame(state.game.TYPE)
                if (state.game.OPPONENT === "II") {
                    state.game.gameState.getRandomPlacement()
                } else {
                    state.game.gameState.getRandomPlacementBoth()
                }
            }
            getUIField()
            console.log("syae", state)
            return state
        }
        case REPEAT_RANDOM_PLACEMENT: {
            state.game.gameState.getRandomPlacement()
            getUIField()
            return state
        }
        case CHECK_TURN: {
            if (state.game.gameState.getWhoseTurn() === LocalGame.WHO.FIRST_PLAYER) {
                state.game.gameState.setWhoseTurn(LocalGame.WHO.SECOND_PLAYER)
            } else {
                state.game.gameState.setWhoseTurn(LocalGame.WHO.FIRST_PLAYER)
            }
            getUIField()
            return state
        }
        case START_GAME: {
            if (state.game.status.game === "NOT_START") {
                state.game.status.game = "GAME"
                state.game.gameState.setStartGame()
            }
            getUIField()
            return state
        }
        case NEW_GAME: {
            state.game.status.game = "NOT_START"
            state.game.status.arrange = false
            getUIField()
            return state
        }
        case ATTACK: {
            console.log("attach")
            if (state.game.status.game === "GAME") {
                let cell = action.index

                let col = cell.cellIndex
                let row = cell.parentNode.rowIndex

                if (state.game.gameState.getWhoseTurn() === LocalGame.WHO.FIRST_PLAYER) {
                    state.game.gameState.getPlayer().setCurrCoordinateRC(row, col);
                } else {
                    state.game.gameState.getOpponent().setCurrCoordinateRC(row, col);
                }
                if (state.game.gameState.getGame().attacks()) {
                    state.game.status.game = "FINISH"
                    state.game.statistic.push(statistic())
                }
            }
            getUIField()
            return state
        }
        case ATTACK_II: {
            console.log("dispatch ii", state.game.gameState.getWhoseTurn())
            if (state.game.status.game === "GAME") {
                if (state.game.gameState.getWhoseTurn() === LocalGame.WHO.SECOND_PLAYER) {
                    state.game.gameState.getOpponent().setCurrCoordinate(getCoordinate());
                    if (state.game.gameState.getGame().attacks()) {
                        state.game.status.game = "FINISH"
                        state.game.statistic.push(statistic())
                    }
                }
            }
            getUIField()
            return state
        }
        case SET_GAME_TYPE_OPPONENT: {
            state.game.OPPONENT = action.oppType
            getUIField()
            return state
        }
        case SET_GAME_TYPE: {
            state.game.TYPE = action.gameType
            getUIField()
            return state
        }
        default: return state
    }
}

export default gameReducer