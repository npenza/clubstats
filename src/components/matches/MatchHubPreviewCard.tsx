import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Match } from "../../types/Match";

export default function MatchHubPreviewCard({match} : {match : Match}) {
    console.log(match)
  return (
    <Card className="mt-6 w-[100%] text-center">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          <img src={match.awayTeam.teamImg} className="w-36" /> {match.awayScore} {match.awayTeam.name} @ {match.homeTeam.name} {match.homeScore} <img src={match.homeTeam.teamImg} className="w-36" />
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="#" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            Match Hub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardFooter>
    </Card>
  )
}
