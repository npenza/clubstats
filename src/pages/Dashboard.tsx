import { ReactNode } from "react";
import PageWrapper from "../components/utils/PageWrapper";
import { useUserStore } from "../store/UserStore";
import { League } from "../types/League";
import { TeamStandingsTable } from "../components/league/TeamStandingsTable";
import RoundsNavigation from "../components/league/RoundsNavigation";

interface DashboardProps {
  league: League;
}

const Dashboard: React.FC<DashboardProps> = ({
  league,
}: {
  league: League;
}) => {
  // get teams from current league
  const teams = league.getLeagueTeams();
  const rounds = league.getLeagueRounds();

  return (
    <div className="p-4">
      <header className="py-4">
        <span className="text-gray-700">#{league.getID()}</span>
        <h1 className="text-5xl font-semibold ">
          {league.name} ({league.getLeagueRounds().length} rounds)
        </h1>
      </header>
      <div className="flex flex-row gap-8">
        <aside>
          <h3>Standings</h3>
          <div className="max-w-[500px] my-2">
            <TeamStandingsTable teams={teams} />
          </div>
        </aside>

        <main>
          <RoundsNavigation rounds={rounds} />
        </main>
      </div>
    </div>
  );
};

function LogInDashboard(): ReactNode {
  return <div>Please log in</div>;
}

export default function DashboardPage({ league }: { league: League }) {
  const { userLoggedIn } = useUserStore();

  return (
    <PageWrapper
      component={
        userLoggedIn ? <Dashboard league={league} /> : <LogInDashboard />
      }
    />
  );
}
