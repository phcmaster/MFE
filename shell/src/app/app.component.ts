import { Component } from '@angular/core';
import { Event, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showHeader: boolean = true;
  isLoggedIn: boolean = false;

  constructor(router: Router) {
    router.events.subscribe((event: Event) => {
      this.validateAuthentication();
      if (router.url.includes('signin') || router.url.includes('signup')) {
        this.showHeader = false;
      } else {
        this.showHeader = true;
      }
    });
  }

  private validateAuthentication() {
    if (sessionStorage.getItem('userData')) {
      let user = JSON.parse(sessionStorage.getItem('userData') || '{}');
      if (user.attributes.email) {
        this.isLoggedIn = true;
      }
    } else {
      this.isLoggedIn = false;
    }
  }
}
