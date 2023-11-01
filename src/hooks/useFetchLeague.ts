import { useState, useEffect } from "react";
import { League } from "../types/League";
import config from "../../config";

interface UseFetchLeagueResult {
  league: League | undefined;
  loadingLeague: boolean;
}

function useFetchLeague(id: string): UseFetchLeagueResult {
  const [league, setLeague] = useState<League | undefined>();
  const [loadingLeague, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(config.API_URL + `/leagues?id=${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(async (data: League[]) => {
        const newLeague = await League.create(
          data[0].id,
          data[0].name,
          data[0].teamIDs,
          data[0].roundIDs,
        );
        setLeague(newLeague);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, [id]);

  return { league, loadingLeague };
}

export default useFetchLeague;
