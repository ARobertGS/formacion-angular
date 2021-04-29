import { Component, OnInit } from "@angular/core";
import { TableUI } from "./models/table.ui";
import { GetTableService } from "./services/get-table.service";

@Component({
    selector: 'ng-consume-service',
    templateUrl: './consume-service.component.html',
    styleUrls: ['./consume-service.component.scss'],
})
export class ConsumeServiceComponent implements OnInit {

    constructor(private getTableService: GetTableService) {}

    tableList: TableUI[] = [];
    ngOnInit() {
        //this.getTable();
        this.getTableFromApi();
    }

    getTableFromApi() {
        this.getTableService.getTableFromApi().subscribe(
            (result: TableUI[]) => {
                this.tableList = result;
                console.log(result);
            },
            (error) => {
                console.log(error);
            },
            () => {
                console.log('Se completo la llamada');
            }
        );
    }

    // getTable() {
    //     this.tableList = this.getTableService.getTable();
    // }
}