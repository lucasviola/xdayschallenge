Meteor.publish('Schedules', function () {
  return Schedules.find();
});
