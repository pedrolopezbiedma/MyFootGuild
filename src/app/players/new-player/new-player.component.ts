import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PlayersService } from "../services/players.service";
import { Player } from "../models/player.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-new-player",
  templateUrl: "./new-player.component.html",
  styleUrls: ["./new-player.component.css"],
})
export class NewPlayerComponent implements OnInit {
  newPlayerForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private playersService: PlayersService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  onCancel(): void {
    this.navigateBack();
  }

  onSubmit(): void {
    console.log("Submit detected", this.newPlayerForm.value);
    this.playersService.addPlayer(
      new Player(2, "Pedro Javier", "Tocayo", 10, 30, 99, 99)
    );
    this.navigateBack();
  }

  private initializeForm(): void {
    this.newPlayerForm = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
    });
  }

  private navigateBack(): void {
    this.router.navigate(["../"], { relativeTo: this.route });
  }
}
