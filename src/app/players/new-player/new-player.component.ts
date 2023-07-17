// Angular Core Imports
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

// Own Imports
import { PlayersService } from "../services/players.service";

@Component({
  selector: "app-new-player",
  templateUrl: "./new-player.component.html",
  styleUrls: ["./new-player.component.css"],
})
export class NewPlayerComponent implements OnInit {
  newPlayerForm: FormGroup;
  newPlayerError: string;

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
    this.newPlayerError = this.playersService.addPlayer(
      this.newPlayerForm.value
    );
    if (!this.newPlayerError) {
      this.navigateBack();
    }
  }

  private initializeForm(): void {
    this.newPlayerForm = new FormGroup({
      avatarUrl: new FormControl("", [Validators.required]),
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
    });
  }

  private navigateBack(): void {
    this.router.navigate(["../"], { relativeTo: this.route });
  }
}
