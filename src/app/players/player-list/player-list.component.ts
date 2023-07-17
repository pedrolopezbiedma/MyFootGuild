// Angular Core Imports
import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, tap } from "rxjs";

// Own Imports
import { PlayersService } from "../services/players.service";
import { Player } from "../models/player.model";

@Component({
  selector: "app-player-list",
  templateUrl: "./player-list.component.html",
  styleUrls: ["./player-list.component.css"],
})
export class PlayerListComponent implements OnInit {
  private isLoadingSubject = new BehaviorSubject<boolean>(true);
  public isLoading$ = this.isLoadingSubject.asObservable();

  public players$ = this.playersService.players$.asObservable().pipe(
    tap((players: Player[]) => {
      console.log("Players are -->", players);
      if (players.length > 0) {
        this.isLoadingSubject.next(false);
      }
    })
  );

  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this.playersService.getPlayers();
  }
}
