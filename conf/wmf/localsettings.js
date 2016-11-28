"use strict";
exports.setup = function( parsoidConfig ) {
	// Use the API backends directly without hitting the text varnishes.
	// API requests are not cacheable anyway.
	parsoidConfig.defaultAPIProxyURI = 'http://api.svc.eqiad.wmnet';

	// RESTBase uses 2 minutes timeouts for the first request
	// and a higher value subsequently.
	//
	// Set a 3 minute timeout so that RESTBase retries have
	// a chance of succeeding.
	parsoidConfig.timeouts.request = 3*60*1000; // 3 minutes

	// Sample these verbose logs to prevent overwhelm
	// 1% and 2% for empty/tr and empty/li is based on
	// seeing the volume in rt-testing.
	parsoidConfig.loggerSampling = [
		['warn/dsr/inconsistent', 5],
		['warn/empty/li', 1],
		['warn/empty/tr', 0],
		[/^warn\/empty\//, 5],
	];
};
