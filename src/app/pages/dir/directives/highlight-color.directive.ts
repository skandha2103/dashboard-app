import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightColor]'
})
export class HighlightColorDirective {

  constructor(private el:ElementRef) { }

  @Input() defaultColor:string = "";
  @Input() appHighlightColor:string="";

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.appHighlightColor || this.defaultColor || 'red')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight("")
  }

  private highlight(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
