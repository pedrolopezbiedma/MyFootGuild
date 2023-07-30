// Angular Core Imports
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Own Imports
import { MatchesRoutingModule } from "./matches-routing.module";
import { MatchesComponent } from "./matches.component";
import { MatchListComponent } from "./match-list/match-list.component";

@NgModule({
  imports: [MatchesRoutingModule, CommonModule],
  declarations: [MatchesComponent, MatchListComponent],
})
export class MatchesModule {}
