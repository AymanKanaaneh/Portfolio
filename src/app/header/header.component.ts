import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit{

  @ViewChild('home', { static: true }) homeElement!: ElementRef<HTMLElement>;
  @Output() scroll = new EventEmitter<string>();
  
  ngAfterViewInit(): void {
    this.homeElement.nativeElement.focus();
  }

  scrollTo(value: string){
    this.scroll.emit(value);
  }

}
