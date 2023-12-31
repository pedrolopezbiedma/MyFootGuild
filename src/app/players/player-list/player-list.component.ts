// Angular Core Imports
import { Component, OnInit } from "@angular/core";
import { tap } from "rxjs";

// Own Imports
import { PlayersService } from "../services/players.service";
import { Player } from "../models/player.model";

@Component({
  selector: "app-player-list",
  templateUrl: "./player-list.component.html",
  styleUrls: ["./player-list.component.css"],
})
export class PlayerListComponent implements OnInit {
  public loadingPlayers$ = this.playersService.loadingPlayers$.pipe(
    tap((value) => console.log("Loading is -->", value))
  );
  public players$ = this.playersService.players$.pipe(
    tap((players: Player[]) => {
      console.log("Players are -->", players);
    })
  );

  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this.playersService.getPlayers();
  }
}
