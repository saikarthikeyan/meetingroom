import { Component } from '@angular/core';
import { Booking } from './booking';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Http } from '@angular/http';

@Component({
	moduleId: module.id,
	selector: 'booking',
	templateUrl: './newmeetingroom.component.html',
	styleUrls: ['./new-room.component.css'],
	
})

export class NewMeetingRoomComponent{
	public book_id = 0;
	public model;	
	public floors = new Array();
	public bookedList = new Array();
	public submitted;
	
	constructor(private http:Http,private activatedRoute: ActivatedRoute,private router:Router){
		
		this.floors = ["Ground Floor", "First Floor", "Second Floor","Third Floor"];		
		this.model = new Booking(null,null,null,null,null,null,null);
		this.submitted = false;	
	}

	onSubmit(){
		this.submitted = true;
		if (this.bookedList) {
			let bookedListsArr = JSON.parse(localStorage.getItem("bookedLists"));
             if(bookedListsArr != null && bookedListsArr.length > 0){
           	    this.book_id = bookedListsArr[bookedListsArr.length-1].book_id;
            }
			this.book_id = ++this.book_id;
			var entry = {
            	'book_id': this.book_id,
                'room_name': this.model.roomName,
                'room_no': this.model.roomNo,
                'floor_name': this.model.floorName,
                'project_name': this.model.projectName,
                'booking_time': this.model.bookingTime,
				'booking_status':this.model.bookingStatus
            };
			
			
            if(bookedListsArr != null && bookedListsArr.length > 0){
           	    this.bookedList = bookedListsArr;
            }
		   
            this.bookedList.push(entry);
            localStorage.setItem("bookedLists", JSON.stringify(this.bookedList));
			this.router.navigate(['/room/listing']);
			
            
        }
	}	
}
