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
      this.owners = data._embedded.owners;
      /* for (const car of this.cars) {
        
      } */
    });
  }

  getOwnerId(href) {
    this.OwnerService.search(href).subscribe(data =>{
      console.log(data)
    })
  }

  
}
