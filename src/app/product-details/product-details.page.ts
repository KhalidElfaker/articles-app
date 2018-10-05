import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.page.html',
	styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

	constructor(public alertController: AlertController) { }

	ngOnInit() {
	}

	async openDeleteAlertConfirm() {
		const alert = await this.alertController.create({
			header: 'Confirm!',
			message: 'Message <strong>text</strong>!!!',
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					cssClass: 'secondary',
					handler: (blah) => {
						console.log('Confirm Cancel: blah');
					}
				},
				{
					text: 'Okay',
					handler: () => {
						console.log('Confirm Okay');
					}
				}
			]
		});

		await alert.present();
	}

}
