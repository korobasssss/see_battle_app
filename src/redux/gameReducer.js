import {GameState} from "../logic/ui/connectionWithUI";
import LocalGame from "../logic/localGame";
import {getCoordinate} from "../logic/IIPlayerStrategy";
import Cell from "../logic/elements/cell";

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
const PAGE_SET_NAME = "PAGE_SET_NAME"
const PAGE_CHOOSE_OPP = "PAGE_CHOOSE_OPP"
const PAGE_ARRANGE = "PAGE_ARRANGE"
const PAGE_GAME = "PAGE_GAME"
const PAGE_RULES = "PAGE_RULES"
const PAGE_STATISTIC = "PAGE_STATISTIC"


let initialState = {
        player: {
            name: "",
                field: []
        },
        game: {
            gameState: " ",
            turnField: Array(10).fill().map(() => Array(10).fill("")),
            notTurnField: Array(10).fill().map(() => Array(10).fill("")),
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
            whoseWin: "",
            forTime: ""
        },
        opponent: {
            name: "ИГРОК 2",
            field: []
        },
        pageData: {
            setPlayerName: false,
            setOpp: false,
            arrange: false,
            game: false,
            rules: false,
            statistic: false
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

    let setColorTable = (arr, numField) => {
        for (let row = 0; row < arr.length; row++) {
            for (let col = 0; col < arr.length; col++) {
                switch (arr[row][col]) {
                    case Cell.STATIC.SHIP :
                        if (numField === 1) {
                            state.game.turnField[row][col] = "blue"
                        } else {
                            state.game.notTurnField[row][col] = "none"
                        }
                        break
                    case Cell.STATIC.MARKED:
                        if (numField === 1) {
                            state.game.turnField[row][col] = "grey"
                        } else {
                            state.game.notTurnField[row][col] = "grey"
                        }
                        break
                    case Cell.STATIC.EMPTY:
                        if (numField === 1) {
                            state.game.turnField[row][col] = "none"
                        } else {
                            state.game.notTurnField[row][col] = "none"
                        }
                        break
                    case Cell.STATIC.SHIP_MARKED:
                        if (numField === 1) {
                            state.game.turnField[row][col] = "red"
                        } else {
                            state.game.notTurnField[row][col] = "red"
                        }
                        break
                    default:
                }
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
                setColorTable(state.game.gameState.getPlayerField(), 1)
                setColorTable(state.opponent.field, 2)

                state.game.turnLiveShips = state.game.gameState.getPlayerCountLiveShips()
            } else {
                setColorTable(state.game.gameState.getTurnField(), 1)
                setColorTable(state.game.gameState.getNotTurnField(), 2)
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

            setTimeout(() => (state.game.forTime = "r"), 2000)

            updateTables()


        }

    }




    const statistic = () => {
        let currentDate = new Date();

        let data = currentDate.getFullYear() + '/' + currentDate.getMonth() + 1 + '/' + currentDate.getDate() +
            ' ' + currentDate.getHours() + ':' + currentDate.getMinutes()

        let status
        if (state.game.gameState.getPlayerCountLiveShips() !== 0) {
            status = "ПОБЕДА"
        } else {
            status = "ПОРАЖЕНИЕ"
        }

        return [data, status]
    }

    const statisticLooser = () => {
        let currentDate = new Date();

        let data = currentDate.getFullYear() + '/' + currentDate.getMonth() + 1 + '/' + currentDate.getDate() +
            ' ' + currentDate.getHours() + ':' + currentDate.getMinutes()

        let status = "ПОРАЖЕНИЕ"

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
            if (state.game.status.game === "GAME") {
                state.game.statistic.push(statisticLooser())
            }
            state.game.status.game = "NOT_START"
            state.game.status.arrange = false

            state.pageData.setPlayerName = false
            state.pageData.setOpp = false
            state.pageData.arrange = false
            state.pageData.game =false

            getUIField()
            return state
        }
        case ATTACK: {
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
            setTimeout(() => (state.game.forTime = "r"), 2000)

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
        case PAGE_SET_NAME: {
            state.pageData.setPlayerName = state.pageData.setPlayerName !== true;
            state.opponent.name = "ИГРОК 2"
            return state
        }
        case PAGE_CHOOSE_OPP: {
            state.pageData.setOpp = state.pageData.setOpp !== true;
            return state
        }
        case PAGE_ARRANGE: {
            state.pageData.arrange = state.pageData.arrange !== true;
            return state
        }
        case PAGE_GAME: {
            console.log("page_game bef", state.pageData.game)
            state.pageData.game = state.pageData.game === false;
            console.log("page_game aft", state.pageData.game)
            return state
        }
        case PAGE_RULES: {
            state.pageData.rules = state.pageData.rules !== true;
            return state
        }
        case PAGE_STATISTIC: {
            state.pageData.statistic = state.pageData.statistic !== true;
            return state
        }
        default: return state
    }
}

export default gameReducer