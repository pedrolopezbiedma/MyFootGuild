// Angular Core imports
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-matches',
	templateUrl: './matches.component.html',
	styleUrls: ['./matches.component.css'],
})
export class MatchesComponent {
	constructor(
		private router: Router,
		private route: ActivatedRoute,
	) {}

	onCreateNewMatch(): void {
		this.router.navigate(['new'], { relativeTo: this.route });
	}
}
