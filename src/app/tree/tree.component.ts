import { Component, Input, OnInit } from '@angular/core';
import { Node } from '../models/node.model';

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  constructor() { }

	list:any
  showDropbox: boolean = false;
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
  
  onDragover(event:DragEvent) {
    this.showDropbox = true;
    console.log("dragover", JSON.stringify(event, null, 2,), this.showDropbox);
  }

  ngOnInit() {
    window.onbeforeunload  = (event: any) => { 
      // localStorage.setItem('workflowList', JSON.stringify(this.list));
    };
    this.list = JSON.parse(localStorage.getItem('workflowList') || '[]') || [];
  }

  onDrop(event: any, index: number) {
    this.showDropbox = false;
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
  }

  onListChange(event: boolean) {
    debugger
    localStorage.setItem('workflowList', JSON.stringify(this.list));
  }
}
