import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-room-details',
  templateUrl: 'room-details.component.html',
  styles: [`
  .availability span {
      color: red;
    }
    .btn-circle {
    width: 30px;
    height: 30px;
    text-align: center;
    padding: 6px 0;
    font-size: 12px;
    line-height: 1.428571429;
    border-radius: 15px;
    }
    .availability span.available {
      color: green;
    }
  `]
})
export class RoomDetailsComponent implements OnInit {
  roomId;
  roomDetails = [];
  constructor( private http:Http,private activatedRoute: ActivatedRoute,private router:Router) { 
  }

  ngOnInit() {
    this.getRooms();
  }
  backToListing() {
	this.router.navigate(['/room/listing']);
  }
  getRooms() {
    this.activatedRoute.params.subscribe((params: Params) => {
        this.roomId = +params['id'];
    });
    if(!localStorage.getItem('bookedLists')) {
    this.http.get('./roomDetails.json')
      .map(res => res.json())
      .subscribe(
        data => { 
          this.roomDetails = data.filter((row) => row.roomId === this.roomId)
        },
        err => console.error(err),
        () => console.log(this.roomDetails)
      );
    } else {
	  
      let rooms = JSON.parse(localStorage.getItem('bookedLists'));
      this.roomDetails = rooms.filter((row) => row.book_id === this.roomId)
    }
  }
}
