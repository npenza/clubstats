import { useState, useEffect } from "react";
import { League } from "../types/League";

function useFetchLeague(id: string) {
  const [league, setLeague] = useState<League | undefined>(); // Specify the return type

  useEffect(() => {
    fetch(`http://localhost:3000/leagues?id=${id}`) // Fix URL interpolation
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: League) => {
        // Create a new League object with the fetched data and leagueTeams
        const newLeague = new League(data[0].id, data[0].name, data[0].teamIDs);
        setLeague(newLeague);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [id]); // Include id and leagueTeams in the dependency array

  return league;
}

export default useFetchLeague;
