import { MatchPerformance } from "./match-performance.model";

export class Match {
  constructor(
    public matchId: string,
    public date: Date,
    public localTeam: MatchPerformance[],
    public awayTeam: MatchPerformance[]
  ) {}
}
