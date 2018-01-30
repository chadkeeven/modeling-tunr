import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-new',
  templateUrl: './manager-new.component.html',
  styleUrls: ['./manager-new.component.css']
})
export class ManagerNewComponent implements OnInit {

	newManger = <any>{};

  constructor() { }

  ngOnInit() {
  }

  
}
