import app from './App.module.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SetNameAndChooseGame from "./ui/Registration/ComponentsForRegistration/SetNameAndChooseGame";
import ChooseOpponent from "./ui/Registration/ComponentsForRegistration/ChooseOpponent";
import ArrangementShips from "./ui/Registration/ArrangementShips/ArrangementShips";
import Game from "./ui/Game/Game";

const App = (props) => {

  return (
      <Router>
        <div className={app.App}>
          <main className={app.main}> {/* регистрационная часть*/}
            <Routes>
              <Route path="/*" element={<SetNameAndChooseGame /* player={props.state.player} game={props.state.game} setName={setName}*/ />}/>
              <Route path="/chooseOpponent" element={<ChooseOpponent /*game={props.state.game}*/ />}/>
              <Route path="/arrangement" element={<ArrangementShips /*player={props.state.player}
                                                                    field1={getField}
                                                                    field2={props.state.opponent.field}*/ />}/>
              <Route path="/game" element={<Game /*state={props.state}*/ />}/>
            </Routes>
          </main>
        </div>
      </Router>

  );
}

export default App;
