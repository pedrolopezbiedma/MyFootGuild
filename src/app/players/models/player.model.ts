export class Player {
  constructor(
    public playerId: number,
    public avatarUrl: string,
    public name: string,
    public alias: string,
    public playedMatchesIds: string[]
  ) {}
}

export class TablePlayer extends Player {
  public numMatches: number;
  public points: number;
  public goals: number;
  public assists: number;
  public victoryRate: number;

  constructor(
    playerId: number,
    avatarUrl: string,
    name: string,
    alias: string,
    playedMatchesIds: string[],
    numMatches: number,
    points: number,
    goals: number,
    assists: number,
    victoryRate: number
  ) {
    super(playerId, avatarUrl, name, alias, playedMatchesIds);
    this.numMatches = numMatches;
    this.points = points;
    this.goals = goals;
    this.assists = assists;
    this.victoryRate = victoryRate;
  }
}
