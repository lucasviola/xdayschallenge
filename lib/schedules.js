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
    Schedule.remove(scheduleId);
  }
});
