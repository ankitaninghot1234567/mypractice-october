import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]'
})
export class NumberOnlyDirective {

  constructor(private eleRef: ElementRef) { }
  @HostListener('input',['$event'])acceptNumOnly(event:any){
    // console.log('dir..',event.target.value);
    this.eleRef.nativeElement.value=event.target.value.replace(/[^0-9]*/g,'')
    
  }

}
