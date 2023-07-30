// Angular Core Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Own Imports
import { MatchesComponent } from './matches.component';
import { NewMatchComponent } from './new-match/new-match.component';

const routes: Routes = [
	{ path: '', component: MatchesComponent },
	{ path: 'new', component: NewMatchComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MatchesRoutingModule {}
