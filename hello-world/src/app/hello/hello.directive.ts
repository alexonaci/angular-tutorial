import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective {

  @HostListener('click', ['$event'])
  onClick(btn: HTMLButtonElement) {
    console.log(btn);
  }
}
