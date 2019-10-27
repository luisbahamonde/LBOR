import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HTTP} from '@ionic-native/http/ngx';


@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

    tipoBusqueda: any = 'all';
    bucadorInput: any;
    empresas: any;
    personas: any;
    datos: any;

    constructor(
        private http: HttpClient,
        private httpn: HTTP,
    ) {

    }

    ngOnInit() {
    }


    /**
     * Resetea los itmes
     *
     */
    onCancel(ev: any) {


    }


    /**
     * Devuelve los items filtrados
     *
     */
    getItems(ev: any) {


        const val = ev.target.value;

        this.httpn.get('https://librebor.me/borme/api/v1/empresa/search/?q=' + encodeURIComponent(val), {}, {})
            .then(data => {
                this.empresas = JSON.parse(data.data);
            });

        this.httpn.get('https://librebor.me/borme/api/v1/persona/search/?q=' + encodeURIComponent(val), {}, {})
            .then(data => {
                this.personas = JSON.parse(data.data);
            });
    }

}
