import { CurrencyPipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

    constructor(private currencyPipe: CurrencyPipe) {}

    transform(value: number) {
        return this.currencyPipe.transform(value, 'PEN', 'symbol', '1.1-1', 'es-PE');
    }
}