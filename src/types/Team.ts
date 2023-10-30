import { v4 as uuidv4 } from "uuid";

/**
 * Represents a team.
 */
export class Team {
  private id: string;
  public name: string;
  public gamesPlayed: number;
  public totalPoints: number;

  /**
   * Creates a new team instance.
   * @param {string} name - The name of the team.
   * @param {number} gamesPlayed - The number of games played.
   * @param {number} totalPoints - The number of total points.
   */
  constructor(name: string, gamesPlayed: number, totalPoints: number) {
    this.id = uuidv4();
    this.name = name;
    this.gamesPlayed = gamesPlayed ? gamesPlayed : 0;
    this.totalPoints = totalPoints ? totalPoints : 0;
  }

  /**
   * gets Team ID
   * @returns {string} Team ID
   */
  getID(): string {
    return this.id;
  }

  /**
   * Update the number of games played.
   * @param {number} increment - number of games you wish to add/subtract.
   */
  updateGamesPlayed(increment: number) {
    this.gamesPlayed += increment;
  }

  /**
   * Update the number of total points.
   * @param {number} increment - number of total points you wish to add/subtract.
   */
  updateTotalPoints(increment: number) {
    this.totalPoints += increment;
  }
}
