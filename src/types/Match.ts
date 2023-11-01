import { Team } from "./Team";

/**
 * Represents a match.
 */
export class Match {
  public id: string;
  public date: number;
  public location: string;
  public homeTeam: Team;
  public awayTeam: Team;
  public homeScore: number;
  public awayScore: number;
  public winningTeam: Team | null;

  /**
   * Creates a new match instance.
   * @param {string} id - The id of the match
   * @param {Date} date - The date of the match
   * @param {string} location - The location of the match.
   * @param {Team} homeTeam - Home team.
   * @param {Team} awayTeam - Away team.
   */
  constructor(
    id: string,
    date: number,
    location: string,
    homeTeam: Team,
    awayTeam: Team,
  ) {
    this.id = id;
    this.date = date;
    this.location = location;
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.homeScore = 0;
    this.awayScore = 0;
    this.winningTeam = null;
  }

  /**
   * gets Match ID
   * @returns {string} match ID
   */
  getID(): string {
    return this.id;
  }

  /**
   * Update the score for the home team.
   * @param {number} increment - number of total points you wish to add/subtract.
   */
  updateHomeScore(increment: number) {
    this.homeScore += increment;
  }

  /**
   * Update the score for the away team.
   * @param {number} increment - number of total points you wish to add/subtract.
   */
  updateAwayScore(increment: number) {
    this.awayScore += increment;
  }
}
