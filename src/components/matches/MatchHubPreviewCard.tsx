import { Card, CardBody, CardFooter } from "@material-tailwind/react";
import { Match } from "../../types/Match";
import { MatchHub } from "./MatchHub";
import MatchHubButton from "./MatchHubButton";
import { useState } from "react";

export default function MatchHubPreviewCard({ match }: { match: Match }) {
  const [openMatchHub, setMatchHub] = useState(false);

  return (
    <>
      <Card className="mt-6 w-[100%] text-center">
        <CardBody>
          <div className="flex flex-row self-center justify-evenly align-middle text-black">
            <img
              src={match.awayTeam.teamImg}
              className="w-28 h-28 rounded-full object-cover shadow-sm"
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
              className="w-28 h-28 rounded-full object-cover shadow-sm"
            />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <div onClick={() => setMatchHub(!openMatchHub)}>
            {" "}
            {/* Toggle the openMatchHub state */}
            <MatchHubButton />
          </div>
        </CardFooter>
      </Card>
      {/* Match Hub Drawer */}
      <MatchHub match={match} open={openMatchHub} />
    </>
  );
}
