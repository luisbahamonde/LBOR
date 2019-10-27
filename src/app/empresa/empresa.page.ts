import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector: 'app-empresa',
    templateUrl: './empresa.page.html',
    styleUrls: ['./empresa.page.scss'],
})
export class EmpresaPage implements OnInit {

    idEmpresa: any;

    constructor(
        private route: ActivatedRoute,
    ) {
        this.idEmpresa = this.route.snapshot.paramMap.get('id');
    }

    ngOnInit() {
    }

}
