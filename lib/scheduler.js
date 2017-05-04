'use strict';

import Flight from './flight';

export default class Scheduler {
	constructor() {
		this.flight = new Flight();
	}
 	// returns true if there’s room to schedule at ‘time’
 	CouldScheduleAt(time) {
 		return this.flight.isAvailableAt(time);
 	}

 	// returns true if we successfully scheduled
	ScheduleAt(time){
		if (!this.CouldScheduleAt(time)){
			return false;
		}
		return this.flight.insert(time);
	}
	
	// Choose an available time to schedule at, and return that time
	Schedule() {
		return this.flight.availableAt();
	}

	// returns true if we successfully unscheduled something
	UnscheduleAt(time) {
		return this.flight.remove(time);
	}
}