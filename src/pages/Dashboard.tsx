import React from "react";
import PageWrapper from "../components/utils/PageWrapper";
import { useUserStore } from "../store/UserStore";
import { TeamStandingsTable } from "../components/league/TeamStandingsTable";
import RoundsNavigation from "../components/league/RoundsNavigation";
import useFetchLeague from "../hooks/useFetchLeague";
import AddTeamForm from "../components/league/AddTeamForm";

const Dashboard: React.FC = () => {
  // Set league
  const { league, loadingLeague } = useFetchLeague("243234");

  if (loadingLeague) {
    return <p>Loading...</p>;
  } else if (!loadingLeague && league) {
    return (
      <div className="p-4">
        {/* Header */}
        <header className="py-4">
          <span className="text-gray-700">#{league.id}</span>
          <h1 className="text-5xl font-semibold">
            {league.name} ({league.rounds.length} rounds)
          </h1>
        </header>
        {/* Aside User Controls */}
        <div className="flex flex-row gap-8">
          <aside>
            <h3>Standings</h3>
            <div className="max-w-[500px] my-2">
              {/* Standings */}
              <TeamStandingsTable teams={league.teams} />
            </div>

            {/* Admin - add team panel */}
            <h3>Add team to league</h3>
            <AddTeamForm league={league} />
          </aside>
          {/* Main User Controls / Content */}
          <main>
            {/* Rounds Navigation / Controls */}
            <RoundsNavigation rounds={league.rounds} />
          </main>
        </div>
      </div>
    );
  }
};

function LogInDashboard(): React.ReactElement {
  return <div>Please log in</div>;
}

export default function DashboardPage() {
  const { userLoggedIn } = useUserStore();

  return (
    <PageWrapper
      component={userLoggedIn ? <Dashboard /> : <LogInDashboard />}
    />
  );
}
