// Angular Core Imports
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Own Imports
import { MatchesComponent } from "./matches.component";

const routes: Routes = [{ path: "", component: MatchesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchesRoutingModule {}
