// import {GameState} from "../logic/ui/connectionWithUI";
// import LocalGame from "../logic/localGame";
// import {getCoordinate} from "../logic/IIPlayerStrategy";
// import playerReducer from "./reducers/playerReducer";
// import opponentReducer from "./reducers/opponentReducer";
// import gameReducer from "./reducers/gameReducer";
//

//
//
// let store = {
//     _state: {
//         player: {
//             name: "",
//             field: []
//         },
//         game: {
//             gameState: " ",
//             turnField: [],
//             notTurnField: [],
//             status: {
//                 arrange: false,
//                 game: "NOT_START"
//             },
//             TYPE: "QUEUE",
//             OPPONENT: "II",
//             statistic: [],
//             whoseTurnState: "",
//             nameWhoseTurn: "",
//             nameWhoseOpponent: "",
//             turnLiveShips: "",
//             opponentLiveShips: "",
//             whoseWin: ""
//         },
//         opponent: {
//             name: "ИГРОК 2",
//             field: []
//         }
//     },
//     getState() {
//         return this._state
//     },
//     _renderer() {
//
//     },
//     _updateTables() {
//         this._state.player.field = this._state.game.gameState.getPlayerField()
//         this._state.opponent.field = this._state.game.gameState.getOpponentField()
//     },
//     _getUIField() {
//         if (this._state.game.status.arrange) {
//             this._updateTables()
//             if (this._state.game.OPPONENT === "II") {
//                 this._state.game.turnField = this._state.player.field
//                 this._state.game.notTurnField = this._state.opponent.field
//
//                 this._state.game.turnLiveShips = this._state.game.gameState.getPlayerCountLiveShips()
//             } else {
//                 this._state.game.turnField = this._state.game.gameState.getTurnField()
//                 this._state.game.notTurnField = this._state.game.gameState.getNotTurnField()
//             }
//             if (this._state.game.gameState.getWhoseTurn() === LocalGame.WHO.FIRST_PLAYER) {
//                 this._state.game.nameWhoseTurn = this._state.player.name
//                 this._state.game.nameWhoseOpponent = this._state.opponent.name
//
//                 this._state.game.turnLiveShips = this._state.game.gameState.getPlayerCountLiveShips()
//                 this._state.game.opponentLiveShips = this._state.game.gameState.getOpponentCountLiveShips()
//             } else {
//                 this._state.game.nameWhoseTurn = this._state.opponent.name
//                 this._state.game.nameWhoseOpponent = this._state.player.name
//
//                 this._state.game.turnLiveShips = this._state.game.gameState.getOpponentCountLiveShips()
//                 this._state.game.opponentLiveShips = this._state.game.gameState.getPlayerCountLiveShips()
//             }
//
//             if (this._state.game.status.game === "FINISH") {
//                 this.state.game.whoseWin = this.whoseWin()
//             }
//
//             this._updateTables()
//         }
//
//     },
//     getGame() {
//         return this._state.game
//     },
//     statusGame() {
//         return this._state.game.status.game
//     },
//     _setStatusGame(status) {
//         this._state.game.status.game = status
//     },
//     subscriber(observed) {
//         this._renderer = observed
//     },
//     getPlayerName() {
//         console.log("playername", this._state.player.name)
//         return this._state.player.name
//     },
//     getOpponentName() {
//         return this._state.opponent.name
//     },
//     getWhoseTurnState() {
//         return this._state.game.gameState.getWhoseTurn()
//     },
//     turnLiveShips(){
//         if (this._state.game.OPPONENT === "II") {
//             return this._state.game.gameState.getPlayerCountLiveShips()
//         } else {
//             if (this._state.game.gameState.getWhoseTurn() === LocalGame.WHO.FIRST_PLAYER) {
//                 return this._state.game.gameState.getPlayerCountLiveShips()
//             } else {
//                 return this._state.game.gameState.getOpponentCountLiveShips()
//             }
//         }
//     },
//     opponentLiveShips() {
//         if (this._state.game.OPPONENT === "II") {
//             return this._state.game.gameState.getOpponentCountLiveShips()
//         } else {
//             if (this._state.game.gameState.getWhoseTurn() === LocalGame.WHO.FIRST_PLAYER) {
//                 return this._state.game.gameState.getOpponentCountLiveShips()
//             } else {
//                 return this._state.game.gameState.getPlayerCountLiveShips()
//             }
//         }
//     },
//     nameWhoseTurn() {
//         if (this._state.game.gameState.getWhoseTurn() === LocalGame.WHO.FIRST_PLAYER) {
//             return this._state.player.name
//         } else {
//             return this._state.opponent.name
//         }
//     },
//     nameWhoseOpponent() {
//         if (this._state.game.gameState.getWhoseTurn() === LocalGame.WHO.FIRST_PLAYER) {
//             return this._state.opponent.name
//         } else {
//             return this._state.player.name
//         }
//     },
//     getTurnField () {
//         return this._state.game.turnField
//     },
//     getNotTurnField() {
//         return this._state.game.notTurnField
//     },
//     getGameTypeOpponent () {
//         return this._state.game.OPPONENT
//     },
//     whoseWin() {
//         if (this._state.game.status.game === "FINISH") {
//             if (this._state.game.gameState.getPlayerCountLiveShips() !== 0) {
//                 console.log("win " + this._state.player.name)
//                 return this._state.player.name
//             } else {
//                 console.log("win " + this._state.opponent.name)
//                 return this._state.opponent.name
//             }
//         }
//     },
//
//     dispatch(action) {
//
//         this._state.player = playerReducer(this._state.player, action)
//         this._state.game = gameReducer(this._state.game, action)
//         this._state.opponent = opponentReducer(this._state.opponent, action)
//
//         console.log(this._state)
//
//         this._getUIField()
//         this._renderer()
//     }
// }
//
//

