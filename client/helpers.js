Template.body.helpers({
  challenges: function () {
    return Challenges.find({}, {sort: { createdAt: -1 }});
  },
  schedules: function () {
    return Schedules.find({});
  },
  activities: function () {
    return Activities.find({});
  }
});
