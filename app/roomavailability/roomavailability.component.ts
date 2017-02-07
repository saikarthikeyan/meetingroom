import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './roomavailability.component.html',
})
export class RoomAvailabilityComponent {   		
		MeetingRoomID:any;
		MeetingStatus:any;
		
		meetingrooms  = JSON.parse(localStorage.getItem('bookedLists'))
		onChange(MeetingID){
			this.MeetingRoomID = MeetingID;
			let sum =0;
            for(let mr of this.meetingrooms){
			
			if(MeetingID == mr.book_id){
		    
			this.MeetingStatus = mr.booking_status ? "Booked":"Available";
			
			}			  
		  }
		}
}
