import { Component, OnInit } from "@angular/core";
import { GetTableService } from "../consume-service/services/get-table.service";
import { TypeLinkEnum } from "./enums/typeLink.enum";
import { LinkUI } from "./models/link.ui";

@Component({
    selector: 'ng-directive',
    templateUrl: './directive.component.html',
    styleUrls: ['./directive.component.scss'],
})
export class DirectiveComponent implements OnInit {

    constructor(private getTableService: GetTableService){}

    typeLinkEnum = TypeLinkEnum;
    linkSwitch: LinkUI;

    linkList: LinkUI[] = [];

    activeClassNameButton: boolean = true;
    classNameButtonString: string = 'btn btn-dark';
    classNameButtonArray: string[] = ['btn', 'btn-dark'];
    classNameButtonObject: {[key: string]: boolean} = {
        'btn': true,
        'btn-dark': true,
        'btn-light': false,
    };

    activeStyleButton: boolean = true;
    styleButton = {
        color: '#fff',
        backgroundColor: '#343a40',
        borderColor: '#343a40',    
        padding: '0.375rem 0.75rem',
        fontSize: '1rem',
        lineHeight: '1.5',
        borderRadius: '0.25rem',
    };

    ngOnInit() {
        this.getLinks();
        this.setLinkSwitch();
    }

    getLinks() {
        this.linkList = [
            {
                text: 'Tour of Heroes',
                href: 'https://angular.io/tutorial',
                className: 'badge badge-primary'
            },
            {
                text: 'CLI Documentation',
                href: 'https://angular.io/cli',
                className: 'badge badge-success'
            },
            {
                text: 'Angular blog',
                href: 'https://blog.angular.io/',
                className: 'badge badge-danger'
            }
        ];
    }

    setLinkSwitch() {
        this.linkSwitch = {
            text: 'switch',
            href: '',
            className: '',
            type: TypeLinkEnum.DANGER,
        };
    }

    changeClassName() {
        this.activeClassNameButton = !this.activeClassNameButton;
        this.classNameButtonString = this.activeClassNameButton ? 'btn btn-dark' : 'btn btn-light';
        this.classNameButtonArray = this.activeClassNameButton ? ['btn', 'btn-dark'] : ['btn', 'btn-light'];
        this.classNameButtonObject = {
            'btn': true,
            'btn-dark': this.activeClassNameButton,
            'btn-light': !this.activeClassNameButton,
        };
    }

    changeStyle() {
        this.activeStyleButton = !this.activeStyleButton;
        this.styleButton = this.activeStyleButton ? {
            color: '#fff',
            backgroundColor: '#343a40',
            borderColor: '#343a40',    
            padding: '0.375rem 0.75rem',
            fontSize: '1rem',
            lineHeight: '1.5',
            borderRadius: '0.25rem',
        }: {
            color: '#212529',
            backgroundColor: '#f8f9fa',
            borderColor: '#f8f9fa',    
            padding: '0.375rem 0.75rem',
            fontSize: '1rem',
            lineHeight: '1.5',
            borderRadius: '0.25rem',
        };
    }
}