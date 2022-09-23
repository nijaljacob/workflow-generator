import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Node } from '../models/node.model';

@Component({
  selector: 'tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent implements OnInit {

  constructor() { }

  @Input() list: any;
  @Output() listUpdated =  new EventEmitter<boolean>();

  emailNode: Node = {
    name: 'Send Email',
		icon: 'fa-envelope',
		class: '--blue',
		type: "singleFlow"
  }

  smsNode: Node = {
    name: 'Send SMS',
		icon: 'fa-envelope',
		class: '--blue',
		type: "singleFlow"
  }
  
  leftNode: Node = {
			'name': 'Yes',
			'type': "splitFlow",
			'class': 'workflow_card--yes'
  }

  rightNode: Node = {
    'name': 'No',
    'type': "splitFlow",
    'class': 'workflow_card--no'
  }

  conditionalNode = {
		"name": 'Condition Yes/No?',
		'icon': 'fa-clock',
		'class': '--grey',
		'type': "singleFlow"
  }

  ngOnInit(): void {
  }

  addItem(index: number) {
  }

  onDragover(event: any, index: number) {
    console.log(event)
  }

  onDrop(event: any, index: number) {
    debugger
    if (event.data === "Send Email") {
      this.list.splice(index + 1, 0, this.emailNode)
    } else if (event.data === "Send SMS") {
      this.list.splice(index + 1, 0, this.smsNode)
    } else if (event.data === "If Else") {
      const arrayLeft = this.list.slice(index + 1, this.list.length);
      const leftArray = [this.leftNode, ...arrayLeft]
      this.list.splice(index + 1, this.list.length - index, {
        ...this.conditionalNode,
        "right": [this.rightNode],
        'left': leftArray
      })
    }
    this.listUpdated.emit(true);
  }
}
