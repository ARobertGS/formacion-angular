import { TypeLinkEnum } from "../enums/typeLink.enum";

export interface LinkUI {
    text: string;
    href: string;
    className: string;
    type?: TypeLinkEnum;
}
