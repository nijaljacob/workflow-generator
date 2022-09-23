import { Component, Input, OnInit } from '@angular/core';
import { Node } from '../models/node.model';
import { DropHandlerService } from '../services/drop-handler.service';

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  constructor(private dropHandler: DropHandlerService) {}

  list: any

  ngOnInit() {
    this.list = JSON.parse(localStorage.getItem('workflowList') || '[]') || [];
  }

  onDrop(event: any, index: number) {
    this.dropHandler.onDrop(event, index, this.list);
    this.onListChange(true);
  }

  onListChange(event: boolean) {
    localStorage.setItem('workflowList', JSON.stringify(this.list));
  }
}
