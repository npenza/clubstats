import { Team } from "./Team";
import { Round } from "./Round";
import { v4 as uuidv4 } from "uuid";

/**
 * Represents a club league.
 */
export class League {
  private id: string;
  public name: string;
  public teams: Team[] = [];
  public rounds: Round[] = [];

  /**
   * Creates a new League instance.
   * @param {string} name - The name of the league.
   * @param {Team[]} teams - (Optional) List of teams included in the league.
   */
  constructor(name: string, teams?: Team[]) {
    this.id = uuidv4();
    this.name = name;
    this.teams = teams || [];
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
  getLeagueTeams(): Team[] {
    return this.teams;
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
