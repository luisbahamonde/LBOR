import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector: 'app-persona',
    templateUrl: './persona.page.html',
    styleUrls: ['./persona.page.scss'],
})
export class PersonaPage implements OnInit {

    idPersona: any;

    constructor(
        private route: ActivatedRoute,
    ) {
        this.idPersona = this.route.snapshot.paramMap.get('id');
    }

    ngOnInit() {
    }

}
