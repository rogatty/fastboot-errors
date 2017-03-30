import Ember from 'ember';

export default Ember.Route.extend({
	fastboot: Ember.inject.service(),

	model() {
		this.get('fastboot').set('response.statusCode', 404);

		return Ember.RSVP.reject('404 error, this should not be visible to user');
	},

	actions: {
		error() {
			this.render('article-error');
			// return true;
			return false;
		}
	}
});
