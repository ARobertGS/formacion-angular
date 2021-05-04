import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

    constructor(private datePipe: DatePipe){}

    transform(value: Date) {
        return this.datePipe.transform(value, 'fullDate', 'UTC-5', 'es-PE');
    }
}