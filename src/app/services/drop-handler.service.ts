import { Injectable } from '@angular/core';
import { Node } from '../models/node.model';

@Injectable({
  providedIn: 'root'
})
export class DropHandlerService {

  constructor() { }

  onDrop(event: any, index: number, list: any) {
    if (event.data === "Send Email") {
      list.splice(index + 1, 0, new Node('Send Email', 'singleFlow', 'fa-envelope', '--blue'))
    } else if (event.data === "Send SMS") {
      list.splice(index + 1, 0, new Node('Send SMS', 'singleFlow', 'fa-envelope', '--green'))
    } else if (event.data === "If Else") {
      const arrayLeft = list.slice(index + 1, list.length);
      const leftArray = [new Node('Yes', 'splitFlow', '', 'workflow_card--yes'), ...arrayLeft]
      list.splice(index + 1, list.length - index, {
        ...new Node('Condition Yes/No?', 'singleFlow', 'fa-clock', '--grey'),
        "right": [new Node('No', 'splitFlow', '', 'workflow_card--no')],
        'left': leftArray
      })
    }
  }
}
