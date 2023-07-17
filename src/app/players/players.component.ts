// Angular Core imports
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

// Own Imports
@Component({
  selector: "app-players",
  templateUrl: "./players.component.html",
  styleUrls: ["./players.component.css"],
})
export class PlayersComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  addNewPlayer(): void {
    this.router.navigate(["new"], { relativeTo: this.route });
  }
}
