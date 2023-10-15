import app from './App.module.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SetNameAndChooseGame from "./ui/Registration/ComponentsForRegistration/SetNameAndChooseGame";
import ChooseOpponent from "./ui/Registration/ComponentsForRegistration/ChooseOpponent";
import ArrangementShips from "./ui/Registration/ArrangementShips/ArrangementShips";
import Game from "./ui/Game/Game";
import Rules from "./ui/Navigation/Rules/Rules";
import Statistics from "./ui/Navigation/Statistics/Statistics";

const App = (props) => {

    console.log("app", props.state.game)

    return (
        <Router>
            <div className={app.App}>
                <main className={app.main}>
                    <Routes>
                        <Route path="/*" element={<SetNameAndChooseGame  getPlayerName={props.state.player.name}
                                                                         dispatch={props.store.dispatch.bind(props.store)}/>}/>
                        <Route path="/chooseOpponent" element={<ChooseOpponent getOpponentName={props.state.opponent.name}
                                                                               getPlayerName={props.state.player.name}
                                                                               getGameTypeOpponent={props.state.game.OPPONENT}
                                                                               dispatch={props.store.dispatch.bind(props.store)}/>}/>
                        <Route path="/arrangement" element={<ArrangementShips getGameTypeOpponent={props.state.game.OPPONENT}
                                                                              getTurnField={props.state.game.turnField}
                                                                              nameWhoseTurn={props.state.game.nameWhoseTurn}
                                                                              dispatch={props.store.dispatch.bind(props.store)}/>}/>
                        <Route path="/game" element={<Game nameWhoseTurn={props.state.game.nameWhoseTurn}
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
                        <Route path="/rules" element={<Rules/>}/>
                        <Route path="/statistics" element={<Statistics/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
