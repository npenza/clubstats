/**
 * Represents a club league.
 */
export class League {
  private leagueName: string;
  private leagueCode: number;

  /**
   * Creates a new League instance.
   * @param {string} leagueName - The name of the league.
   * @param {number} leagueCode - The code of the league.
   */
  constructor(leagueName: string, leagueCode: number) {
    this.leagueName = leagueName;
    this.leagueCode = leagueCode;
  }

  /**
   * Get the name of the league.
   * @returns {string} The name of the league.
   */
  getLeagueName(): string {
    return this.leagueName;
  }

  /**
   * Set the name of the league.
   * @param {string} leagueName - The new name of the league.
   */
  setLeagueName(leagueName: string): void {
    this.leagueName = leagueName;
  }

  /**
   * Get the code of the league.
   * @returns {number} The code of the league.
   */
  getLeagueCode(): number {
    return this.leagueCode;
  }

  /**
   * Set the code of the league.
   * @param {number} leagueCode - The new code of the league.
   */
  setLeagueCode(leagueCode: number): void {
    this.leagueCode = leagueCode;
  }
}
