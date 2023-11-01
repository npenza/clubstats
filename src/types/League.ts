import { Team } from "./Team";
import { Round } from "./Round";
import config from "../../config";
/**
 * Represents a club league.
 */
export class League {
  public id!: string;
  public name!: string;
  public teams: Team[] = [];
  public rounds: Round[] = [];

  private async initialize(
    id: string,
    name: string,
    teamIDs: string[],
    roundIDs: string[],
  ) {
    this.id = id;
    this.name = name;
    this.teams = await this.fetchLeagueTeams(teamIDs);
    this.rounds = await this.fetchLeagueRounds(roundIDs);
  }

  // Create a static factory method to create League instances
  static async create(
    id: string,
    name: string,
    teamIDs: string[],
    roundIDs: string[],
  ) {
    const league = new League();
    await league.initialize(id, name, teamIDs, roundIDs);
    return league;
  }

  /**
   * Get the list of teams in the league.
   * @returns {Team[]} an array of teams in the league.
   */
  private async fetchLeagueTeams(teamIDs: string[]): Promise<Team[]> {
    const teamPromises: Promise<Team>[] = teamIDs.map(async (id) => {
      const response = await fetch(config.API_URL + "/teams?id=" + id);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const teamData: Team = data[0];
      return new Team(
        teamData.id,
        teamData.name,
        teamData.gamesPlayed,
        teamData.totalPoints,
      );
    });

    try {
      const teams = await Promise.all(teamPromises);
      return teams;
    } catch (error) {
      console.error("Fetch error:", error);
      return [];
    }
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
  private async fetchLeagueRounds(roundIDs: string[]): Promise<Round[]> {
    const roundPromises: Promise<Round>[] = roundIDs.map(async (id) => {
      const response = await fetch(config.API_URL + "/rounds?id=" + id);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const roundData: Round = data[0];
      // TODO: Update below to factory creation
      return await Round.create(
        roundData.id,
        roundData.name,
        roundData.matchIDs,
      );
    });

    try {
      const rounds = await Promise.all(roundPromises);
      return rounds;
    } catch (error) {
      console.error("Fetch error:", error);
      return [];
    }
  }
}
