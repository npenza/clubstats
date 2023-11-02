import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SidebarMenu } from "./components/menu/Sidebar";
import DashboardPage from "./pages/Dashboard";
import AccountPage from "./pages/Account";
import useFetchUser from "./hooks/useFetchUser";

function App() {
  const { user, userLoading } = useFetchUser("03232432423"); // Use the user's ID here

  if (userLoading) {
    return <p>Loading</p>;
  } else {
    return (
      <Router>
        <div className="flex flex-row">
          <SidebarMenu user={user} />
          <Routes>
            <Route path="/league/:leagueID" element={<DashboardPage />} />
            <Route path="/account" element={<AccountPage />} />
            {/* Add more routes here */}
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
