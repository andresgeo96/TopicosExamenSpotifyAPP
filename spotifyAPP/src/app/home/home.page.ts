import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

declare var cordova: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  result = {};

  constructor(public navCtrl: NavController) {}
  authWithSpotify() {
    const config = {
      clientId: "4ed2e941a9cd486887cb760577dc94fc",
      redirectUrl: "devdacticspotify://callback",
      scopes: ["streaming", "playlist-read-private", "user-read-email", "user-read-private"],
      tokenExchangeUrl: "https://spotifyapp1996.herokuapp.com/exchange",
      tokenRefreshUrl: "https://spotifyapp1996.herokuapp.com/refresh",
    };
 
    cordova.plugins.spotifyAuth.authorize(config)
      .then(({ accessToken, encryptedRefreshToken, expiresAt }) => {
        this.result = { access_token: accessToken, expires_in: expiresAt, ref: encryptedRefreshToken };
      });
  }

}
