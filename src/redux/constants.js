export const GAME_STATUS = {
    NOT_START : "NOT_START",
    GAME: "GAME",
    FINISH: "FINISH"
}

export const GAME_TYPE = {
    QUEUE: "QUEUE",
    MISS: "MISS"
}

export const GAME_OPPONENT = {
    II: "II",
    SECOND_PLAYER: "SECOND_PLAYER"
}

export const GAME_WHOSE_TURN = {
    FIRST_PLAYER: "FIRST_PLAYER",
    SECOND_PLAYER: "SECOND_PLAYER"
}

export const FIELD_COLOR = {
    RED: "red",
    BLUE: "blue",
    NONE: "none",
    GRAY: "gray"
}

export const STATISTIC_GAME_STATE = {
    WIN: "ПОБЕДА",
    LOSE: "ПРОИГРЫШ"
}

export const OPPONENT_DEFAULT_NAME = "ИГРОК 2"

export const EMPTY_STRING = ""




// for dispatch
export const SET_PLAYER_NAME = "SET_PLAYER_NAME"
export const SET_GAME_TYPE = "SET_GAME_TYPE"
export const SET_GAME_TYPE_OPPONENT = "SET_GAME_TYPE_OPPONENT"
export const SET_OPPONENT_NAME = "SET_OPPONENT_NAME"
export const ARRANGE_PLAYER = "ARRANGE_PLAYER"
export const CHECK_TURN = "CHECK_TURN"
export const REPEAT_RANDOM_PLACEMENT = "REPEAT_RANDOM_PLACEMENT"
export const START_GAME= "START_GAME"
export const ATTACK_II = "ATTACK_II"
export const ATTACK = "ATTACK"
export const NEW_GAME = "NEW_GAME"
export const PAGE_SET_NAME = "PAGE_SET_NAME"
export const PAGE_CHOOSE_OPP = "PAGE_CHOOSE_OPP"
export const PAGE_ARRANGE = "PAGE_ARRANGE"
export const PAGE_GAME = "PAGE_GAME"
export const PAGE_RULES = "PAGE_RULES"
export const PAGE_STATISTIC = "PAGE_STATISTIC"


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
