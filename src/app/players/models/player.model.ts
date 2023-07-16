export class Player {
  constructor(
    public playerId: number,
    public firstName: string,
    public lastName: string,
    public numMatches: number,
    public points: number,
    public goals: number,
    public assists: number
  ) {}

  get victoryRate(): number {
    return 100; // To be done, how to calculate this.
  }
}
