import config from "../../config";
import { Match } from "./Match";
import { Team } from "./Team";

/**
 * Represents a Round.
 */
export class Round {
  public id: string;
  public roundNumber: number;
  public matches: Match[] = [];

  private async initialize(id: string, roundNumber: number , matchIDs: string[]) {
    this.id = id;
    this.roundNumber = roundNumber;
    this.matches = await this.fetchRoundMatches(matchIDs);
  }

  // Create a static factory method to create League instances
  static async create(id: string, roundNumber: number , matchIDs: string[]) {
    const round = new Round();
    await round.initialize(id, roundNumber, matchIDs);
    return round;
  }

  private async fetchRoundMatches(matchIDs: string[]): Promise<Match[]> {
    const matchPromises: Promise<Match>[] = matchIDs.map(async (id) => {
      const response = await fetch(config.API_URL + "/matches?id=" + id);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const matchData: Match = data[0];

      return new Match(
        matchData.id,
        matchData.date,
        matchData.location,
        await Team.create(matchData.homeTeamID),
        await Team.create(matchData.awayTeamID),
      );
    });

    try {
      const matches = await Promise.all(matchPromises);
      return matches;
    } catch (error) {
      console.error("Fetch error:", error);
      return [];
    }
  }

  /**
   * Add a match to the round.
   * @param {Match} match - the match object.
   */
  addMatch(match: Match) {
    this.matches.push(match);
  }
}
