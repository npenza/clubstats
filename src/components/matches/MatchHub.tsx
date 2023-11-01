import React, { useState, useEffect } from "react";
import { Drawer } from "@material-tailwind/react";
import { Match } from "../../types/Match";
import MatchScoreCard from "./MatchScoreCard";

export function MatchHub({ match, open }: { match: Match; open: boolean }) {
  const [openRight, setOpenRight] = useState(open);

  // Use useEffect to synchronize the openRight state with the open prop
  useEffect(() => {
    setOpenRight(open);
  }, [open]); // Re-run the effect when the open prop changes

  const closeDrawerRight = () => setOpenRight(false);

  return (
    <React.Fragment>
      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="bg-blue-50"
        size={1000}
      >
        <div className="mb-6 flex flex-col items-center justify-between">
          {/* Hero Image */}
          <div className="bg-gray-500 shadow-md flex flex-row w-[100%] h-80">
            <img src={match.awayTeam.teamImg} className="flex-1 object-cover" />
            <img src={match.homeTeam.teamImg} className="flex-1 object-cover" />
          </div>
          <div className="-mt-16 lg:w-[700px]">
              <MatchScoreCard match={match} />
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
