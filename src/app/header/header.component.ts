import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  blogClicked = false;
  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
    this.blogClicked = true;
  }


  navItemClick(event: HTMLAnchorElement): void {
    this.router.navigate(['/']);
    event.focus();
    this.blogClicked = false;
  }

}
