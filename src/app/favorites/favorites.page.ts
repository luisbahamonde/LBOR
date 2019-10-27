import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.page.html',
    styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

    tipoFavorito: any = 'emp';

    constructor() {
    }

    ngOnInit() {
    }

}
