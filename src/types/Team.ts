import config from "../../config";

/**
 * Represents a team.
 */

interface TeamPromiseObject {
  id: string;
  name: string;
  teamImg: string;
  gamesPlayed: number;
  totalPoints: number;
}

export class Team {
  public id: string;
  public name: string;
  public teamImg: string;
  public gamesPlayed: number;
  public totalPoints: number;

  private async initialize(id: string) {
    const teamData: TeamPromiseObject = await this.fetchTeamData(id);
    this.id = id;
    this.name = teamData.name;
    this.teamImg = teamData.teamImg;
    this.gamesPlayed = teamData.gamesPlayed || 0;
    this.totalPoints = teamData.totalPoints || 0;
  }

  // Create a static factory method to create Team instances
  static async create(id: string) {
    const team = new Team();
    await team.initialize(id);
    return team;
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

  private async fetchTeamData(id: string): Promise<TeamPromiseObject> {
    const response = await fetch(config.API_URL + "/teams?id=" + id);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const teamData: TeamPromiseObject = data[0];

    return teamData;
  }
}
