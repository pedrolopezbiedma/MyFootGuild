// Angular Core imports
import { NgModule } from "@angular/core";

// Own Imports
import { PlayersRoutingModule } from "./players-routing.module";
import { PlayersComponent } from "./players.component";
import { CommonModule } from "@angular/common";
import { NewPlayerComponent } from "./new-player/new-player.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [PlayersRoutingModule, CommonModule, ReactiveFormsModule],
  declarations: [PlayersComponent, NewPlayerComponent],
})
export class PlayersModule {}
