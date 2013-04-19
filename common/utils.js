var utils = {
	success: function(data) {
		return { status: 'success', api: '', data: data };
	},
	failure: function(message) {
		return { status: 'error', api: '', error: { message: message } };
	}
};

exports.utils = utils;