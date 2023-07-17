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
    firstName: string;
    lastName: string;
  }): string {
    let error = "";
    if (this.playerDoExist(newPlayer.firstName, newPlayer.lastName)) {
      error = "This player already exists";
    } else {
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

    return error;
  }

  private playerDoExist(firstName: string, lastName: string): boolean {
    return (
      this.playersStore.findIndex((player: Player) => {
        return (
          player.firstName.toLowerCase() === firstName.toLowerCase() &&
          player.lastName.toLowerCase() === lastName.toLowerCase()
        );
      }) !== -1
    );
  }

  private loadPlayers(): void {
    this.playersStore = [
      new Player(0, "", "Pedro", "Lopez Biedma", []),
      new Player(1, "", "Juanma", "Lopez Torralba", []),
      new Player(2, "", "Jorge", "Arroyo", []),
    ];
  }
}
