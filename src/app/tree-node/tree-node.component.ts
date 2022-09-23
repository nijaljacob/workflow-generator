import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Node } from '../models/node.model';
import { DropHandlerService } from '../services/drop-handler.service';

@Component({
  selector: 'tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent{

  constructor(private dropHandler: DropHandlerService) { }

  @Input() list: any;
  @Output() listUpdated = new EventEmitter<boolean>();

  onDrop(event: any, index: number) {
    this.dropHandler.onDrop(event, index, this.list);
    this.listUpdated.emit(true);
  }
}
