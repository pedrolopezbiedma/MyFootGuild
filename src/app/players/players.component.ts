import { Component, OnInit } from "@angular/core";
import { PlayersService } from "./services/players.service";
import { BehaviorSubject, tap } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";

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
      console.log("Players are -->", players);
      if (players.length > 0) {
        this.isLoadingSubject.next(false);
      }
    })
  );

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private playersService: PlayersService
  ) {}

  ngOnInit(): void {
    this.playersService.getPlayers();
  }

  addNewPlayer(): void {
    this.router.navigate(["new"], { relativeTo: this.route });
  }
}
