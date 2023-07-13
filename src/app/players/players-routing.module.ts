// Angular Core Imports
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Own Imports
import { PlayersComponent } from "./players.component";

const routes: Routes = [{ path: "", component: PlayersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayersRoutingModule {}
