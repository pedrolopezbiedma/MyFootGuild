// Angular Core imports
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';

// Own imports
import { MatchesService } from '../services/matches.service';

@Component({
	selector: 'app-match-list',
	templateUrl: './match-list.component.html',
	styleUrls: ['./match-list.component.css'],
})
export class MatchListComponent implements OnInit {
	public matchesLoading$ = this.matchesService.matchesLoading$.pipe(
		tap((matchesLoading) => console.log('Matches Loading is -->', matchesLoading)),
	);
	public matches$ = this.matchesService.matches$.pipe(tap((matches) => console.log('Matches are -->', matches)));
	constructor(private matchesService: MatchesService) {}

	ngOnInit(): void {
		this.matchesService.getMatches();
	}
}
