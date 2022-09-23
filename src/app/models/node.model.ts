export class Node {
    name?: string;
    type?: string;
    icon?: string;
    cssClass?: string;
    constructor(name: string, type: string, icon: string, cssClass: string) {
        this.name = name;
        this.type = type;
        this.icon = icon;
        this.cssClass = cssClass;
    }
}
