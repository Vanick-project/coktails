import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cocktail } from '../shared/interfaces/cocktail.interface';
import { CocktailService } from '../shared/services/cocktail.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss'],
})
export class CocktailContainerComponent {
  // public cocktails: Cocktail[] = [];

  public cocktails$: Observable<Cocktail[]> = this.cocktailService.cocktails$;

  // public subscription: Subscription = new Subscription();

  constructor(private cocktailService: CocktailService) {}
  // ngOnDestroy(): void {
  //   //throw new Error('Method not implemented.');
  //   this.subscription.unsubscribe();
  // }
  // ngOnInit(): void {
  //   //throw new Error('Method not implemented.');
  //   this.subscription.add(
  //     this.cocktailService.cocktails$.subscribe((cocktails: Cocktail[]) => {
  //       this.cocktails = cocktails;
  //     })
  //   );
  // }
}
