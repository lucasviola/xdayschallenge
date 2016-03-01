Activities = new Mongo.Collection("activities");

Meteor.methods({

  addActivity: function (text, string, string) {
    Activities.insert({
      createdAt: new Date()
    });
  },

  removeActivity: function (activityId) {
    Activities.remove(activityId);
  }
});
