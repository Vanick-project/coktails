import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Cocktail } from 'src/app/shared/interfaces/cocktail.interface';
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent implements OnInit {
  //@Input() public cocktail: Cocktail;
  public cocktail: Cocktail;

  //constructor(private panierService: PanierService) {}
  constructor(
    private panierService: PanierService,
    private cocktailService: CocktailService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.cocktail = this.cocktailService.getCocktail(+paramMap.get('index')); // le + permet de transformer le string en number
    });
  }

  public addToPanier(): void {
    this.panierService.addToPanier(this.cocktail.ingredients);
  }
}
