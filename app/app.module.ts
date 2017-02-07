import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RoomAvailabilityComponent } from './roomavailability/roomavailability.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { MeetingRoomListComponent } from './meetingroomlist/meetingroomlist.component';
import { NewMeetingRoomComponent } from './newmeetingroom/newmeetingroom.component';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'room/add',pathMatch: 'full'},
  { path: 'room/availability', component: RoomAvailabilityComponent },
  { path: 'room/listing', component: MeetingRoomListComponent },
  { path: 'room/add', component: NewMeetingRoomComponent },
  { path: 'room/details/:id', component: RoomDetailsComponent }
];


@NgModule({
  declarations: [  
	RoomAvailabilityComponent,
	RoomDetailsComponent,
	MeetingRoomListComponent,
	AppComponent,
	NewMeetingRoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
