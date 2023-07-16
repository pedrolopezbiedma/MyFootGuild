// Angular Core imports
import { NgModule } from "@angular/core";

// Own Imports
import { PlayersRoutingModule } from "./players-routing.module";
import { PlayersComponent } from "./players.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [PlayersRoutingModule, CommonModule],
  declarations: [PlayersComponent],
})
export class PlayersModule {}
