import {Component, OnInit} from '@angular/core';
import {LoadingController} from '@ionic/angular';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
    selector: 'app-empresa',
    templateUrl: './empresa.page.html',
    styleUrls: ['./empresa.page.scss'],
})
export class EmpresaPage implements OnInit {

    idEmpresa: any;
    data: any;
    empresa: any;

    constructor(
        private loadCtrl: LoadingController,
        private route: ActivatedRoute,
        private httpn: HTTP,
    ) {
        this.idEmpresa = this.route.snapshot.paramMap.get('id');
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

        this.httpn.get('https://librebor.me/borme/api/v1/empresa/' + this.idEmpresa, {}, {})
            .then(data => {

                this.data = data.data;
                this.empresa = JSON.parse(data.data);
                loading.dismiss();
            })
            .catch(error => {
                loading.dismiss();
            });
    }
}
