import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SidebarMenu } from "./components/menu/Sidebar";
import DashboardPage from "./pages/Dashboard";
import AccountPage from "./pages/Account";

function App() {
  return (
    <Router>
      <div className="flex flex-row">
        <SidebarMenu />
        <Routes>
          <Route path="/league/:leagueID" element={<DashboardPage />} />
          <Route path="/account" element={<AccountPage />} />
          {/* Add more routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
