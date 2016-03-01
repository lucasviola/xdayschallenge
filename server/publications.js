Meteor.publish('Challenges', function () {
  return Challenges.find();
});

Meteor.publish('Schedules', function () {
  return Schedules.find();
});

Meteor.publish('Activities', function () {
  return Activities.find();
});
