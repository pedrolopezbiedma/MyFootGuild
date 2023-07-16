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

  addPlayer(newPlayer: {
    avatarUrl: string;
    firstName: string;
    lastName: string;
  }): void {
    this.playersStore = [
      ...this.playersStore,
      new Player(
        this.playersStore.length,
        newPlayer.avatarUrl,
        newPlayer.firstName,
        newPlayer.lastName,
        []
      ),
    ];
    this.players$.next(this.playersStore);
  }

  private loadPlayers(): void {
    this.playersStore = [
      new Player(0, "", "Pedro", "Lopez Biedma", []),
      new Player(1, "", "Juanma", "Lopez Torralba", []),
      new Player(2, "", "Jorge", "Arroyo", []),
    ];
  }
}
