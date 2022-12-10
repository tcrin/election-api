module.exports = function(router){
    var voterController = require('../controllers/voter_controller');
    router.get('/voter', voterController.getAllVoter );
    router.get('/voter-sign-in', voterController.getVoterSignIn );

    // router.get('/event-position', eventController.getEventPosition );
    // router.get('/event/:id_event', eventController.getEventById );
    // router.post('/event', eventController.insertEvent );
    // router.put('/event', eventController.updateEvent );
    // router.delete('/event/:id_event', eventController.deleteEvent );
};