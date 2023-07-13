import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/players",
    pathMatch: "full",
  },
  {
    path: "players",
    loadChildren: () =>
      import("./players/players.module").then((module) => module.PlayersModule),
  },
  {
    path: "matches",
    loadChildren: () =>
      import("./matches/matches.module").then((module) => module.MatchesModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
