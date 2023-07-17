// Angular Core Imports
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Own Imports
import { NewPlayerComponent } from "./new-player/new-player.component";
import { PlayersComponent } from "./players.component";

const routes: Routes = [
  { path: "", component: PlayersComponent },
  { path: "new", component: NewPlayerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayersRoutingModule {}
