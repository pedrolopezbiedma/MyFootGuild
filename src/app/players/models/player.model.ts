export class Player {
  constructor(
    public playerId: number,
    public avatarUrl: string,
    public name: string,
    public alias: string,
    public playedMatchesIds: string[]
  ) {}
}
