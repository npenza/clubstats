import { Match } from "./Match";
import { v4 as uuidv4 } from "uuid";

/**
 * Represents a Round.
 */
export class Round {
  private id: string;
  public roundNumber: number;
  public matches: Match[] = [];

  /**
   * Creates a new Round instance.
   * @param {number} roundNumber - Round number.
   */
  constructor(roundNumber: number) {
    this.id = uuidv4();
    this.roundNumber = roundNumber;
  }

  /**
   * gets Round ID
   * @returns {string} Round ID
   */
  getID(): string {
    return this.id;
  }

  /**
   * Add a match to the round.
   * @param {Match} match - the match object.
   */
  addMatch(match: Match) {
    this.matches.push(match);
  }
}
