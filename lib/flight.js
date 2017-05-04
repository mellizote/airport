export default class Flight {
	constructor() {
		this.queue = [];
		this.TIME_EXCLUSIVE = 600000; //10 minutes in miliseconds;
	}

	static compare(a, b) {
		var timeA = new Date(a);
		var timeB = new Date(b);
   		return timeA.getTime() > timeB.getTime() ? 1 : timeA.getTime() < timeB.getTime() ? -1 : 0;
  	};

	find(time){
		var left = 0;
		var right = this.queue.length;
		var found;
		while (left < right) {
			let middle = (left + right) >> 1;
			let result = Flight.compare(time,this.queue[middle]);
			if (result > 0) {
				left = middle + 1;
		 	} else {
				right = middle;
		 		found = !result;
			}
		}
		return found ? left : ~left;
	}

	insert(time) {
		var index = this.find(time);
		if (index < 0) {
			this.queue.splice(-(index + 1), 0, time);
			return true;
		}
		return false;
	}

	remove(time) {
		var index = this.find(time);
		if (index >= 0) {
			this.queue.splice(index, 1);
			return true;
		}
		return false;
	}

	isAvailableAt(time){
		const overlap = this.queue.findIndex(flight => {
 			const timeFlight = new Date(flight);
 			const t0 = timeFlight.getTime() - this.TIME_EXCLUSIVE;
 			const t1 = timeFlight.getTime() + this.TIME_EXCLUSIVE;
 			const request = new Date(time);
 			return t0 < request.getTime() && request.getTime() < t1;
 		});
 		return overlap === -1;
	}

	availableAt(){
		const hole = this.queue.findIndex((flight,index,array) => {
 			const timeFlight = new Date(flight);
 			const t0 = timeFlight.getTime();
 			if (index < array.length - 1){
 				const timeNextFligth = new Date(array[index+1]);
 				const t1 = timeNextFligth.getTime();
 				return t1 - t0 >= 2 * this.TIME_EXCLUSIVE;	
 			}
 			return false;
 		});
 		var time;
 		if (hole === -1 ){
 			if (this.queue.length){
 				time = this.queue[this.queue.length - 1] + this.TIME_EXCLUSIVE;	
 			}
 			else{
 				time = new Date().getTime() + this.TIME_EXCLUSIVE;	
 			}
 			//this.queue.push(time);
 			return time;
 		}
 		time = this.queue[hole] + this.TIME_EXCLUSIVE;
 		//this.queue.splice(-(hole + 1), 0, time);
 		return time;
	}


}