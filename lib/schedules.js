Schedules = new Mongo.Collection("schedules");

Meteor.methods({

  addSchedule: function (text, string, string) {
    Schedules.insert({
      name: text,
      startingTime: string,
      finishingTime: string,
      createdAt: new Date()
    });
  },

  deleteSchedule: function (scheduleId) {
    Schedules.remove(scheduleId);
  },

  // has_many relationship
  addActivityToSchedule: function (activityId) {
    //TODO
  }
});