const SET_PLAYER_NAME = "SET_PLAYER_NAME"
const SET_GAME_TYPE = "SET_GAME_TYPE"
const SET_GAME_TYPE_OPPONENT = "SET_GAME_TYPE_OPPONENT"
const SET_OPPONENT_NAME = "SET_OPPONENT_NAME"
const ARRANGE_PLAYER = "ARRANGE_PLAYER"
const CHECK_TURN = "CHECK_TURN"
const REPEAT_RANDOM_PLACEMENT = "REPEAT_RANDOM_PLACEMENT"
const START_GAME= "START_GAME"
const ATTACK_II = "ATTACK_II"
const ATTACK = "ATTACK"
const NEW_GAME = "NEW_GAME"

export const setPlayerNameActionCreator = (event) => {
    return {type: SET_PLAYER_NAME, name: event.target.value}
}

export const setGameTypeActionCreator = (event) => {
    return {type: SET_GAME_TYPE, gameType: event.target.value}
}

export const setGameTypeOpponentActionCreator = (event) => {
    return {type: SET_GAME_TYPE_OPPONENT, oppType: event.target.value}
}

export const setOpponentNameActionCreator = (event) => {
    return {type: SET_OPPONENT_NAME, name: event.target.value}
}

export const arrangementPlayerActionCreator = () => {
    return {type: ARRANGE_PLAYER}
}

export const changeTurnActionCreator = () => {
    return {type: CHECK_TURN}
}

export const repeatRandomPlacementActionCreator = () => {
    return {type: REPEAT_RANDOM_PLACEMENT}
}

export const startGameActionCreator = () => {
    return {type: START_GAME}
}

export const attackIIActionCreator = () => {
    return {type: ATTACK_II}
}

export const attackActionCreator = (e) => {
    return {type: ATTACK, index: e.target}
}

