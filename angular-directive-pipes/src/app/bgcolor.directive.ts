import { Directive ,ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BgcolorDirective {

  constructor(private el: ElementRef) { }

  @Input('appBackground') appBackground: string;
  @Input("bgColor") bgColor:string
  @Input("textColor") textColor:string

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.bgColor || "red",this.textColor || "black");
    this.el.nativeElement.style.fontWeight = 'bold'
  }
  @HostListener('mouseout') onMouseOut(){
    this.highlight('green','black');
    this.el.nativeElement.style.fontWeight = null
  }
  private highlight(color: string,textColor: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.color = textColor;
  
  }
}