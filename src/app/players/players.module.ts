// Angular Core imports
import { NgModule } from "@angular/core";

// Own Imports
import { PlayersRoutingModule } from "./players-routing.module";
import { PlayersComponent } from "./players.component";

@NgModule({
  imports: [PlayersRoutingModule],
  declarations: [PlayersComponent],
})
export class PlayersModule {}
