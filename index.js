'use strict';

import Scheduler from './lib/scheduler';

//var scheduler = new Scheduler();
//Schedule();
//var t0 = scheduler.Schedule();
// se espera la hora actual + 10 min

//ScheduleAt(Date time);
//var t1 = t0 + scheduler.flight.TIME_EXCLUSIVE;
//var t2 = t1 + scheduler.flight.TIME_EXCLUSIVE; 
//var t3 = t2 + scheduler.flight.TIME_EXCLUSIVE; 

//var ok1 = scheduler.ScheduleAt(t1);
//var ok3 = scheduler.ScheduleAt(t3);
//var ok2 = scheduler.ScheduleAt(t2);


//CouldScheduleAt(Date time);
//var t4 = t3 + scheduler.flight.TIME_EXCLUSIVE - 1;
//var ok4 = scheduler.CouldScheduleAt(t4);
//false
//console.log(ok4);
//var t4 = t3 + scheduler.flight.TIME_EXCLUSIVE;
//true
//var ok4 = scheduler.CouldScheduleAt(t4);
//console.log(ok4);

//UnscheduleAt
//var t5 = t4 + scheduler.flight.TIME_EXCLUSIVE + 1;
//false
//console.log(scheduler.UnscheduleAt(t4));
//true
//console.log(scheduler.UnscheduleAt(t3));
//console.log(scheduler.UnscheduleAt(t1));
//console.log(scheduler.UnscheduleAt(t0));
//console.log(scheduler.UnscheduleAt(t2));