export const newGameActionCreator = () => {
    return {type: NEW_GAME}
}
//
//
//
// export default store
//
//
//
//
//
//
//
//
//
//
//
// // setOpponentName(name) {
// //     this._state.opponent.name = name
// //
// //     this._renderer()
// // },
// // arrangePlayer() {
// //     if (this._state.game.status.arrange === false) {
// //         this._state.game.status.arrange = true
// //
// //         console.log("new game hehe")
// //         this._state.game.gameState = new GameState()
// //         this._state.game.gameState.setTypeGame(this._state.game.TYPE)
// //
// //         if (this.getGameTypeOpponent() === "II") {
// //             this._state.game.gameState.getRandomPlacement()
// //         } else {
// //             this._state.game.gameState.getRandomPlacementBoth()
// //         }
// //
// //         this._updateTables()
// //         this._getUIField()
// //
// //     }
// // },
// // repeatRandomPlacement() {
// //     this._state.game.gameState.getRandomPlacement()
// //
// //     this._updateTables()
// //
// // },
// //
// // checkTurn() {
// //     console.log("pass on button")
// //     if (this._state.game.gameState.getWhoseTurn() === LocalGame.WHO.FIRST_PLAYER) {
// //         this._state.game.gameState.setWhoseTurn(LocalGame.WHO.SECOND_PLAYER)
// //     } else {
// //         this._state.game.gameState.setWhoseTurn(LocalGame.WHO.FIRST_PLAYER)
// //     }
// //     this._getUIField()
// // },
// // startGame() {
// //     if (this._state.game.status.game === "NOT_START") {
// //         this._state.game.status.game = "GAME"
// //         this._state.game.gameState.setStartGame()
// //     }
// // },
// // newGame() {
// //     this._state.game.status.game = "NOT_START"
// //     this._state.game.status.arrange = false
// // },
// // attack(e) {
// //     if (this._state.game.status.game === "GAME") {
// //         let cell = e.target
// //
// //         let col = cell.cellIndex
// //         let row = cell.parentNode.rowIndex
// //
// //         if (this._state.game.gameState.getWhoseTurn() === LocalGame.WHO.FIRST_PLAYER) {
// //             this._state.game.gameState.getPlayer().setCurrCoordinateRC(row, col);
// //         } else {
// //             this._state.game.gameState.getOpponent().setCurrCoordinateRC(row, col);
// //         }
// //
// //     }
// //     if (this._state.game.gameState.getGame().attacks()) {
// //         this._state.game.status.game = "FINISH"
// //         this._state.game.statistic.push(this._statistic())
// //     }
// //     this._getUIField()
// // },
// // attackII() {
// //     if (this._state.game.status.game === "GAME" && this._state.game.OPPONENT === "II") {
// //         if (this._state.game.gameState.getWhoseTurn() === LocalGame.WHO.SECOND_PLAYER) {
// //             this._state.game.gameState.getOpponent().setCurrCoordinate(getCoordinate());
// //             if (this._state.game.gameState.getGame().attacks()) {
// //                 this._state.game.status.game = "FINISH"
// //                 this._state.game.statistic.push(this._statistic())
// //             }
// //             this._updateTables()
// //         }
// //     }
// // },
// // setGameTypeOpponent(type) {
// //     this._state.game.OPPONENT = type
// //     this._renderer()
// // },
// // setGameType(type) {
// //     this._state.game.TYPE = type
// // },
//
//
//
//
//
// // let renderer = () => {
// //
// // }
// //
// // const state = {
// //     player: {
// //         name: "",
// //         field: []
// //     },
// //     game: {
// //         gameState: " ",
// //         turnField: [],
// //         notTurnField: [],
// //         status: {
// //             arrange: false,
// //             game: "NOT_START"
// //         },
// //         TYPE: "QUEUE",
// //         OPPONENT: "II",
// //         statistic: []
// //     },
// //     opponent: {
// //         name: "ИГРОК 2",
// //         field: []
// //     }
// // }
// //
// // export const subscriber = (observed) => {
// //     renderer = observed
// // }
// //
// // export let setPlayerName = (name) => {
// //     state.player.name = name
// //
// //     renderer()
// // }
// //
// // export let getPlayerName = () => {
// //     return state.player.name
// // }
// //
// // export let setOpponentName = (name) => {
// //     state.opponent.name = name
// //
// //     renderer()
// // }
// //
// // export let getOpponentName = () => {
// //     return state.opponent.name
// // }
// //
// // export let arrangePlayer = () => {
// //
// //     if (state.game.status.arrange === false) {
// //         state.game.status.arrange = true
// //
// //         console.log("new game hehe")
// //         state.game.gameState = new GameState()
// //         state.game.gameState.setTypeGame(state.game.TYPE)
// //
// //         if (getGameTypeOpponent() === "II") {
// //             state.game.gameState.getRandomPlacement()
// //         } else {
// //             state.game.gameState.getRandomPlacementBoth()
// //         }
// //
// //         updateTables()
// //         getUIField()
// //
// //     }
// // }
// //
// // export let repeatRandomPlacement = () => {
// //     state.game.gameState.getRandomPlacement()
// //
// //     updateTables()
// //
// // }
// //
// // let getUIField = () => {
// //     updateTables()
// //
// //
// //     if (state.game.OPPONENT === "II") {
// //         state.game.turnField = state.player.field
// //         state.game.notTurnField = state.opponent.field
// //     } else {
// //         state.game.turnField = state.game.gameState.getTurnField()
// //         state.game.notTurnField = state.game.gameState.getNotTurnField()
// //     }
// //     updateTables()
// // }
// //
// //
// // export let checkTurn = () => {
// //     console.log("pass on button")
// //     if (state.game.gameState.getWhoseTurn() === LocalGame.WHO.FIRST_PLAYER) {
// //         state.game.gameState.setWhoseTurn(LocalGame.WHO.SECOND_PLAYER)
// //     } else {
// //         state.game.gameState.setWhoseTurn(LocalGame.WHO.FIRST_PLAYER)
// //     }
// //     getUIField()
// // }
// //
// // export let startGame = () => {
// //     if (state.game.status.game === "NOT_START") {
// //         state.game.status.game = "GAME"
// //         state.game.gameState.setStartGame()
// //     }
// // }
// //
// // export let newGame = () => {
// //     state.game.status.game = "NOT_START"
// //     state.game.status.arrange = false
// // }
// //
// // export let attack = (e) => {
// //     if (state.game.status.game === "GAME") {
// //             let cell = e.target
// //
// //             let col = cell.cellIndex
// //             let row = cell.parentNode.rowIndex
// //
// //         if (state.game.gameState.getWhoseTurn() === LocalGame.WHO.FIRST_PLAYER) {
// //             state.game.gameState.getPlayer().setCurrCoordinateRC(row, col);
// //         } else {
// //             state.game.gameState.getOpponent().setCurrCoordinateRC(row, col);
// //         }
// //
// //     }
// //     if (state.game.gameState.getGame().attacks()) {
// //         state.game.status.game = "FINISH"
// //         //соо
// //     }
// //     getUIField()
// // }
// //
// //
// // export let attackII = () => {
// //
// //     if (state.game.status.game === "GAME" && state.game.OPPONENT === "II") {
// //         if (state.game.gameState.getWhoseTurn() === LocalGame.WHO.SECOND_PLAYER) {
// //             state.game.gameState.getOpponent().setCurrCoordinate(getCoordinate());
// //             if (state.game.gameState.getGame().attacks()) {
// //                 state.game.status.game = "FINISH"
// //                 state.game.statistic.push(statistic())
// //             }
// //             updateTables()
// //         }
// //     }
// // }
// //
// // let statistic = () => {
// //     let currentDate = new Date();
// //
// //     let data = currentDate.getFullYear() + '/' + currentDate.getMonth() + 1 + '/' + currentDate.getDate() +
// //         ' ' + currentDate.getHours() + ':' + currentDate.getMinutes()
// //
// //     let status = ""
// //     if (state.game.gameState.getPlayerCountLiveShips() !== 0) {
// //         status = "ПОБЕДА"
// //     } else {
// //         status = "ПОРАЖЕНИЕ"
// //     }
// //
// //     return [data, status]
// // }
// //
// // export let textMessagesForGame = {
// //     turnLiveShips: () => {
// //         if (state.game.OPPONENT === "II") {
// //             return state.game.gameState.getPlayerCountLiveShips()
// //         } else {
// //             if (state.game.gameState.getWhoseTurn() === LocalGame.WHO.FIRST_PLAYER) {
// //                 return state.game.gameState.getPlayerCountLiveShips()
// //             } else {
// //                 return state.game.gameState.getOpponentCountLiveShips()
// //             }
// //         }
// //     },
// //     opponentLiveShips: () => {
// //         if (state.game.OPPONENT === "II") {
// //             return state.game.gameState.getOpponentCountLiveShips()
// //         } else {
// //             if (state.game.gameState.getWhoseTurn() === LocalGame.WHO.FIRST_PLAYER) {
// //                 return state.game.gameState.getOpponentCountLiveShips()
// //             } else {
// //                 return state.game.gameState.getPlayerCountLiveShips()
// //             }
// //         }
// //     },
// //     nameWhoseTurn: () => {
// //         if (state.game.gameState.getWhoseTurn() === LocalGame.WHO.FIRST_PLAYER) {
// //             return state.player.name
// //         } else {
// //             return state.opponent.name
// //         }
// //     },
// //     nameWhoseOpponent: () => {
// //         if (state.game.gameState.getWhoseTurn() === LocalGame.WHO.FIRST_PLAYER) {
// //             return state.opponent.name
// //         } else {
// //             return state.player.name
// //         }
// //     }
// // }
// //
// // let updateTables = () => {
// //     state.player.field = state.game.gameState.getPlayerField()
// //     state.opponent.field = state.game.gameState.getOpponentField()
// //
// //     renderer()
// // }
// //
// // export let getTurnField = () => {
// //     return state.game.turnField
// // }
// //
// // export let getNotTurnField = () => {
// //     return state.game.notTurnField
// // }
// //
// // export let getGameTypeOpponent = () => {
// //     return state.game.OPPONENT
// // }
// //
// // export let setGameTypeOpponent = (type) => {
// //     state.game.OPPONENT = type
// // }
// //
// // export let getGameTypeShoot = () => {
// //     return state.game.TYPE
// // }
// //
// // export let setGameType = (type) => {
// //     state.game.TYPE = type
// // }
// //
// // export let getGame = () => {
// //     return state.game
// // }
// //
// // export let statusGame = () => {
// //     return state.game.status.game
// // }
// //
// // export let whoseWin = () => {
// //     if (state.game.status.game === "FINISH") {
// //         if (state.game.gameState.getPlayerCountLiveShips() !== 0) {
// //             console.log("win " + state.player.name)
// //             return state.player.name
// //         } else {
// //             console.log("win " + state.opponent.name)
// //             return state.opponent.name
// //         }
// //     }
// // }
// //
// // export let nameWinner
// //
// // export default state