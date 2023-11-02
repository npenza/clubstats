import { Input, Typography, Button } from "@material-tailwind/react";
import { useState } from "react";
import { League } from "../../types/League";

export default function AddTeamForm({ league }: { league: League }) {
  const [teamName, setTeamName] = useState<string>("");

  const addNewTeamToLeague = () => {
    league.addTeamToLeague(teamName);
  };

  return (
    <form className="mt-8 mb-2 w-72 p-4  max-w-screen-lg sm:w-96 bg-white">
      <div className="mb-1 flex flex-col gap-6">
        {/* Team Name */}
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Team Name
        </Typography>
        <Input
          size="lg"
          placeholder="Kansas City Chiefs"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          onChange={(e) => setTeamName(e.target.value)}
          value={teamName}
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
      </div>
      <Button
        onClick={addNewTeamToLeague}
        className="mt-6"
        color="blue"
        fullWidth
      >
        Add Team
      </Button>
    </form>
  );
}
