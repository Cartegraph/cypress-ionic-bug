import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-app>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'min';

  ngOnInit() {
    console.log('init!');
  }
}
