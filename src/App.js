import app from './App.module.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SetNameAndChooseGame from "./ui/Registration/ComponentsForRegistration/SetNameAndChooseGame";
import ChooseOpponent from "./ui/Registration/ComponentsForRegistration/ChooseOpponent";
import ArrangementShips from "./ui/Registration/ArrangementShips/ArrangementShips";
import Game from "./ui/Game/Game";
import {
    arrangePlayer,
    attack,
    attackII,
    checkTurn,
    getGameTypeOpponent, getGameTypeShoot,
    getNotTurnField, getOpponentName, getPlayerName,
    getTurnField, newGame,
    repeatRandomPlacement,
    rerender, setGameType, setGameTypeOpponent, setGameTypeShoot,
    setOpponentName,
    setPlayerName,
    startGame, statusGame,
    textMessagesForGame, whoseWin
} from "./state";
import Rules from "./ui/Navigation/Rules/Rules";
import Statistics from "./ui/Navigation/Statistics/Statistics";

const App = (props) => {

    return (
        <Router>
            <div className={app.App}>
                <main className={app.main}>
                    <Routes>
                        <Route path="/*" element={<SetNameAndChooseGame  setPlayerName={setPlayerName}
                                                               getPlayerName={getPlayerName}
                                                               getGameType={getGameTypeShoot}
                                                               setGameType={setGameType}/>}/>
                        <Route path="/chooseOpponent" element={<ChooseOpponent setGameOpp={setGameTypeOpponent}
                                                                     getGameOpp={getGameTypeOpponent}
                                                                     update={rerender}
                                                                     setOppName={setOpponentName}
                                                                     getOppName={getOpponentName}/>}/>
                        <Route path="/arrangement" element={<ArrangementShips gameOpponent={getGameTypeOpponent}
                                                                    arrange={arrangePlayer}
                                                                    turnField={getTurnField}
                                                                    checkTurn={checkTurn}
                                                                    update={rerender}
                                                                    repeate={repeatRandomPlacement}
                                                                    getTurnName={textMessagesForGame.nameWhoseTurn}/>}/>
                        <Route path="/game" element={<Game startGame={startGame}
                                                           attack={attack}
                                                           attackII={attackII}
                                                           textMessage={textMessagesForGame}
                                                           turnField={getTurnField}
                                                           opponentField={getNotTurnField}
                                                           status={statusGame}
                                                           whoseWin={whoseWin}
                                                           newGame={newGame}/>}/>
                        <Route path="/rules" element={<Rules/>}/>
                        <Route path="/statistics" element={<Statistics/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
