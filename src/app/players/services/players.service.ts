import { BehaviorSubject } from "rxjs";
import { Player } from "../models/player.model";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class PlayersService {
  private playersStore: Player[] = [];
  players$: BehaviorSubject<Player[]> = new BehaviorSubject(this.playersStore);

  getPlayers(): void {
    if (this.playersStore.length === 0) {
      this.loadPlayers();
    }
    this.players$.next(this.playersStore);
  }

  addPlayer(newPlayer: Player): void {
    const updatedPlayers: Player[] = [...this.playersStore, newPlayer];
    this.players$.next(updatedPlayers);
  }

  private loadPlayers(): void {
    this.playersStore = [
      new Player(0, "Pedro", "Lopez Biedma", 0, 0, 0, 0),
      new Player(1, "Juanma", "Lopez Torralba", 1, 3, 10, 10),
      new Player(2, "Jorge", "Arroyo", 10, 30, 99, 99),
    ];
  }
}
