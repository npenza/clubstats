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

  private async initialize(id: string, name: string, matchIDs: string[]) {
    this.id = id;
    this.name = name;
    this.matches = await this.fetchRoundMatches(matchIDs);
  }

  // Create a static factory method to create League instances
  static async create(id: string, name: string, matchIDs: string[]) {
    const round = new Round();
    await round.initialize(id, name, matchIDs);
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
        // TODO: Change team to factory pattern and fetch team from IDs provided in the API
        new Team("test1", "test1", 0, 2),
        new Team("test2", "test2", 3, 2),
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
