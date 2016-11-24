"use strict";
exports.setup = function(parsoidConfig) {
	parsoidConfig.initMwApiMap();

	Array.from(parsoidConfig.mwApiMap.values()).forEach(function(apiConf) {
		parsoidConfig.removeMwApi(apiConf);
		parsoidConfig.setMwApi({
			prefix: apiConf.prefix,
			uri: apiConf.uri.replace(/\.org/, '.beta.wmflabs.org'),
		});
	});

	// Some wikis not found in the sitematrix
	parsoidConfig.setMwApi({ prefix: 'labs', uri: 'https://deployment.wikimedia.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'en_rtlwiki', uri: 'https://en-rtl.wikipedia.beta.wmflabs.org/w/api.php' });

	// The production enwiki: a work-around to be able to use the labs parsoid instance from RESTBase
	parsoidConfig.setMwApi({ prefix: 'enwikiprod', uri: 'https://en.wikipedia.org/w/api.php' });

	// Sample verbose logs
	parsoidConfig.loggerSampling = [
		['warn/dsr/inconsistent', 5],
		['warn/empty/li', 10],
		['warn/empty/tr', 10],
		[/^warn\/empty\//, 10],
	];
};
