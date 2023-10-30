import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SidebarMenu } from "./components/menu/Sidebar";
import DashboardPage from "./pages/Dashboard";
import AccountPage from "./pages/Account";
import { League } from "./types/League";
import { Team } from "./types/Team";
import { Match } from "./types/Match";
import { Round } from "./types/Round";

function App() {
  // Sample Data
  // Teams
  const barcelona = new Team("Barca", 2, 1);
  const noahfia = new Team("noahfia", 2, 10);
  const real_madrid = new Team("Real Madrid", 1, 4);
  const team4 = new Team("Team4", 3, 2);
  const team5 = new Team("Team5", 4, 6);

  // rounds
  const round1 = new Round(1);
  const round2 = new Round(2);

  // matches
  const match1 = new Match(Date.now(), "20 lo", team4, team5);
  const match2 = new Match(Date.now(), "20 lo", barcelona, noahfia);
  match2.updateHomeScore(33)
  match2.updateAwayScore(30)
  round1.addMatch(match1);
  round1.addMatch(match2);

  // League
  const sampleLeague = new League("Noah League", [
    barcelona,
    noahfia,
    real_madrid,
    team5,
    team4,
  ]);

  sampleLeague.addRound(round1);
  sampleLeague.addRound(round2);
  // End Sample Data

  return (
    <Router>
      <div className="flex flex-row">
        <SidebarMenu />
        <Routes>
          <Route path="/" element={<DashboardPage league={sampleLeague} />} />
          <Route path="/account" element={<AccountPage />} />
          {/* Add more routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
