import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[swcForLoop]"
})
export class ForLoopDirective {
  constructor(el: ElementRef) {}
}
