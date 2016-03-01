if (Meteor.isClient) {
    Meteor.subscribe('Challenges');
    Meteor.subscribe('Schedules');
    Meteor.subscribe('Activities');
}
