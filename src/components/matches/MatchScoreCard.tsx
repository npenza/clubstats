import { Match } from "../../types/Match";
import { Card, CardBody } from "@material-tailwind/react";

export default function MatchScoreCard({ match }: { match: Match }) {
  return (
    <Card className="mt-6 w-[100%] text-center">
      <CardBody>
        <div className="flex flex-row self-center justify-evenly align-middle text-black">
          <img
            src={match.awayTeam.teamImg}
            className="mx-2 w-28 h-28 rounded-full object-cover shadow-sm"
          />
          <div className="flex flex-col self-center">
            <div>
              <strong className="text-3xl">{match.awayScore} </strong>
              <span className="text-lg px-4">
                {match.awayTeam.name} @ {match.homeTeam.name}{" "}
              </span>
              <strong className="text-3xl">{match.homeScore} </strong>
            </div>
            <span>{match.location}</span>
          </div>
          <img
            src={match.homeTeam.teamImg}
            className="mx-2 w-28 h-28 rounded-full object-cover shadow-sm"
          />
        </div>
      </CardBody>
    </Card>
  );
}
