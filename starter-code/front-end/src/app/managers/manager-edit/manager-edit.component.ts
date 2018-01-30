import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ManagersService} from "../managers.service";

@Component({
  selector: 'app-manager-edit',
  templateUrl: './manager-edit.component.html',
  styleUrls: ['./manager-edit.component.css']
})
export class ManagerEditComponent implements OnInit {

	updatedManager = <any>{};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private managersService : ManagersService
  ) { }

  ngOnInit() {
    this.route.params.forEach( param => {
      this.managersService.getOneManager(param.id)
        .subscribe(response => {
          console.log(response.json());
          this.updatedManager = response.json();
        });
    });
  }

  updateManager(updatedManager) {
    console.log("updating manager bro!");
    console.log(updatedManager);
    this.managersService.updateManager(updatedManager)
      .subscribe(response => {
        console.log(response.json());
        let manager = response.json();
        this.router.navigate(["/managers/" + manager.id]);
      });
  }

}
