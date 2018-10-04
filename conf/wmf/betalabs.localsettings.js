"use strict";
exports.setup = function(parsoidConfig) {
	parsoidConfig.loadWMFApiMap();

	Array.from(parsoidConfig.mwApiMap.values()).forEach(function(apiConf) {
		parsoidConfig.removeMwApi(apiConf);
		parsoidConfig.setMwApi({
			prefix: apiConf.prefix,
			uri: apiConf.uri.replace(/\.org/, '.beta.wmflabs.org'),
		});
	});

	// Wikidata in labs doesn't have the www. subdomain
	parsoidConfig.removeMwApi({ domain: 'www.wikidata.beta.wmflabs.org' });
	parsoidConfig.setMwApi({ prefix: 'wikidatawiki', uri: 'https://wikidata.beta.wmflabs.org/w/api.php' });

	// Some wikis not found in the sitematrix
	parsoidConfig.setMwApi({ prefix: 'labs', uri: 'https://deployment.wikimedia.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'en_rtlwiki', uri: 'https://en-rtl.wikipedia.beta.wmflabs.org/w/api.php' });

	// The production enwiki: a work-around to be able to use the labs parsoid instance from RESTBase
	parsoidConfig.setMwApi({
		prefix: 'enwikiprod',
		uri: 'https://en.wikipedia.org/w/api.php',
		// The production enwiki isn't found on the beta cluster so, from that
		// perspective, it's non-global.  Set the flag to avoid using the
		// defined `mwApiServer`
		nonglobal: true,
	});
};
