import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'techbench-hackathon-v4';

  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    console.log('hey');
    
    if (window.pageYOffset > 500) {
      let element = document.getElementById('header');
      element.classList.add('sticky');
    } else {
      let element = document.getElementById('header');
      element.classList.remove('sticky');
    }
  }
}
