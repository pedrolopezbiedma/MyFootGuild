export class Player {
  constructor(
    public playerId: number,
    public avatarUrl: string,
    public firstName: string,
    public lastName: string,
    public matches: any[] // To be updated to matches
  ) {}

  get numMatches(): number {
    return this.matches.length;
  }

  get points(): number {
    return 10; // Calculate points
  }

  get goals(): number {
    return 5; // Calculate goals
  }

  get assists(): number {
    return 4; // Calculate assists
  }

  get victoryRate(): number {
    return 50; // Calcualte victory rate
  }
}
