// Angular Core Imports
import { NgModule } from "@angular/core";

// Own Imports
import { MatchesRoutingModule } from "./matches-routing.module";
import { MatchesComponent } from "./matches.component";

@NgModule({
  imports: [MatchesRoutingModule],
  declarations: [MatchesComponent],
})
export class MatchesModule {}
