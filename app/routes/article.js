import Ember from 'ember';

export default Ember.Route.extend({
	fastboot: Ember.inject.service(),

	model() {
		if (this.get('fastboot.isFastBoot')) {
			this.get('fastboot').set('response.statusCode', 404);
		}

		return Ember.RSVP.reject('404 error, this should not be visible to user');
	}
});
