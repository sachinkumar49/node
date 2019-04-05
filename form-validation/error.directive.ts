import { Directive, ElementRef,Renderer2,Inject,OnInit, HostListener,Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormErrorInfoService } from './form-error-info.service'

@Directive({
  selector: '[error]'
})
export class ErrorDirective implements OnInit {
  @Input("error") validation; 
  constructor(private elementRef: ElementRef, private renderer: Renderer2, @Inject(DOCUMENT) private document,private formError : FormErrorInfoService) { }
   ngOnInit(){
   }
   @HostListener('blur') onMouseEnter() {
     console.log(this.validation);
     debugger
     if(this.validation.errors){
      const child = this.document.createElement('span');
      child.className= "error";
      let priviousElement = this.elementRef.nativeElement.previousSibling.textContent;
      let parent = this.renderer.parentNode(this.elementRef.nativeElement);
      child.innerHTML =  this.formError.getFieldError(this.validation.errors,priviousElement);
      this.renderer.appendChild(parent, child);
     }
    
  }
}
