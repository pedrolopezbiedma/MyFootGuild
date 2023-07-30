// Angular Core imports
import { Injectable } from '@angular/core';
import { Match } from '../models/match.model';
import { BehaviorSubject } from 'rxjs';

// Own Imports

@Injectable({ providedIn: 'root' })
export class MatchesService {
	private matchesStore: Match[] = [];

	public matches$: BehaviorSubject<Match[]> = new BehaviorSubject(this.matchesStore);
	public matchesLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

	getMatches(): void {
		this.updateLoadingStatus(true);
		if (this.matchesStore.length === 0) {
			this.loadMatches();
		}
		this.updateLoadingStatus(true);
		this.matches$.next(this.matchesStore);
	}

	private updateLoadingStatus(isLoading: boolean): void {
		this.matchesLoading$.next(isLoading);
	}

	private loadMatches(): void {
		const today = new Date();
		const tomorrow = new Date(today);
		tomorrow.setDate(today.getDate() + 1);

		this.matchesStore = [new Match('1', today, [], []), new Match('2', tomorrow, [], [])];
	}
}
