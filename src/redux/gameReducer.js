import {GameState} from "../logic/ui/connectionWithUI";
import LocalGame from "../logic/localGame";
import {getCoordinate} from "../logic/IIPlayerStrategy";
import Cell from "../logic/elements/cell";
import {
    ARRANGE_PLAYER, ATTACK, ATTACK_II, CHECK_TURN, EMPTY_STRING,
    FIELD_COLOR,
    GAME_OPPONENT, GAME_STATUS, GAME_TYPE,
    NEW_GAME, OPPONENT_DEFAULT_NAME,
    PAGE_ARRANGE, PAGE_CHOOSE_OPP, PAGE_GAME, PAGE_RULES, PAGE_SET_NAME, PAGE_STATISTIC,
    REPEAT_RANDOM_PLACEMENT,
    SET_GAME_TYPE, SET_GAME_TYPE_OPPONENT, SET_OPPONENT_NAME, SET_PLAYER_NAME,
    START_GAME, STATISTIC_GAME_STATE
} from "./constants";


let initialState = {
        player: {
            name: EMPTY_STRING,
                field: []
        },
        game: {
            gameState: " ",
            turnField: Array(10).fill().map(() => Array(10).fill(EMPTY_STRING)),
            notTurnField: Array(10).fill().map(() => Array(10).fill(EMPTY_STRING)),
            status: {
                arrange: false,
                game: GAME_STATUS.NOT_START
            },
            TYPE: GAME_TYPE.QUEUE,
            OPPONENT: GAME_OPPONENT.II,
            score: EMPTY_STRING,
            statistic: [],
            whoseTurnState: EMPTY_STRING,
            nameWhoseTurn: EMPTY_STRING,
            nameWhoseOpponent: EMPTY_STRING,
            turnLiveShips: EMPTY_STRING,
            opponentLiveShips: EMPTY_STRING,
            whoseWin: EMPTY_STRING,
            forTime: EMPTY_STRING
        },
        opponent: {
            name: OPPONENT_DEFAULT_NAME,
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
        if (state.game.status.game === GAME_STATUS.FINISH) {
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
                            state.game.turnField[row][col] = FIELD_COLOR.BLUE
                        } else {
                            state.game.notTurnField[row][col] = FIELD_COLOR.NONE
                        }
                        break
                    case Cell.STATIC.MARKED:
                        if (numField === 1) {
                            state.game.turnField[row][col] = FIELD_COLOR.GRAY
                        } else {
                            state.game.notTurnField[row][col] = FIELD_COLOR.GRAY
                        }
                        break
                    case Cell.STATIC.EMPTY:
                        if (numField === 1) {
                            state.game.turnField[row][col] = FIELD_COLOR.NONE
                        } else {
                            state.game.notTurnField[row][col] = FIELD_COLOR.NONE
                        }
                        break
                    case Cell.STATIC.SHIP_MARKED:
                        if (numField === 1) {
                            state.game.turnField[row][col] = FIELD_COLOR.RED
                        } else {
                            state.game.notTurnField[row][col] = FIELD_COLOR.RED
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
        state.game.score = state.game.gameState.getCurrentScore()
    }

    let getUIField = () => {
        if (state.game.status.arrange) {
            updateTables()
            if (state.game.OPPONENT === GAME_OPPONENT.II) {
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

            if (state.game.status.game === GAME_STATUS.FINISH) {
                state.game.whoseWin = whoseWin()
            }

            state.game.whoseTurnState = state.game.gameState.getWhoseTurn()
        }
    }

    const statistic = () => {
        let currentDate = new Date();

        let month = Number(currentDate.getMonth()) + 1
        let data = currentDate.getFullYear() + '/' + month + '/' + currentDate.getDate() +
            ' ' + currentDate.getHours() + ':' + currentDate.getMinutes()

        let status

        if (state.game.gameState.getPlayerCountLiveShips() !== 0) {
            status = STATISTIC_GAME_STATE.WIN
        } else {
            status = STATISTIC_GAME_STATE.LOSE
        }
        return [data, status]
    }

    const statisticLooser = () => {
        let currentDate = new Date();

        let month = Number(currentDate.getMonth()) + 1
        let data = currentDate.getFullYear() + '/' + month + '/' + currentDate.getDate() +
            ' ' + currentDate.getHours() + ':' + currentDate.getMinutes()

        let status = STATISTIC_GAME_STATE.LOSE

        return [data, status]
    }


    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const runSleep = async () => {
        await sleep()
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
                if (state.game.OPPONENT === GAME_OPPONENT.II) {
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
            if (state.game.status.game === GAME_STATUS.NOT_START) {
                state.game.status.game = GAME_STATUS.GAME
                state.game.gameState.setStartGame()
            }
            getUIField()
            return state
        }
        case NEW_GAME: {
            if (state.game.status.game === GAME_STATUS.GAME) {
                state.game.statistic.push(statisticLooser())
            }
            state.game.status.game = GAME_STATUS.NOT_START
            state.game.status.arrange = false

            state.pageData.setPlayerName = false
            state.pageData.setOpp = false
            state.pageData.arrange = false
            state.pageData.game = false
            console.log(state.pageData.arrange)
            getUIField()
            return state
        }
        case ATTACK: {
            console.log(state.game.gameState.getWhoseTurn())
            if (state.game.status.game === GAME_STATUS.GAME) {
                let cell = action.index

                let col = cell.cellIndex - 1
                let row = cell.parentNode.rowIndex - 1

                if (state.game.gameState.getWhoseTurn() === LocalGame.WHO.FIRST_PLAYER) {
                    state.game.gameState.getPlayer().setCurrCoordinateRC(row, col);
                } else {
                    state.game.gameState.getOpponent().setCurrCoordinateRC(row, col);
                }
                if (state.game.gameState.getGame().attacks()) {
                    state.game.status.game = GAME_STATUS.FINISH
                    state.game.statistic.push(statistic())
                }
                getUIField()

            }
            return state
        }
        case ATTACK_II: {
            if (state.game.status.game === GAME_STATUS.GAME) {
                if (state.game.gameState.getWhoseTurn() === LocalGame.WHO.SECOND_PLAYER) {
                    state.game.gameState.getOpponent().setCurrCoordinate(getCoordinate());
                    if (state.game.gameState.getGame().attacks()) {
                        state.game.status.game = GAME_STATUS.FINISH
                        state.game.statistic.push(statistic())
                    }
                    getUIField()
                }
                runSleep().then(r => console.log("hello world"))
            }

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
            state.opponent.name = OPPONENT_DEFAULT_NAME
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
            state.pageData.game = state.pageData.game === false;
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
        default:
            return state
    }
}

export default gameReducer