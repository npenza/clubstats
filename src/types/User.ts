/**
 * Represents a user.
 */

export class User {
  public id: string;
  public leagueIDs: string[];

  constructor(id: string, leagueIDs: string[]) {
    this.id = id;
    this.leagueIDs = leagueIDs;
  }
}
