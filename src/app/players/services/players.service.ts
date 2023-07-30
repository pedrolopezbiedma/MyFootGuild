// Angular Core imports
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

// Own Imports
import { Player } from "../models/player.model";

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
    name: string;
    alias: string;
  }): string {
    let error = "";
    if (this.playerDoExist(newPlayer.name)) {
      error = "This player already exists";
    } else {
      this.playersStore = [
        ...this.playersStore,
        new Player(
          this.playersStore.length,
          newPlayer.avatarUrl,
          newPlayer.name,
          newPlayer.alias,
          []
        ),
      ];
      this.players$.next(this.playersStore);
    }

    return error;
  }

  private playerDoExist(name: string): boolean {
    return (
      this.playersStore.findIndex((player: Player) => {
        return (
          player.name.toLowerCase() === name.toLowerCase() &&
          player.name.toLowerCase() === name.toLowerCase()
        );
      }) !== -1
    );
  }

  private loadPlayers(): void {
    this.playersStore = [
      new Player(0, "url1", "Pedro Lopez Biedma", "Pedro Lopez Biedma", []),
      new Player(
        1,
        "url2",
        "Juanma Lopez Torralba",
        "Juanma Lopez Torralba",
        []
      ),
      new Player(2, "url3", "Jorge Arroyo", "Jorge Arroyo", []),
    ];
  }
}
