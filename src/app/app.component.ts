import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('home', { static: true }) homeElement!: ElementRef<HTMLElement>;
  @ViewChild('skills', { static: true }) skillsElement!: ElementRef<HTMLElement>;
  @ViewChild('work', { static: true }) workElement!: ElementRef<HTMLElement>;
  @ViewChild('contact', { static: true }) contactElement!: ElementRef<HTMLElement>;

  title = 'portfolio';

  scrollTo(val: string){
    switch(val){
      case 'home':{
        this.homeElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      }
      case 'skills':{
        this.skillsElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      }
      case 'work':{
        this.workElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      }
      case 'contact':{
        this.contactElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      }
    }
    
  }
}
