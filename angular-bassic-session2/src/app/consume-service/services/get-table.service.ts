import { Injectable } from "@angular/core";
import { TableUI } from "../models/table.ui";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { TableResponse } from "../models/table.response";
import { Observable } from "rxjs";


@Injectable()
export class GetTableService {

    constructor(private http: HttpClient) {}

    getTableFromApi(): Observable<TableUI[]> {
        const url: string = 'http://localhost:5000/api/table';
        return this.http.get<TableResponse[]>(url)
        .pipe(map((response: TableResponse[]) => {

            let tableUIArray : TableUI[] = [];

            tableUIArray = response.map(row => {
                return {
                    id: row.id,
                    firstName: row.first,
                    lastName: row.last,
                    email: row.email,
                    className: row.status === "1" ? "row-active" : "row-inactive",
                    date: new Date(),
                    amount: 26.3658
                }
            })

            return tableUIArray;
        }));

    }

    // getTable(): TableUI[] {
    //     return [
    //         {
    //             id: 1,
    //             firstName: 'Daniel',
    //             lastName: 'Perez',
    //             email: 'rperez@everis.com'
    //         },
    //         {
    //             id: 2,
    //             firstName: 'Carlos',
    //             lastName: 'Diaz',
    //             email: 'cdiaz@everis.com'
    //         },
    //         {
    //             id: 3,
    //             firstName: 'Brenda',
    //             lastName: 'Lopez',
    //             email: 'blopez@everis.com'
    //         }
    //     ];
    // }
}