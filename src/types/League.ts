import { Team } from "./Team";
import { Round } from "./Round";

/**
 * Represents a club league.
 */
export class League {
  public id: string;
  public name: string;
  public teams: Team[] = [];
  public rounds: Round[] = [];

  /**
   * Creates a new League instance.
   * @param {string} id - The id of the league
   * @param {string} name - The name of the league.
   * @param {string[]} teamIDs - an array of team IDs.
   */
  constructor(id: string, name: string, teamIDs: string[]) {
    this.id = id;
    this.name = name;
    this.teams = this.fetchLeagueTeams(teamIDs);
  }

  /**
   * gets League ID
   * @returns {string} League ID
   */
  getID(): string {
    return this.id;
  }

  /**
   * Get the list of teams in the league.
   * @returns {Team[]} an array of teams in the league.
   */
  private fetchLeagueTeams(teamIDs: string[]): Team[] {
    // prepare array of teams
    const leagueTeams: Team[] = [];

    // for each teamID, fetch, transform to team object and save to array
    teamIDs.forEach((id) => {
      fetch(`http://localhost:3000/teams?id=${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          const teamData: Team = data[0];
          const teamObject = new Team(
            teamData.id,
            teamData.name,
            teamData.gamesPlayed,
            teamData.totalPoints,
          );
          leagueTeams.push(teamObject);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    });

    // return array
    return leagueTeams;
  }

  /**
   * Add a round to the current league.
   * @param {Round} round - the round object.
   */
  addRound(round: Round) {
    this.rounds.push(round);
  }

  /**
   * Get the list of rounds in the league.
   * @returns {Round[]} an array of rounds in the league.
   */
  getLeagueRounds(): Round[] {
    return this.rounds;
  }
}
