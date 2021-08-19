import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighLight]'
})
export class BetterHighLightDirective implements OnInit {
  @HostBinding('style.color') colorText: string = 'black';
  constructor(
    private eleRef: ElementRef,
    private renderer: Renderer2
  ) {
  }

  ngOnInit() {
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'grey');
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.eleRef.nativeElement,'color', 'white');
    this.colorText = 'blue';

  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    // this.renderer.setStyle(this.eleRef.nativeElement,'color', 'black');
    this.colorText = 'black';
  }
}
