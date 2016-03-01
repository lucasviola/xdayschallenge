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

// Seed, for testing purposes
Meteor.startup(function () {
  if(Meteor.isServer && Challenges.find().count() === 0){
    Challenges.insert({
      title: 'Aprender piano',
      description: 'Melhorar habilidades no piano',
      startingDate: '12/01/2016',
      finishingDate: '12/02/2016',
      createdAt: new Date()
    });
  }
});
