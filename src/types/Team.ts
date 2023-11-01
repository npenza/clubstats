/**
 * Represents a team.
 */
export class Team {
  public id: string;
  public name: string;
  public gamesPlayed: number;
  public totalPoints: number;

  /**
   * Creates a new team instance.
   * @param {string} id - The id of the team.
   * @param {string} name - The name of the team.
   * @param {number} gamesPlayed - The number of games played.
   * @param {number} totalPoints - The number of total points.
   */
  constructor(
    id: string,
    name: string,
    gamesPlayed: number,
    totalPoints: number,
  ) {
    this.id = id;
    this.name = name;
    this.gamesPlayed = gamesPlayed ? gamesPlayed : 0;
    this.totalPoints = totalPoints ? totalPoints : 0;
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
