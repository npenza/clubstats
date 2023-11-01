import { Card, Typography } from "@material-tailwind/react";
import { Team } from "../../types/Team";
import { useEffect, useState } from "react";
import config from "../../../config";

const TABLE_HEAD = ["Team", "Games Played", "Total Points"];

export function TeamStandingsTable({ teams: initialTeams }: { teams: Team[] }) {
  const [teams, setTeams] = useState(initialTeams);

  useEffect(() => {
    // Fetch the data and update the state
    async function fetchData() {
      try {
        const response = await fetch(config.API_URL + "/teams");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTeams(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    fetchData();
  }, []); // Empty dependency array to ensure it only runs once

  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {teams.map(({ name, gamesPlayed, totalPoints }, index) => {
            const isLast = index === teams.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {gamesPlayed}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {totalPoints}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
