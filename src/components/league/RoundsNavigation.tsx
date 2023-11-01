import { Round } from "../../types/Round";
import { Match } from "../../types/Match";

export default function RoundsNavigation({ rounds }: { rounds: Round[] }) {
  return (
    <ul>
      {rounds.map((round) => (
        <>
          <li key={round.id}>{round.roundNumber}</li>
          <MatchNavigation matches={round.matches} />
        </>
      ))}
    </ul>
  );
}

function MatchNavigation({ matches }: { matches: Match[] }) {
  return (
    <>
      {matches.map((match) => (
        <li>
          {match.awayTeam.name} - {match.awayScore} @ {match.homeScore}{" "}
          {match.homeTeam.name}
        </li>
      ))}
    </>
  );
}
