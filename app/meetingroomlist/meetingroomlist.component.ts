import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'room-list',
  templateUrl: './meetingroomlist.component.html',
  
})
export class MeetingRoomListComponent implements OnInit {
	
  public listOFRoom = new Array();   
  constructor() { 
	let bookedListsArr = localStorage.getItem("bookedLists");
	if(bookedListsArr != null && bookedListsArr.length > 0){
		this.listOFRoom = JSON.parse(bookedListsArr);
	}
	
  }
  ngOnInit() {
  }

}
