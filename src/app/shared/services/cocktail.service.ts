import { Injectable } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  public cocktails$: BehaviorSubject<Cocktail[]> = new BehaviorSubject([]);

  public getCocktail(index: number) {
    const cocktails = this.cocktails$.value;
    if (cocktails) {
      return cocktails[index];
    } else {
      return null;
    }
  }

  public addCocktail(cocktail: Cocktail): void {
    const value = this.cocktails$.value;
    this.cocktails$.next([...value, cocktail]);
  }

  public editCocktail(editedCocktail: Cocktail): void {
    const value = this.cocktails$.value;
    this.cocktails$.next(
      value.map((cocktail: Cocktail) => {
        if (cocktail.name === editedCocktail.name) {
          return editedCocktail;
        } else {
          return cocktail;
        }
      })
    );
  }

  public fetchCocktails(): Observable<Cocktail[]> {
    return this.http.get('https://restapi.fr/api/cocktails').pipe(
      tap((cocktails: Cocktail[]) => {
        this.cocktails$.next(cocktails);
      })
    );
  }

  constructor(private http: HttpClient) {
    //this.seed();
  }

  // public seed() {
  //   this.http
  //     .post('https://restapi.fr/api/coktails', {
  //       name: 'Mojito',
  //       img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mojito-cocktails-150961e.jpg?quality=90&webp=true&resize=375,341',
  //       description:
  //         'Mix this classic cocktail for a party using fresh mint, white rum, sugar, zesty lime and cooling soda water. Play with the quantities to suit your taste.',
  //       ingredients: [
  //         {
  //           name: 'Perrier',
  //           quantity: 1,
  //         },
  //         {
  //           name: 'citron',
  //           quantity: 2,
  //         },
  //         {
  //           name: 'white rum',
  //           quantity: 1,
  //         },
  //       ],
  //     })
  //     .subscribe();

  //   this.http
  //     .post('https://restapi.fr/api/coktails', {
  //       name: 'mocktail',
  //       img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/pomegranate-eb5788c.jpg?quality=90&webp=true&resize=375,341',
  //       description:
  //         'Non-alcoholic cocktails can still be packed with plenty of cheer. This spin on the mint-and-lime classic contains delicious pomegranate seeds and juice',
  //       ingredients: [
  //         {
  //           name: 'pomegranate',
  //           quantity: 3,
  //         },
  //         {
  //           name: 'citron',
  //           quantity: 1,
  //         },
  //         {
  //           name: 'mint',
  //           quantity: 1,
  //         },
  //       ],
  //     })
  //     .subscribe();

  //   this.http
  //     .post('https://restapi.fr/api/coktails', {
  //       name: 'Sex on the beach cocktail',
  //       img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/sex_on_the_beach-621ae6e.jpg?quality=90&webp=true&resize=375,341',
  //       description:
  //         'Combine vodka with peach schnapps and cranberry juice to make a classic sex on the beach cocktail. Garnish with cocktail cherries and orange slices',
  //       ingredients: [
  //         {
  //           name: 'cherries',
  //           quantity: 5,
  //         },
  //         {
  //           name: 'Orange slice',
  //           quantity: 3,
  //         },
  //         {
  //           name: 'vodka',
  //           quantity: 1,
  //         },
  //       ],
  //     })
  //     .subscribe();
  // }
}
