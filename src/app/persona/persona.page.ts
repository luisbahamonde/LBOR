import {Component, OnInit} from '@angular/core';
import {LoadingController} from '@ionic/angular';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
    selector: 'app-persona',
    templateUrl: './persona.page.html',
    styleUrls: ['./persona.page.scss'],
})
export class PersonaPage implements OnInit {

    idPersona: any;
    data: any;
    persona: any;

    constructor(
        private route: ActivatedRoute,
        private loadCtrl: LoadingController,
        private httpn: HTTP,
    ) {
        this.idPersona = this.route.snapshot.paramMap.get('id');
    }

    ngOnInit() {
    }


    ionViewDidEnter() {

        this.getData();
    }


    async getData() {

        const loading = await this.loadCtrl.create({
            translucent: false,
        });

        loading.present();

        this.httpn.get('https://librebor.me/borme/api/v1/persona/' + this.idPersona, {}, {})
            .then(data => {

                this.data = data.data;
                this.persona = JSON.parse(data.data);
                loading.dismiss();
            })
            .catch(error => {
                loading.dismiss();
            });
    }
}
