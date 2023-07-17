// Angular Core imports
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

// Own Imports
import { PlayersRoutingModule } from "./players-routing.module";
import { PlayersComponent } from "./players.component";
import { NewPlayerComponent } from "./new-player/new-player.component";
import { PlayerListComponent } from "./player-list/player-list.component";

@NgModule({
  imports: [PlayersRoutingModule, CommonModule, ReactiveFormsModule],
  declarations: [PlayersComponent, NewPlayerComponent, PlayerListComponent],
})
export class PlayersModule {}
