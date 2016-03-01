Schedules = new Mongo.Collection("schedules");

Meteor.methods({

  addSchedule: function (text, datetime, datetime) {
    Schedules.insert({
      name: text,
      startingTime: datetime,
      finishingTime: datetime,
      createdAt: new Date()
    });
  }
});
