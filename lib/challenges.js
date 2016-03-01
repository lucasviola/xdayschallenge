Challenges = new Mongo.Collection("challenges");

Meteor.methods({

  addChallenge: function (title, description, startingDate, finishingDate) {
    Challenges.insert({
      title: title,
      description: description,
      startingDate: startingDate,
      finishingDate: finishingDate,
      createdAt: new Date()
    });
  },

  deleteChallenge: function (challengeId) {
    Challenges.remove(challengeId);
  },

  // has_one relationship
  addScheduleToChallenge: function (scheduleId) {
    //TODO
  }
});
