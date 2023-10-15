import app from './App.module.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SetNameAndChooseGame from "./ui/Registration/ComponentsForRegistration/SetNameAndChooseGame";
import ChooseOpponent from "./ui/Registration/ComponentsForRegistration/ChooseOpponent";
import ArrangementShips from "./ui/Registration/ArrangementShips/ArrangementShips";
import Game from "./ui/Game/Game";
import Rules from "./ui/Navigation/Rules/Rules";
import Statistics from "./ui/Navigation/Statistics/Statistics";

const App = (props) => {

    return (
        <Router>
            <div className={app.App}>
                <main className={app.main}>
                    <Routes>
                        <Route path="/*" element={<SetNameAndChooseGame  getPlayerName={props.store.getPlayerName.bind(props.store)}
                                                                         dispatch={props.store.dispatch.bind(props.store)}/>}/>
                        <Route path="/chooseOpponent" element={<ChooseOpponent getOpponentName={props.store.getOpponentName.bind(props.store)}
                                                                               getPlayerName={props.store.getPlayerName.bind(props.store)}
                                                                               getGameTypeOpponent={props.store.getGameTypeOpponent.bind(props.store)}
                                                                               dispatch={props.store.dispatch.bind(props.store)}/>}/>
                        <Route path="/arrangement" element={<ArrangementShips getGameTypeOpponent={props.store.getGameTypeOpponent.bind(props.store)}
                                                                              getTurnField={props.store.getTurnField.bind(props.store)}
                                                                              nameWhoseTurn={props.store.nameWhoseTurn.bind(props.store)}
                                                                              dispatch={props.store.dispatch.bind(props.store)}/>}/>
                        <Route path="/game" element={<Game nameWhoseTurn={props.store.nameWhoseTurn.bind(props.store)}
                                                           turnLiveShips={props.store.turnLiveShips.bind(props.store)}
                                                           opponentLiveShips={props.store.opponentLiveShips.bind(props.store)}
                                                           getTurnField={props.store.getTurnField.bind(props.store)}
                                                           getNotTurnField={props.store.getNotTurnField.bind(props.store)}
                                                           nameWhoseOpponent={props.store.nameWhoseOpponent.bind(props.store)}
                                                           whoseWin={props.store.whoseWin.bind(props.store)}
                                                           statusGame={props.store.statusGame.bind(props.store)}
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
