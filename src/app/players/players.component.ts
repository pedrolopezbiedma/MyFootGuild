import { Component, OnInit } from "@angular/core";
import { PlayersService } from "./services/players.service";
import { BehaviorSubject, map, startWith, tap } from "rxjs";
import { Player } from "./models/player.model";

@Component({
  selector: "app-players",
  templateUrl: "./players.component.html",
  styleUrls: ["./players.component.css"],
})
export class PlayersComponent implements OnInit {
  private isLoadingSubject = new BehaviorSubject<boolean>(true);
  public isLoading$ = this.isLoadingSubject.asObservable();

  public players$ = this.playersService.players$.asObservable().pipe(
    tap((players) => {
      if (players.length > 0) {
        this.isLoadingSubject.next(false);
      }
    })
  );

  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this.playersService.getPlayers();
  }

  addNewPlayer(): void {
    this.playersService.addPlayer(
      new Player(2, "Pedro Javier", "Tocayo", 10, 30, 99, 99)
    );
  }
}
