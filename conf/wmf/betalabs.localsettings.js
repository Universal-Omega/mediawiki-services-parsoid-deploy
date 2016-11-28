"use strict";
exports.setup = function(parsoidConfig) {
	parsoidConfig.setMwApi({ prefix: 'aawiki', uri: 'https://aa.wikipedia.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'arwiki', uri: 'https://ar.wikipedia.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'cawiki', uri: 'https://ca.wikipedia.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'commonswiki', uri: 'https://commons.wikimedia.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'dewiki', uri: 'https://de.wikipedia.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'dewiktionary', uri: 'https://de.wiktionary.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'en_rtlwiki', uri: 'https://en-rtl.wikipedia.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'enwiki', uri: 'https://en.wikipedia.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'enwikibooks', uri: 'https://en.wikibooks.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'enwikinews', uri: 'https://en.wikinews.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'enwikiquote', uri: 'https://en.wikiquote.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'enwikisource', uri: 'https://en.wikisource.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'enwikiversity', uri: 'https://en.wikiversity.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'enwikivoyage', uri: 'https://en.wikivoyage.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'enwiktionary', uri: 'https://en.wiktionary.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'eowiki', uri: 'https://eo.wikipedia.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'eswiki', uri: 'https://es.wikipedia.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'fawiki', uri: 'https://fa.wikipedia.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'hewiki', uri: 'https://he.wikipedia.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'hiwiki', uri: 'https://hi.wikipedia.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'jawiki', uri: 'https://ja.wikipedia.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'kowiki', uri: 'https://ko.wikipedia.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'labs', uri: 'https://deployment.wikimedia.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'loginwiki', uri: 'https://login.wikimedia.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'metawiki', uri: 'https://meta.wikimedia.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'nlwiki', uri: 'https://nl.wikipedia.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'ruwiki', uri: 'https://ru.wikipedia.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'simplewiki', uri: 'https://simple.wikipedia.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'sqwiki', uri: 'https://sq.wikipedia.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'testwiki', uri: 'https://test.wikimedia.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'ukwiki', uri: 'https://uk.wikipedia.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'wikidatawiki', uri: 'https://wikidata.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'zerowiki', uri: 'https://zero.wikimedia.beta.wmflabs.org/w/api.php' });
	parsoidConfig.setMwApi({ prefix: 'zhwiki', uri: 'https://zh.wikipedia.beta.wmflabs.org/w/api.php' });

	// the production enwiki: a work-around to be able to use the labs parsoid instance from RESTBase
	parsoidConfig.setMwApi({ prefix: 'enwikiprod', uri: 'https://en.wikipedia.org/w/api.php' });

	// Sample verbose logs
	parsoidConfig.loggerSampling = [
		['warn/dsr/inconsistent', 5],
		['warn/empty/li', 10],
		['warn/empty/tr', 10],
		[/^warn\/empty\//, 10],
	];
};
