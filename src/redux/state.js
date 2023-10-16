// import {GameState} from "../logic/ui/connectionWithUI";
// import LocalGame from "../logic/localGame";
// import {getCoordinate} from "../logic/IIPlayerStrategy";
// import playerReducer from "./reducers/playerReducer";
// import opponentReducer from "./reducers/opponentReducer";
// import gameReducer from "./reducers/gameReducer";
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
const PAGE_SET_NAME = "PAGE_SET_NAME"
const PAGE_CHOOSE_OPP = "PAGE_CHOOSE_OPP"
const PAGE_ARRANGE = "PAGE_ARRANGE"
const PAGE_GAME = "PAGE_GAME"
const PAGE_RULES = "PAGE_RULES"
const PAGE_STATISTIC = "PAGE_STATISTIC"

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

export const pageSetName = () => {
    return {type: PAGE_SET_NAME}
}

export const pageChooseOpp = () => {
    return {type: PAGE_CHOOSE_OPP}
}

export const pageArrange = () => {
    return {type: PAGE_ARRANGE}
}

export const pageGame = () => {
    return {type: PAGE_GAME}
}

export const pageRules = () => {
    return {type: PAGE_RULES}
}

export const pageStatistic = () => {
    return {type: PAGE_STATISTIC}
}