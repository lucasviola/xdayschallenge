// Index helpers

Template.body.helpers({
  challenges: function () {
    return Challenges.find({});
  },
  schedules: function () {
    return Schedules.find({});
  },
  activities: function () {
    return Activities.find({});
  }
});
