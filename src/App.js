import app from './App.module.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SetNameAndChooseGame from "./ui/Registration/ComponentsForRegistration/SetNameAndChooseGame";
import ChooseOpponent from "./ui/Registration/ComponentsForRegistration/ChooseOpponent";
import ArrangementShips from "./ui/Registration/ArrangementShips/ArrangementShips";
import Game from "./ui/Game/Game";
import Rules from "./ui/Navigation/Rules/Rules";
import Statistics from "./ui/Navigation/Statistics/Statistics";
import Navigation from "./ui/Navigation/Navigation";

const App = (props) => {
    return (
        <Router>
            <div className={app.App}>
                <section className={app.page}>
                    <main className={app.main}>
                        <Routes>
                            <Route path="/*" element={<SetNameAndChooseGame  getPlayerName={props.state.player.name}
                                                                             getGameType={props.state.game.TYPE}
                                                                             pageGame={props.state.pageData.arrange}
                                                                             dispatch={props.store.dispatch.bind(props.store)}/>}/>
                            <Route path="/chooseOpponent" element={<ChooseOpponent getOpponentName={props.state.opponent.name}
                                                                                   getPlayerName={props.state.player.name}
                                                                                   getGameTypeOpponent={props.state.game.OPPONENT}
                                                                                   dispatch={props.store.dispatch.bind(props.store)}/>}/>
                            <Route path="/arrangement" element={<ArrangementShips getGameTypeOpponent={props.state.game.OPPONENT}
                                                                                  getTurnField={props.state.game.turnField}
                                                                                  nameWhoseTurn={props.state.game.nameWhoseTurn}
                                                                                  dispatch={props.store.dispatch.bind(props.store)}/>}/>
                            <Route path="/game" element={<Game playerName={props.state.player.name}
                                                               typeGame={props.state.game.TYPE}
                                                               score={props.state.game.score}
                                                               nameWhoseTurn={props.state.game.nameWhoseTurn}
                                                               getGameTypeOpponent={props.state.game.OPPONENT}
                                                               whoseTurnState={props.state.game.whoseTurnState}
                                                               turnLiveShips={props.state.game.turnLiveShips}
                                                               opponentLiveShips={props.state.game.opponentLiveShips}
                                                               getTurnField={props.state.game.turnField}
                                                               getNotTurnField={props.state.game.notTurnField}
                                                               nameWhoseOpponent={props.state.game.nameWhoseOpponent}
                                                               whoseWin={props.state.game.whoseWin}
                                                               statusGame={props.state.game.status.game}
                                                               dispatch={props.store.dispatch.bind(props.store)}/>}/>
                            <Route path="/rules" element={<Rules pageSetName={props.state.pageData.setPlayerName}
                                                                 pageSetOpp={props.state.pageData.setOpp}
                                                                 pageArrange={props.state.pageData.arrange}
                                                                 pageGame={props.state.pageData.game}
                                                                 pageStatistic={props.state.pageData.statistic}/>}/>
                            <Route path="/statistics" element={<Statistics statistic={props.state.game.statistic}
                                                                           pageSetName={props.state.pageData.setPlayerName}
                                                                           pageSetOpp={props.state.pageData.setOpp}
                                                                           pageArrange={props.state.pageData.arrange}
                                                                           pageGame={props.state.pageData.game}
                                                                           pageStatistic={props.state.pageData.statistic}/>}/>
                        </Routes>
                    </main>
                    <nav>
                        <Navigation gameStatus={props.state.game.status.game}
                                    dispatch={props.store.dispatch.bind(props.store)}/>
                    </nav>
                </section>
            </div>
        </Router>
    );
}

export default App;
