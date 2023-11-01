import { Round } from "../../types/Round";
import { Match } from "../../types/Match";
import { IconButton } from "@material-tailwind/react";
import { useState } from "react";
import MatchHubPreviewCard from "../matches/MatchHubPreviewCard";

export default function RoundsNavigation({ rounds }: { rounds: Round[] }) {
  const [active, setActive] = useState(1);

  const getItemProps = (index) =>
    ({
      variant: active === index ? "filled" : "text",
      color: "blue",
      onClick: () => setActive(index),
    }) as any;

  // Find the active round
  const activeRound = rounds.find((round) => round.roundNumber === active);

  return (
    <div>
      <div className="flex items-center gap-2">
        {rounds.map((round) => (
          <IconButton
            key={round.roundNumber}
            {...getItemProps(round.roundNumber)}
          >
            {round.roundNumber}
          </IconButton>
        ))}
      </div>
      {activeRound && <RoundMatchHub matches={activeRound.matches} />}
    </div>
  );
}

function RoundMatchHub({ matches }: { matches: Match[] }) {
  const sortedMatchesByDate: Match[] = matches.sort(
    (match1, match2) => match2.date - match1.date,
  );

  return (
    <ul className="min-w-[500px]">
      {sortedMatchesByDate.map((match, index) => (
        <MatchHubPreviewCard key={index} match={match} />
      ))}
    </ul>
  );
}
