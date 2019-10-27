import {Component, OnInit} from '@angular/core';
import {LoadingController, ToastController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {HTTP} from '@ionic-native/http/ngx';

import { Keyboard } from '@ionic-native/keyboard/ngx';

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
        private loadCtrl: LoadingController,
        public toastController: ToastController,
        private http: HttpClient,
        private httpn: HTTP,
        private keyboard: Keyboard
    ) {

    }

    ngOnInit() {
    }


    /**
     * Resetea los itmes
     *
     */
    buscar(ev: any) {

        const val = ev.target.value;
        this.keyboard.hide();
        this.getItems(val);
    }

    async presentToast(ms) {
        const toast = await this.toastController.create({
            message: ms,
            duration: 2000
        });
        toast.present();
    }

    /**
     * Elimina las variables
     */
    deleteItems(){
        this.personas = null;
        this.empresas = null;
    }


    /**
     * Devuelve los items filtrados
     *
     */
    async getItems(val) {


        // const val = ev.target.value;

        const loading = await this.loadCtrl.create({
            translucent: false,
        });

        loading.present();

        this.httpn.get('https://librebor.me/borme/api/v1/empresa/search/?q=' + encodeURIComponent(val), {}, {})
            .then(data => {
                this.empresas = JSON.parse(data.data);
                loading.dismiss();
            })
            .catch(error => {
                loading.dismiss();
                this.presentToast(error.status);
            });

        this.httpn.get('https://librebor.me/borme/api/v1/persona/search/?q=' + encodeURIComponent(val), {}, {})
            .then(data => {
                this.personas = JSON.parse(data.data);
                loading.dismiss();
            })
            .catch(error => {
                this.presentToast(error.status);
                loading.dismiss();
            });
    }

}
