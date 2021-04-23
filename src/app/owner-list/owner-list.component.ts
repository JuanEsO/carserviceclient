import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../shared/owner/owner.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  owners: Array<any>;

  constructor(private OwnerService: OwnerService) { }

  ngOnInit() {
    this.OwnerService.getAll().subscribe(data => {
      console.log(data) 
      this.owners = data._embedded.owners;
      /* for (const car of this.cars) {
        
      } */
    });
  }
}
