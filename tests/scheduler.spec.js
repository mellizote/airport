'use strict';

import assert from 'assert';
import Scheduler from '../lib/scheduler';

describe('Scheduler Class Tests', () => {
	describe('#t0 = Schedule(). empty', () => {
		it('should to compare to now + 10 minutes is true', () => {
			var scheduler = new Scheduler();
			var now = new Date();
			var t = now.getTime() + scheduler.flight.TIME_EXCLUSIVE;
			var t0 = scheduler.Schedule();
			var compare = t <= t0;
			assert.equal(true,compare);
    	});
  	});
  	describe('#ScheduleAt(Date time) t1=t0 + 10min,t2=ty1 + 10min,t3=t2 + 10min ', () => {
		it('should to scheduler ok', () => {
			var scheduler = new Scheduler();
			var t0 = scheduler.Schedule();
			var t1 = t0 + scheduler.flight.TIME_EXCLUSIVE;
			var t2 = t1 + scheduler.flight.TIME_EXCLUSIVE; 
			var t3 = t2 + scheduler.flight.TIME_EXCLUSIVE;
			var ok0 = scheduler.ScheduleAt(t0);
			var ok1 = scheduler.ScheduleAt(t1);
			var ok2 = scheduler.ScheduleAt(t2);
			var ok3 = scheduler.ScheduleAt(t3);
			var res = ok0 && ok1 && ok2 && ok3;
			assert.equal(true,res);
    	});
  	});
  	describe('#Schedule(). no empty', () => {
		it('should to schedules hole', () => {
			var scheduler = new Scheduler();
			var t0 = scheduler.Schedule();
			var ok0 = scheduler.ScheduleAt(t0);
			var t1 = t0 + scheduler.flight.TIME_EXCLUSIVE; 
			var t2 = t1 + scheduler.flight.TIME_EXCLUSIVE;
			var t3 = t2 + scheduler.flight.TIME_EXCLUSIVE;
			var ok1 = scheduler.ScheduleAt(t1);
			var ok3 = scheduler.ScheduleAt(t3);
			var t2b = scheduler.Schedule();
			assert.equal(t2b,t2);
    	});
  	});
  	describe('#CouldScheduleAt(time). true', () => {
		it('should to return true', () => {
			var scheduler = new Scheduler();
			var t0 = scheduler.Schedule();
			var ok0 = scheduler.ScheduleAt(t0);
			var t1 = t0 + scheduler.flight.TIME_EXCLUSIVE;
			var result = scheduler.CouldScheduleAt(t1);
			assert.equal(true,result);
    	});
  	});
  	describe('#CouldScheduleAt(time). false', () => {
		it('should to return false', () => {
			var scheduler = new Scheduler();
			var t0 = scheduler.Schedule();
			var ok0 = scheduler.ScheduleAt(t0);
			var t1 = t0 + scheduler.flight.TIME_EXCLUSIVE - 1;
			var result = scheduler.CouldScheduleAt(t1);
			assert.equal(false,result);
    	});
  	});
  	describe('#UnscheduleAt(time). false', () => {
		it('should to return false', () => {
			var scheduler = new Scheduler();
			var t0 = scheduler.Schedule();
			var ok0 = scheduler.ScheduleAt(t0);
			var t1 = t0 + 1;
			var result = scheduler.UnscheduleAt(t1);
			assert.equal(false,result);
    	});
  	});
  	describe('#UnscheduleAt(time). true', () => {
		it('should to return true', () => {
			var scheduler = new Scheduler();
			var t0 = scheduler.Schedule();
			var ok0 = scheduler.ScheduleAt(t0);
			var t1 = t0 + scheduler.flight.TIME_EXCLUSIVE;
			var ok1 = scheduler.ScheduleAt(t1);
			var result = scheduler.UnscheduleAt(t1);
			assert.equal(true,result);
    	});
  	});
});