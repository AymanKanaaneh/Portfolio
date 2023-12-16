import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  
  @ViewChild('home', { static: true }) homeElement!: ElementRef<HTMLElement>;
  @ViewChild('skills', { static: true }) skillsElement!: ElementRef<HTMLElement>;
  @ViewChild('work', { static: true }) workElement!: ElementRef<HTMLElement>;
  @ViewChild('contact', { static: true }) contactElement!: ElementRef<HTMLElement>;

  constructor(private router: Router) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) { this.scrollTo(ev.url)}
    });
  }

  scrollTo(val: string){
    switch(val){
      case '/#home':{
        this.homeElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      }
      case '/#skills':{
        this.skillsElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      }
      case '/#work':{
        this.workElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      }
      case '/#contact':{
        this.contactElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      }
    }
  }
}
