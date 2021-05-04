import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: 'input[onlyNumber]'
})
export class OnlyNumberDirective {

    constructor(private element: ElementRef) {}

    @HostListener('keypress', ['$event'])
    onKeyPress(event: KeyboardEvent) {
        const currentValue: string = this.element.nativeElement.value;
        const eventKey: string = event.key;
        const textToEvaluate: string = currentValue.concat(eventKey);
        const regulaExpression = new RegExp(/^[0-9]*$/g);
        const isValid: boolean = regulaExpression.test(textToEvaluate);
        return isValid;
    }
}